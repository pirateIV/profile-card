# 🌐 Profile Card — HNG Task Stage 0

A fully responsive and accessible **Profile Card** built with semantic HTML5, modern CSS, and vanilla JavaScript.
This project serves as my submission for **HNG Internship Stage 0**, demonstrating understanding of core front-end principles, accessibility, semantic markup, responsive design, and JavaScript DOM manipulation.

---

## 🚀 Live Demo

🔗 [**Live Site**](https://github.com/pirateIV/profile-card.git)
_(Deployed via Github Pages)_

---

## 🧠 Features, Highlights & Things I Implemented

-  **Semantic HTML Structure**
   Built with clear, meaningful HTML elements such as `<article>`, `<header>`, `<section>`, `<nav>`, `<figure>`, and `<time>` for accessibility and better SEO.

-  **Responsive Grid Layout**
   Scales seamlessly across devices (desktop, tablet, and mobile) using CSS Grid and Flexbox with fluid units and breakpoints.

-  **Dynamic Time Display**
   Displays the current time in milliseconds, updating automatically every second using `Date.now()` — helpful for demonstrating real-time JavaScript functionality.

-  **Accessible Design**
   All interactive elements have proper `aria-label`s and logical tab order, ensuring full keyboard navigation support.

-  **Theme Adaptability**
   Integrates with the system’s preferred color scheme via `prefers-color-scheme`, with an additional **manual toggle button** for dark and light mode switching.

-  **Modern Aesthetic**
   Clean typography, soft gradients, subtle hover animations, and smooth transitions for an elegant user experience.

---

## 🧩 Core Elements (HNG Specification)

| Element           | Description                           | Data Test ID             |
| ----------------- | ------------------------------------- | ------------------------ |
| Profile container | Root container for the profile card   | `test-profile-card`      |
| User name         | Full name of the user                 | `test-user-name`         |
| Biography         | Short descriptive user bio            | `test-user-bio`          |
| Time              | Current timestamp (ms) displayed live | `test-user-time`         |
| Avatar            | User profile image                    | `test-user-avatar`       |
| Social links      | List of social media profile links    | `test-user-social-links` |
| Hobbies           | Ordered list of personal hobbies      | `test-user-hobbies`      |
| Dislikes          | List of dislikes or pet peeves        | `test-user-dislikes`     |

---

## ⚙️ Technologies Used

-  **HTML5** — Semantic and accessible markup
-  **CSS3** — Variables, grid layout, transitions, and media queries
-  **JavaScript (ES6)** — DOM manipulation and live updates
-  **Github Pages** — Deployment and hosting

---

## 🛠️ Setup Instructions

### Prerequisites

No special setup required — runs on any modern browser.
Optional: Use a local development server such as **VSCode Live Server**.

### Run Locally

```bash
# Clone the repository
git clone https://github.com/pirateIV/profile-card

# Navigate into the project folder
cd profile-card

# Open index.html in your browser or run Live Server
```

---

## 📁 Project Structure

```
profile-card/
├── index.html                  # Main structure of the card
├── style.css                   # Styling and responsive design
├── app.js                      # JavaScript logic (theme switch + live time)
├── fonts/
│   └── Inter-Regular.woff2     # Fonts
    ...
├── images/
│   └── avatar.jpg              # Profile picture
└── README.md                   # Project documentation
```

---

## Theme Support

The project supports both **light** and **dark** modes:

-  Automatically adapts to your system’s color scheme preference.
-  Includes a manual **theme toggle** button to override defaults.
