# 🎓 Future Faculty — Intelligent University Department & Academic Operations Platform

<p align="center">
  <a href="https://github.com/agdouz"><img src="https://img.shields.io/badge/Author-agdouz-0A66C2?style=for-the-badge&logo=github&logoColor=white" alt="Author" /></a>
  <img src="https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/Spring%20Boot-3.x-6DB33F?style=for-the-badge&logo=spring&logoColor=white" alt="Spring Boot" />
  <img src="https://img.shields.io/badge/Django-5.2-092E20?style=for-the-badge&logo=django&logoColor=white" alt="Django" />
  <img src="https://img.shields.io/badge/MySQL-Relational-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
</p>

---

## 📌 Overview

**Future Faculty** is an enterprise-grade university department and faculty operations platform engineered to digitize, optimize, and streamline complex academic workflows across university departments (developed for the Faculty of Legal, Economic and Social Sciences - FSJES context). 

The platform resolves critical academic bottlenecks: schedule collisions, faculty workload imbalances, manual course syllabus administration, and lack of real-time student evaluation analytics. Built upon a modern decoupled architecture, it leverages a high-performance **Next.js 14 App Router** frontend, a **Spring Boot** core business backend, and an **intelligent Django Python AI Engine** for automated scheduling optimization and pedagogical insights.

---

## 🌟 Key Features

- 👨‍🏫 **Faculty & Professor Lifecycle Management**:
  - Detailed professor profiles, department assignments, teaching loads, and availability constraints.
  - Dedicated personal faculty space (/espace-perso) for course uploads and schedule tracking.
- 📅 **Intelligent Schedule & Timetable Planning (/schedule)**:
  - Drag-and-drop course session scheduling with automatic room and teacher conflict detection.
  - Integration with the AI Engine for constraint-satisfaction schedule optimization.
- 📚 **Academic Programs & Course Modules (/filieres & /matieres)**:
  - Hierarchical structuring of academic streams (Filières), semesters (S1 through S6 / Master), and modules.
  - Credit hours, prerequisites, and syllabus progress tracking.
- 📊 **Student Evaluation & Pedagogical Analytics (/evaluation-etudiant & /insights)**:
  - Real-time grade distributions, passing rate analytics, and cohort comparison charts powered by Recharts.
  - Automated PDF report card and administrative transcript generation using jsPDF.
- 🧪 **Department Simulation Engine (/simulation)**:
  - Scenario testing for cohort influx, room availability crises, and faculty recruitment needs.

---

## 🏗️ Architecture & Communication Flow

`
                                ┌─────────────────────────────────────────┐
                                │           Next.js 14 Frontend           │
                                │   React 18 • TypeScript • Tailwind CSS   │
                                │   Radix UI • TanStack Query • Recharts  │
                                └────────────────────┬────────────────────┘
                                                     │
                                       HTTP REST API │ (JSON / JWT)
                                                     ▼
                                ┌─────────────────────────────────────────┐
                                │       Core Backend (Spring Boot)        │
                                │   • Domain Business Logic               │
                                │   • Spring Security & JWT Auth          │
                                │   • Relational Persistence (Hibernate)  │
                                └─────────┬─────────────────────┬─────────┘
                                          │                     │
                     Server-to-Server RPC │                     │ JPA / JDBC
                                          ▼                     ▼
┌─────────────────────────────────────────┐ ┌─────────────────────────────┐
│          AI Engine (Django / Python)    │ │        MySQL Database       │
│   • Timetable Constraint Solver         │ │   • Professors & Users      │
│   • Academic Performance Insights       │ │   • Courses & Modules       │
│   • Pedagogical Analytics Endpoints     │ │   • Rooms & Sessions        │
└─────────────────────────────────────────┘ └─────────────────────────────┘
`

---

## 💻 Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | Next.js 14.2 (App Router), React 18, TypeScript 5.8 |
| **Styling & Components**| Tailwind CSS, Radix UI Primitives, Lucide React, Framer Motion |
| **State & Data Fetching** | TanStack React Query v5, React Hook Form, Zod Validation |
| **Visualization & Export**| Recharts, jsPDF, Embla Carousel, Sonner Toasts |
| **Core Backend** | Java 17+, Spring Boot, Spring Data JPA, Hibernate, Maven |
| **AI & Scheduling Engine**| Python 3.10+, Django 5.2, Django REST Framework, sqlparse |
| **Database** | MySQL / PostgreSQL |

---

## 📂 Project Organization

`
gestion-d-un-departement-intelligente/
├── src/                                  # Next.js 14 Frontend Application
│   ├── app/                              # App Router route handlers & pages
│   │   ├── auth/                         # Authentication & login views
│   │   ├── dashboard/                    # Primary department administrative dashboard
│   │   ├── professors/                   # Faculty directory & assignment management
│   │   ├── filieres/                     # Academic degree programs & curricula
│   │   ├── matieres/                     # Course modules & credit structures
│   │   ├── schedule/                     # Interactive timetable grid & conflict resolver
│   │   ├── evaluation-etudiant/          # Student grade entry & performance tracking
│   │   ├── insights/                     # Analytics, KPIs, and department reports
│   │   ├── simulation/                   # Academic capacity & load scenario simulation
│   │   └── espace-perso/                 # Individual teacher portal
│   ├── components/                       # Reusable UI primitives (dialogs, cards, data tables)
│   ├── hooks/                            # Custom React hooks (auth, query handlers)
│   └── lib/                              # Utility helpers, date formatters, API clients
│
├── ai-engine/                            # Django Python AI & Optimization Service
│   ├── core/                             # Scheduling algorithms & analytics controllers
│   ├── manage.py                         # Django execution utility
│   └── requirements.txt                  # Python AI dependencies
│
├── package.json                          # Frontend dependencies & scripts
├── tailwind.config.ts                    # UI design system configuration
└── README.md                             # Project documentation (this file)
`

---

## ⚡ Quickstart & Installation Guide

### Prerequisites
- **Node.js**: v18+ & npm (or Bun)
- **Java**: JDK 17+ (for Spring Boot backend)
- **Python**: 3.10+ (for AI Engine)
- **MySQL**: 8.0+

### 1. Frontend Setup (Next.js)
`ash
# Clone the repository
git clone https://github.com/agdouz/gestion-d-un-departement-intelligente.git
cd gestion-d-un-departement-intelligente

# Install dependencies
npm install

# Start development server
npm run dev
`
- Open http://localhost:3000 in your browser.

### 2. AI Engine Setup (Django)
`ash
# Navigate to AI engine directory
cd ai-engine

# Create and activate virtual environment
python -m venv venv
# On Windows:
.\venv\Scripts\activate
# On Linux/macOS:
# source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run migrations and start service
python manage.py migrate
python manage.py runserver 8000
`
- AI REST API active at http://127.0.0.1:8000/.

---

## 👨‍💻 Author

**Mouad Agdouz**  
- GitHub: [@agdouz](https://github.com/agdouz)  
- Profile: [https://github.com/agdouz](https://github.com/agdouz)