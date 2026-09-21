from pydantic import BaseModel, Field
from typing import List, Optional

class ContactRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=100, description="Imię i nazwisko osoby zgłaszającej")
    school_name: str = Field(..., min_length=2, max_length=150, description="Nazwa szkoły lub placówki")
    contact_info: str = Field(..., min_length=5, max_length=100, description="Telefon lub adres e-mail")
    message: str = Field(..., min_length=5, max_length=1500, description="Treść pytania lub wiadomość")

class ContactResponse(BaseModel):
    success: bool
    message: str
    contact_id: Optional[int] = None

class AppInfoResponse(BaseModel):
    app_name: str
    version: str
    release_date: str
    file_size_mb: float
    os_requirement: str
    download_filename: str

class Testimonial(BaseModel):
    id: int
    author: str
    role: str
    school: str
    city: str
    quote: str
    years_using: str

class StatsResponse(BaseModel):
    active_schools: int
    meals_served_monthly: int
    satisfaction_rate: int
    years_on_market: int
    testimonials: List[Testimonial]

class FaqItem(BaseModel):
    id: int
    category: str
    question: str
    answer: str
