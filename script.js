// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileNav = document.querySelector(".nav-mobile")
  const menuIcon = document.querySelector(".menu-icon")
  const closeIcon = document.querySelector(".close-icon")

  mobileNav.classList.toggle("hidden")
  menuIcon.classList.toggle("hidden")
  closeIcon.classList.toggle("hidden")
}

// Smooth Scroll to Section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }

  // Close mobile menu if open
  const mobileNav = document.querySelector(".nav-mobile")
  const menuIcon = document.querySelector(".menu-icon")
  const closeIcon = document.querySelector(".close-icon")

  if (!mobileNav.classList.contains("hidden")) {
    mobileNav.classList.add("hidden")
    menuIcon.classList.remove("hidden")
    closeIcon.classList.add("hidden")
  }
}

// FAQ Toggle
function toggleFaq(button) {
  const faqItem = button.parentElement
  const isActive = faqItem.classList.contains("active")

  // Close all FAQ items
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.classList.remove("active")
  })

  // Open clicked item if it wasn't active
  if (!isActive) {
    faqItem.classList.add("active")
  }
}

// Contact Form Handler
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(contactForm)
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      }

      // Here you would typically send the data to a server
      console.log("Form submitted:", data)

      // Show success message
      alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")

      // Reset form
      contactForm.reset()
    })
  }
})

// WhatsApp Integration
function openWhatsApp() {
  const message = encodeURIComponent("Olá! Gostaria de agendar uma visita na Clingalerie.")
  const whatsappUrl = `https://wa.me/5511999999999?text=${message}`
  window.open(whatsappUrl, "_blank")
}

// Google Maps Integration
function openMaps() {
  const mapsUrl = "https://maps.google.com/?q=Rua+das+Clínicas+123+Centro+São+Paulo"
  window.open(mapsUrl, "_blank")
}

// Header Background on Scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.98)"
  } else {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
  }
})

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  const mobileNav = document.querySelector(".nav-mobile")
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")

  if (!mobileNav.classList.contains("hidden") && !mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    mobileNav.classList.add("hidden")
    document.querySelector(".menu-icon").classList.remove("hidden")
    document.querySelector(".close-icon").classList.add("hidden")
  }
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Form validation enhancement
function validateForm() {
  const form = document.getElementById("contactForm")
  const inputs = form.querySelectorAll("input[required], textarea[required]")
  let isValid = true

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.style.borderColor = "#EF4444"
      isValid = false
    } else {
      input.style.borderColor = "#E5E7EB"
    }
  })

  return isValid
}

// Email validation
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Phone formatting (Brazilian format)
function formatPhone(input) {
  let value = input.value.replace(/\D/g, "")

  if (value.length >= 11) {
    value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
  } else if (value.length >= 7) {
    value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3")
  } else if (value.length >= 3) {
    value = value.replace(/(\d{2})(\d{0,5})/, "($1) $2")
  }

  input.value = value
}

// Add phone formatting to phone input
document.addEventListener("DOMContentLoaded", () => {
  const phoneInput = document.getElementById("phone")
  if (phoneInput) {
    phoneInput.addEventListener("input", function () {
      formatPhone(this)
    })
  }
})

// Intersection Observer for animations (optional enhancement)
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".feature-card, .service-item, .plan-card")

  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})
