import sqlite3
import os
from datetime import datetime
from typing import List, Dict, Any

DB_PATH = os.path.join(os.path.dirname(__file__), "contacts.db")

def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS contact_messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            school_name TEXT NOT NULL,
            contact_info TEXT NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            is_read INTEGER DEFAULT 0
        )
    """)
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS download_logs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            filename TEXT NOT NULL,
            downloaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            user_agent TEXT
        )
    """)
    conn.commit()
    conn.close()

def save_contact_message(name: str, school_name: str, contact_info: str, message: str) -> int:
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        """
        INSERT INTO contact_messages (name, school_name, contact_info, message, created_at)
        VALUES (?, ?, ?, ?, ?)
        """,
        (name.strip(), school_name.strip(), contact_info.strip(), message.strip(), datetime.now().isoformat())
    )
    conn.commit()
    inserted_id = cursor.lastrowid
    conn.close()
    return inserted_id

def get_all_messages() -> List[Dict[str, Any]]:
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM contact_messages ORDER BY created_at DESC")
    rows = cursor.fetchall()
    messages = [dict(row) for row in rows]
    conn.close()
    return messages

def log_download(filename: str, user_agent: str = "") -> int:
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO download_logs (filename, downloaded_at, user_agent) VALUES (?, ?, ?)",
        (filename, datetime.now().isoformat(), user_agent[:250] if user_agent else "")
    )
    conn.commit()
    inserted_id = cursor.lastrowid
    conn.close()
    return inserted_id

def get_download_count() -> int:
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT COUNT(*) FROM download_logs")
    count = cursor.fetchone()[0]
    conn.close()
    return count

# Inicjalizacja tabel przy imporcie modułu
init_db()


