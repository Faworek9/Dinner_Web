import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
import logging

logger = logging.getLogger(__name__)

# Konfiguracja serwera pocztowego Gmail SMTP
SMTP_HOST = os.environ.get("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", 465))
SMTP_USER = os.environ.get("SMTP_USER", "ewidencja.obiadow@gmail.com")
# Hasło aplikacji generowane w Google Account (16 znaków, np. "abcd efgh ijkl mnop")
SMTP_PASSWORD = os.environ.get("SMTP_PASSWORD", "")
NOTIFICATION_RECIPIENT = os.environ.get("ADMIN_EMAIL", "ewidencja.obiadow@gmail.com")

def send_contact_notification(name: str, school_name: str, contact_info: str, message: str) -> bool:
    """
    Wysyła powiadomienie e-mail o nowej wiadomości z formularza na adres ewidencja.obiadow@gmail.com.
    Jeśli SMTP_PASSWORD nie jest ustawione (np. w środowisku lokalnym), nie powoduje błędu.
    """
    password = os.environ.get("SMTP_PASSWORD", SMTP_PASSWORD).replace(" ", "").strip()
    
    if not password:
        logger.info(
            "SMTP_PASSWORD nie jest skonfigurowane w zmiennych środowiskowych. "
            "Powiadomienie e-mail pominięte (wiadomość zapisano pomyślnie w bazie)."
        )
        return False

    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = f"🔔 [Ewidencja Obiadów] Nowa wiadomość: {school_name} ({name})"
        msg["From"] = f"Ewidencja Obiadów <{SMTP_USER}>"
        msg["To"] = NOTIFICATION_RECIPIENT
        
        # Jeśli podano e-mail w kontakcie, ustaw Reply-To, żeby móc od razu odpisać w Gmailu
        clean_contact = contact_info.strip()
        if "@" in clean_contact:
            msg["Reply-To"] = clean_contact

        # Treść tekstowa
        text_content = f"""Nowa wiadomość ze strony Ewidencja Obiadów

Od: {name}
Szkoła / Placówka: {school_name}
Kontakt zwrotny: {contact_info}

Treść wiadomości:
--------------------------------------------------
{message}
--------------------------------------------------
"""

        # Elegancka treść HTML
        html_content = f"""<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f8fafc; padding: 20px; margin: 0;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
    <div style="background: #1d4ed8; color: #ffffff; padding: 24px;">
      <h2 style="margin: 0; font-size: 20px; font-weight: 700;">🍽️ Ewidencja Obiadów Szkolnych</h2>
      <p style="margin: 4px 0 0 0; font-size: 13px; color: #bfdbfe;">Nowa wiadomość z formularza na stronie</p>
    </div>
    
    <div style="padding: 24px;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 130px;">Osoba:</td>
          <td style="padding: 8px 0; font-size: 14px; font-weight: 700; color: #0f172a;">{name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Szkoła / Miasto:</td>
          <td style="padding: 8px 0; font-size: 14px; font-weight: 700; color: #0f172a;">{school_name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Kontakt zwrotny:</td>
          <td style="padding: 8px 0; font-size: 14px; font-weight: 700; color: #2563eb;">
            <a href="mailto:{clean_contact}" style="color: #2563eb; text-decoration: underline;">{clean_contact}</a>
          </td>
        </tr>
      </table>

      <div style="background: #f1f5f9; border-radius: 12px; padding: 16px; border: 1px solid #e2e8f0;">
        <span style="display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; color: #475569; margin-bottom: 6px;">Treść pytania:</span>
        <p style="margin: 0; font-size: 14px; color: #0f172a; white-space: pre-wrap;">{message}</p>
      </div>
    </div>
    
    <div style="background: #f8fafc; padding: 14px 24px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
      Wiadomość z serwisu Ewidencja Obiadów. Aby odpisać, kliknij "Odpowiedz" w Gmailu.
    </div>
  </div>
</body>
</html>
"""
        msg.attach(MIMEText(text_content, "plain", "utf-8"))
        msg.attach(MIMEText(html_content, "html", "utf-8"))

        if SMTP_PORT == 465:
            with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT, timeout=10) as server:
                server.login(SMTP_USER, password)
                server.send_message(msg)
        else:
            with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=10) as server:
                server.starttls()
                server.login(SMTP_USER, password)
                server.send_message(msg)

        logger.info("Wiadomość z formularza została pomyślnie wysłana na adres: %s", NOTIFICATION_RECIPIENT)
        return True
    except Exception as e:
        logger.error("Błąd podczas wysyłania e-maila SMTP: %s", e)
        return False
