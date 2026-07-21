# 🏥 Healthcare Recommendation System – React + TypeScript

A modern, responsive React + TypeScript application that provides **AI-powered healthcare recommendations** based on patient demographics, symptoms, and medical history. The application communicates with a backend REST API (FastAPI or similar) to generate personalized treatment, diet, lifestyle, and follow-up recommendations.

---

# 📖 Overview

The Healthcare Recommendation System enables healthcare professionals and researchers to quickly obtain AI-generated recommendations by entering patient information.

The application features:

- Clean Material UI interface
- Type-safe React + TypeScript architecture
- Modular component-based design
- REST API integration using Axios
- Form validation using React Hook Form
- Loading & error handling
- Responsive layout
- Reusable services and hooks

---

# ✨ Features

- 👤 Patient Information Form
- 🩺 AI Healthcare Recommendations
- 💊 Treatment Suggestions
- 🥗 Diet Plan Recommendations
- 🏃 Lifestyle Change Suggestions
- 📅 Follow-up Recommendations
- 📱 Responsive Material UI Design
- ⚡ Fast API Communication
- 🔒 Type Safety with TypeScript
- ✅ Form Validation
- 🚨 Error Handling
- ⏳ Loading Indicators

---

# 🛠 Technology Stack

| Category | Technology |
|----------|------------|
| Frontend | React 19 |
| Language | TypeScript |
| Build Tool | Vite |
| UI Library | Material UI (MUI) |
| Forms | React Hook Form |
| HTTP Client | Axios |
| Styling | CSS + Material UI |
| State Management | React Hooks |

---

# 📂 Project Structure

```

src/
│
├── api/
│ ├── axios.ts
│ └── recommendationApi.ts
│
├── assets/
│ ├── hero.png
│ ├── react.svg
│ └── vite.svg
│
├── components/
│ ├── ErrorAlert.tsx
│ ├── LoadingSpinner.tsx
│ ├── PatientProfileCard.tsx
│ ├── RecommendationCard.tsx
│ ├── RecommendationForm.tsx
│ └── RecommendationList.tsx
│
├── hooks/
│ └── useRecommendation.ts
│
├── pages/
│ └── RecommendationPage.tsx
│
├── services/
│ └── recommendationService.ts
│
├── types/
│ ├── request.ts
│ └── response.ts
│
├── utils/
│ └── formatter.ts
│
├── App.tsx
├── main.tsx
├── App.css
└── index.css


Application Architecture
                    User
                      │
                      ▼
        Recommendation Form
                      │
                      ▼
             React Hook Form
                      │
                      ▼
          Recommendation Page
                      │
                      ▼
          Recommendation API
                      │
                      ▼
                 Axios Client
                      │
                      ▼
          FastAPI REST Endpoint
                      │
                      ▼
         AI Recommendation Engine
                      │
                      ▼
          Recommendation Response
                      │
                      ▼
      Patient Profile + Recommendations
🚀 Installation
Clone Repository
git clone https://github.com/your-org/healthcare-recommendation-ui.git

cd healthcare-recommendation-ui
Install Dependencies
npm install

or

yarn
Start Development Server
npm run dev

Application:

http://localhost:5173
Build Production
npm run build
Preview Production Build
npm run preview
📦 Required Packages
npm install

react
react-dom
typescript
vite

@mui/material
@mui/icons-material
@emotion/react
@emotion/styled

react-hook-form

axios
⚙ Environment Configuration

Create

.env

Example

VITE_API_BASE_URL=http://localhost:8000

Example Axios Configuration

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
});
📝 Patient Request

Example request sent to backend

{
  "age": 45,
  "gender": "Male",
  "symptoms": "Fever, cough, fatigue",
  "medical_history": "Diabetes"
}
📤 Sample Response
{
  "patient_profile": {
    "age": 45,
    "gender": "Male",
    "profile_text": "Middle-aged diabetic patient..."
  },
  "recommendations": [
    {
      "disease": "Influenza",
      "recommended_treatment": "Oseltamivir",
      "diet_plan": "High protein diet",
      "lifestyle_changes": [
        "Drink fluids",
        "Adequate sleep"
      ],
      "follow_up": "Review after 5 days"
    }
  ]
}
🧩 Major Components
RecommendationForm

Responsible for

Patient input
Validation
Form submission

Fields

Age
Gender
Symptoms
Medical History
PatientProfileCard

Displays

Patient Age
Gender
Generated Patient Profile
RecommendationCard

Displays

Disease
Treatment
Diet Plan
Lifestyle Changes
Follow-up Advice
RecommendationList

Displays multiple recommendation cards.

LoadingSpinner

Shows progress while waiting for API response.

ErrorAlert

Displays API or validation errors.

📡 API Layer
RecommendationForm
        │
        ▼
RecommendationPage
        │
        ▼
RecommendationApi
        │
        ▼
Axios Client
        │
        ▼
Backend REST API
🧠 Custom Hook
useRecommendation()

Provides

Loading State
Error State
Response State
Generate Recommendation
Clear Response
Clear Error
🛠 Service Layer

recommendationService.ts

Includes helper methods such as:

Request validation
Patient summary generation
Recommendation count
Unique diseases
Unique treatments
Unique diet plans
Lifestyle recommendations
📋 Validation Rules
Field	Validation
Age	1 – 120
Gender	Required
Symptoms	Required
Medical History	Required
🎨 UI Features
Material UI Cards
Responsive Grid Layout
Typography
Buttons
Text Fields
Dropdowns
Alerts
Loading Spinner
Modern Healthcare Theme
🔄 Application Workflow
User opens application
        │
        ▼
Enter Patient Information
        │
        ▼
Validation
        │
        ▼
Submit
        │
        ▼
REST API
        │
        ▼
AI Recommendation Engine
        │
        ▼
Receive JSON
        │
        ▼
Render Patient Profile
        │
        ▼
Render Recommendations
📈 Future Enhancements
Authentication & Authorization
Patient History Management
Doctor Dashboard
PDF Report Generation
Recommendation Confidence Scores
Charts & Analytics
Voice Input
Multi-language Support
Dark Mode
Medical Image Integration
Electronic Health Record (EHR) Integration
Export to PDF/Excel
Audit Logging
Notification System
🧪 Testing Suggestions
Unit Testing (Vitest)
Component Testing
API Integration Testing
Form Validation Testing
Accessibility Testing
Responsive UI Testing
🔒 Best Practices Implemented
TypeScript Interfaces
Component Reusability
Modular Folder Structure
Separation of Concerns
API Abstraction Layer
Reusable Custom Hooks
Service Layer Pattern
Error Handling
Responsive Design
Strong Typing
📚 Learning Outcomes

This project demonstrates:

React with TypeScript
Component-Based Architecture
React Hook Form
Axios Integration
Material UI
REST API Communication
Type-safe Development
Custom Hooks
Service Layer Design
Healthcare Application Development
🤝 Contributing
Fork the repository.
Create a feature branch.
Commit your changes.
Push the branch.
Open a Pull Request.
📄 License

This project is intended for educational and demonstration purposes. Update the license according to your organization's requirements before production use.

👨‍💻 Author

Healthcare Recommendation System

Developed using:

React
TypeScript
Material UI
Axios
React Hook Form
Vite

Designed as a modern frontend for AI-powered healthcare recommendation services.