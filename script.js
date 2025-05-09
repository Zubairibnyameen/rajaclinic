// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger")
  const navList = document.querySelector(".nav-list")

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navList.classList.toggle("active")
      hamburger.classList.toggle("active")
    })
  }

  // Scroll Animation
  const revealElements = document.querySelectorAll(".reveal")

  function revealOnScroll() {
    for (let i = 0; i < revealElements.length; i++) {
      const windowHeight = window.innerHeight
      const elementTop = revealElements[i].getBoundingClientRect().top
      const elementVisible = 150

      if (elementTop < windowHeight - elementVisible) {
        revealElements[i].classList.add("active")
      }
    }
  }

  window.addEventListener("scroll", revealOnScroll)
  revealOnScroll() // Initial check on page load

  // Header Scroll Effect
  const header = document.querySelector(".header")

  function headerScroll() {
    if (window.scrollY > 100) {
      header.style.padding = "10px 0"
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
    } else {
      header.style.padding = "15px 0"
      header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"
    }
  }

  window.addEventListener("scroll", headerScroll)

  // Form Validation
  const appointmentForm = document.getElementById("appointmentForm")

  if (appointmentForm) {
    appointmentForm.addEventListener("submit", (e) => {
      e.preventDefault()

      if (validateForm()) {
        // Form is valid, show success message
        alert("Thank you! Your appointment request has been submitted. We will contact you shortly.")
        appointmentForm.reset()
      }
    })
  }
})

// Form Validation Function
function validateForm() {
  let isValid = true

  // Get form elements
  const name = document.getElementById("name")
  const email = document.getElementById("email")
  const phone = document.getElementById("phone")
  const message = document.getElementById("message")

  // Get error elements
  const nameError = document.getElementById("nameError")
  const emailError = document.getElementById("emailError")
  const phoneError = document.getElementById("phoneError")
  const messageError = document.getElementById("messageError")

  // Reset error messages
  nameError.textContent = ""
  emailError.textContent = ""
  phoneError.textContent = ""
  messageError.textContent = ""

  // Validate Name
  if (name.value.trim() === "") {
    nameError.textContent = "Name is required"
    isValid = false
  }

  // Validate Email
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required"
    isValid = false
  } else if (!isValidEmail(email.value)) {
    emailError.textContent = "Please enter a valid email address"
    isValid = false
  }

  // Validate Phone
  if (phone.value.trim() === "") {
    phoneError.textContent = "Phone number is required"
    isValid = false
  } else if (!isValidPhone(phone.value)) {
    phoneError.textContent = "Please enter a valid phone number"
    isValid = false
  }

  // Validate Message
  if (message.value.trim() === "") {
    messageError.textContent = "Message is required"
    isValid = false
  }

  return isValid
}

// Email Validation Function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Phone Validation Function
function isValidPhone(phone) {
  const phoneRegex = /^[0-9]{10,15}$/
  return phoneRegex.test(phone.replace(/[^0-9]/g, ""))
}
