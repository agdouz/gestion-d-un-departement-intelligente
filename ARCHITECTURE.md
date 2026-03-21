# Future Faculty - Architecture Guide

Welcome to the **Future Faculty** project! This repository follows a modern microservices-oriented architecture to separate concerns and use the best tools for each specific job.

## Overview of Services

The project is split into three main services:

1. **Frontend (Next.js / React)**  
   - **Location:** Project Root (`/src`, `/public`, etc.)
   - **Role:** Handles the user interface, client-side routing, and rendering. Uses modern React patterns and connects to the backend REST APIs.
   - **Default Port:** `3000`
   - **Run Command:** `npm run dev`

2. **Core Backend (Spring Boot / Java)**  
   - **Location:** `/backend-core`
   - **Role:** The central source of truth. Handles business logic (professors, faculties, schedules), relational database operations (PostgreSQL/MySQL), Authentication/Security (JWT/OAuth), and serves data to the Next.js frontend.
   - **Default Port:** `8080`
   - **Run Command:** `./mvnw spring-boot:run` (or via IDE)

3. **AI Engine (Django / Python)**  
   - **Location:** `/ai-engine`
   - **Role:** Handles any AI-specific workloads (e.g., natural language processing, intelligent schedule generation, predictions, data science tooling). Used by the Core Backend via internal API calls or message queues.
   - **Default Port:** `8000`
   - **Run Command:** `python manage.py runserver`

## How They Communicate

- **Client to Backend:** The Next.js frontend will make HTTP REST calls (e.g., using `fetch` or `axios`) to the Spring Boot backend (`http://localhost:8080/api/v1/...`).
- **Backend to AI Engine:** When the Spring Boot backend encounters a task requiring AI processing (e.g., "Generate an optimal schedule"), it makes a server-to-server internal HTTP request to the Django AI Engine (`http://localhost:8000/api/...`). The AI Engine does the heavy lifting, returns the result to Spring Boot, which then saves it and responds to the frontend.

## Getting Started for Developers

- **Frontend Devs:** Focus on the root folder. Install `node_modules` with `npm install`, then start the development server.
- **Backend Devs (Java):** Open the `/backend-core` folder in IntelliJ IDEA or Eclipse. Ensure you have Java 17+ installed.
- **AI Devs (Python):** Navigate to `/ai-engine`, activate your virtual environment (`venv/Scripts/activate`), install packages (`pip install -r requirements.txt`), and run the Django server.

Make sure your CORS settings in Spring Boot and Django allow requests from `localhost:3000` during local development!
