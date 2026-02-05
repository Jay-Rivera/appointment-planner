# 📅 Contacts & Appointments Manager

A React application that allows users to manage contacts and schedule appointments using reusable components and controlled forms. This project was built to strengthen core React fundamentals such as state management, props, and component reusability.

---

## 🚀 Features

- Add and view contacts with name, phone number, and email
- Schedule appointments linked to existing contacts
- Reusable UI components (`TileList`, `ContactPicker`)
- Controlled form inputs with lifted state
- Client-side routing using React Router
- Clean, modular component structure

---

## 🧠 What I Learned

This project helped me strengthen several key React concepts:

- **Prop contracts** and how mismatches cause runtime errors
- Building truly **reusable components** with generic APIs
- Lifting state up and managing controlled form inputs
- Debugging common React errors like:
  - `Cannot read properties of undefined (reading 'map')`
- Passing data safely through multiple component layers

---

## 🛠️ Built With

- React
- React Router
- JavaScript (ES6+)
- HTML5
- CSS

---

## 📂 Project Structure (simplified)

src/
├── components/
│ ├── contactPicker/
│ ├── tile/
│ ├── tileList/
│ └── forms/
├── containers/
│ ├── contactsPage/
│ └── appointmentsPage/
├── App.js
└── index.js

---

## 🧪 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   Install dependencies:
   ```

npm install
Start the development server:

npm start
Open http://localhost:3000 in your browser.

🔮 Future Improvements
Persist data using localStorage or a backend

Add form validation and user feedback

Improve UI styling and accessibility

Add edit/delete functionality for contacts and appointments

👤 Author
Jose Rivera
Aspiring Frontend / Fullstack Developer
Self-taught, project-driven learner

📌 Notes
This project was completed as part of a React learning curriculum and extended with additional debugging, refactoring, and architectural improvements to better reflect real-world React development practices.
