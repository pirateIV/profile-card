const contactForm = document.getElementById("contact-form")
const successMessage = document.getElementById("success-message")

// Validation rules
const validationRules = {
  fullName: {
    validate: (value) => value.trim().length > 0,
    message: "Full name is required",
  },
  email: {
    validate: (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(value)
    },
    message: "Please enter a valid email address (e.g., name@example.com)",
  },
  subject: {
    validate: (value) => value.trim().length > 0,
    message: "Subject is required",
  },
  message: {
    validate: (value) => value.trim().length >= 10,
    message: "Message must be at least 10 characters long",
  },
}

// Validate individual field
function validateField(fieldName, value) {
  const rule = validationRules[fieldName]
  if (!rule) return true

  const isValid = rule.validate(value)
  const errorElement = document.getElementById(`error-${fieldName}`)

  if (!isValid) {
    errorElement.textContent = rule.message
    errorElement.classList.add("show")
  } else {
    errorElement.textContent = ""
    errorElement.classList.remove("show")
  }

  return isValid
}

// Validate entire form
function validateForm() {
  const formData = new FormData(contactForm)
  let isValid = true

  for (const [fieldName, value] of formData.entries()) {
    if (!validateField(fieldName, value)) {
      isValid = false
    }
  }

  return isValid
}

// Handle form submission
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Clear previous success message
  successMessage.classList.remove("show")
  successMessage.textContent = ""

  // Validate form
  if (!validateForm()) {
    return
  }

  // Get form data
  const formData = new FormData(contactForm)
  const data = Object.fromEntries(formData)

  // Show success message
  successMessage.textContent = `Thank you, ${data.fullName}! Your message has been sent successfully. I'll get back to you soon.`
  successMessage.classList.add("show")

  // Reset form
  contactForm.reset()

  // Clear error messages
  document.querySelectorAll(".error-message").forEach((el) => {
    el.textContent = ""
    el.classList.remove("show")
  })

  // Scroll to success message
  successMessage.scrollIntoView({ behavior: "smooth", block: "nearest" })
})

// Real-time validation on blur
contactForm.addEventListener(
  "blur",
  (e) => {
    if (e.target.name && validationRules[e.target.name]) {
      validateField(e.target.name, e.target.value)
    }
  },
  true,
)
