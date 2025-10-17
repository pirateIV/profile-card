function updateTime() {
	const timeElement = document.querySelector('[data-testid="test-user-time"]');
	if (timeElement) {
		timeElement.textContent = `${Date.now()} ms`;
	}
}

updateTime();
setInterval(updateTime, 1000);

const switcher = document.getElementById("theme-switcher");

switcher.addEventListener("click", () => {
	const current = document.documentElement.getAttribute("data-theme");
	const next = current === "light" ? "dark" : "light";
	document.documentElement.setAttribute("data-theme", next);
	localStorage.setItem("theme", next);
});

// Load saved theme
const saved = localStorage.getItem("theme");
if (saved) {
	document.documentElement.setAttribute("data-theme", saved);
}
