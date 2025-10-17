# Profile Card — HNG Task Stage 0

A responsive, accessible **Profile Card** built with semantic HTML, modern CSS, and vanilla JavaScript.  
This project fulfills all HNG Stage 0 task requirements.

---

## 🚀 Live Demo

[Live Site](https://your-live-url-here.netlify.app)


## 🧠 Features / What I implemented

-  Semantic HTML structure using `<article>`, `<header>`, `<section>`, `<nav>`, `<figure>`, and `<time>`.
-  Fully responsive grid layout (desktop, tablet, mobile).
-  Dynamic time display using `Date.now()` in milliseconds.
-  Accessible links and keyboard-friendly navigation.
-  Styled using modern CSS with variables, gradients, and subtle animations.
-  Dark and light mode support via `prefers-color-scheme`.

---

## 🧩 Core Elements (per HNG spec)

| Element           | Description            | Data Test ID             |
| ----------------- | ---------------------- | ------------------------ |
| Profile container | Root card              | `test-profile-card`      |
| User name         | Full name              | `test-user-name`         |
| Biography         | Short user bio         | `test-user-bio`          |
| Time              | Current timestamp (ms) | `test-user-time`         |
| Avatar            | User profile image     | `test-user-avatar`       |
| Social links      | Links list container   | `test-user-social-links` |
| Hobbies           | List of hobbies        | `test-user-hobbies`      |
| Dislikes          | List of dislikes       | `test-user-dislikes`     |

---

## 🛠️ Setup Instructions

### Prerequisites

-  A browser that supports modern HTML/CSS/JS
-  Optional: local server (e.g., VSCode Live Server)

### Run Locally

```bash
git clone https://github.com/yourusername/hng-profile-card
cd hng-profile-card
```