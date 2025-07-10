

# 🧠 Lexi Legal Assistant - Frontend Assignment

A minimal frontend simulation of a Lexi-like legal assistant that allows users to:

- Ask a legal question
- Get a generated legal answer
- View one or more citations
- Click the citation to open a simulated PDF viewer with paragraph highlighting

Built using **React + Vite** with a chat-like UI and Tailwind CSS.
##Live Demo - https://lexisg-frontend-intern-test-tawny.vercel.app/

---

## ✨ Features

- Chat-style question + answer UI (inspired by ChatGPT)
- Static simulated API response
- Citation display with:
  - Clickable link
  - Modal popup that mocks opening a PDF
  - Paragraph 7 is visually highlighted (mock scroll-to-paragraph behavior)
- Clean responsive layout with Tailwind CSS

---

## 🚀 Getting Started

### 📦 Prerequisites

Make sure you have:

- Node.js (v14+ recommended)
- npm or yarn


## 🔗 How Citation Linking Was Handled

In this project, citation linking is handled in a **simple and direct way, without using a modal popup**.

### ✅ Citation Behavior:

- Each answer includes a **citation text** displayed below it.
- The citation is rendered as a **clickable `<a>` tag**.
- When the user clicks on the citation:
  - It opens the **PDF document in a new browser tab**, using the provided URL.
  - No additional logic such as scroll-to-paragraph or text highlighting is applied.
  - This simulates how users would view legal source documents in a real legal assistant tool.

### 🔍 Why This Approach?

- Keeps the implementation clean and focused on core functionality.
- Meets the requirement of **traceability to source documents**.
- Avoids unnecessary complexity (no PDF viewer integration or modal simulation).


---

### 📥 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/lexisg-frontend-intern-test.git](https://github.com/Gaurav22-github/Lexisg-frontend-intern-test.git
cd lexisg-frontend-intern-test

# Install dependencies
npm install

# Run the Project
npm run dev


---


