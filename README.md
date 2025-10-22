# Profile Card + Multi-Page Site — HNG Task Stage 1

A fully responsive and accessible **Profile Card** built with semantic HTML5, modern CSS, and vanilla JavaScript.
This submission extends my Stage 0 Profile Card project by adding two new pages - Contact Us (with validation) and About Me (reflective page).
This project serves as my submission for **HNG Internship Stage 0**, demonstrating understanding of core front-end principles, accessibility, semantic markup, responsive design, and JavaScript DOM manipulation.

---

## Live Demo

🔗 [**Live Site**](https://pirateiv.github.io/profile-card/)
_(Deployed via Github Pages)_

---

## Features, Highlights & Things I Implemented

### Upgrades from Stage 0

-  New Pages(About me & Contact page)

-  Semantic HTML across all pages (`<main>, <header>, <nav>, <section>, <footer>`).

-  Consistent theming with system color preference and manual switch.

-  Responsive grid and flex layouts for mobile, tablet, and desktop.

-  Fully functional form with JavaScript validation.

-  Success message after valid submission (hides form after submit).

### Other implementations done in Stage 0

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

---

## Technologies Used

-  **HTML5** — Semantic and accessible markup
-  **CSS3** — Variables, grid layout, transitions, and media queries
-  **JavaScript (ES6)** — DOM manipulation and live updates
-  **Github Pages** — Deployment and hosting

---

## Setup Instructions

### Prerequisites

No special setup required — runs on any modern browser.
Optional: Use a local development server such as **VSCode Live Server**.

### Run Locally

```bash
# Clone the repository
git clone https://github.com/pirateIV/profile-card

# Navigate into the project folder
cd profile-card

# Open index.html in your browser or run with Live Server
```

---

## Project Structure

```
profile-card/
├── index.html               # Stage 0 Profile Card
├── pages/
│   ├── about.html           # Stage 1 About Me page
│   └── contact.html         # Stage 1 Contact Us page
├── css/
│   ├── fonts.css
│   └── style.css
├── js/
│   ├── app.js               # Theme switcher, timer logic
│   └── contact-form.js      # Form validation
├── images/                  # Assets (avatar etc.)
└── README.md
```

---

## Theme Support

The project supports both **light** and **dark** modes:

-  Automatically adapts to your system’s color scheme preference.
-  Includes a manual **theme toggle** button to override defaults.
