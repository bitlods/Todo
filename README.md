# 📝 Todo Summary Assistant

A full-stack productivity app that lets users create and manage personal to-do lists, summarize their pending tasks using OpenAI GPT-3.5, and send the summary to a Slack channel via Webhook.

---

## 🚀 Tech Stack

| Layer       | Technology             |
|-------------|------------------------|
| Frontend    | React (Vite), Axios, React Toastify |
| Backend     | Spring Boot (Java), REST API |
| Database    | MySQL                  |
| LLM API     | OpenAI GPT-3.5         |
| Notification| Slack Incoming Webhook |
| Hosting     | Local (optional cloud deploy) |

---

## 🛠️ Features

- Add, delete, and list to-do items
- Generate a natural language summary of pending tasks using OpenAI
- Send summary to Slack via webhook
- Fully RESTful backend API
- CORS-enabled for local frontend/backend interaction

---

## ⚙️ Setup Instructions

### 🔧 Prerequisites

- Node.js & npm
- Java 17+
- MySQL (8.x)
- Maven (for backend)
- OpenAI & Slack accounts

---

### 📦 Frontend (React)

```bash
cd todo-frontend
npm install
cp .env.example .env
# Add your backend URL in .env
npm run dev
