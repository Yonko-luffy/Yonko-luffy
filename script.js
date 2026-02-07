function openModal(id) {
  document.getElementById(id).style.display = "flex";
}
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

window.addEventListener("click", (e) => {
  document.querySelectorAll(".modal").forEach(m => {
    if (e.target === m) m.style.display = "none";
  });
});

function copyEmail() {
  const email = "pateltanish2109@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    // Show a temporary "Copied!" message
    const Toast = document.createElement('div');
    Toast.textContent = "Email copied to clipboard!";
    Toast.style.cssText = "position:fixed;bottom:30px;left:50%;transform:translateX(-50%);background:#38bdf8;color:#020617;padding:12px 24px;border-radius:8px;font-weight:600;z-index:9999;animation:fadeInOut 2s ease-in-out";
    document.body.appendChild(Toast);
    setTimeout(() => Toast.remove(), 2000);
  }).catch(err => {
    alert("Failed to copy email. Please copy manually: " + email);
  });
}
