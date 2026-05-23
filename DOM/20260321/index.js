function isLoggedIn() {
    return !!localStorage.getItem("access_token");
}

// Dùng:
if (!isLoggedIn()) {
    window.location.href = "login.html";
}

const logoutBtn = document.querySelector('#logoutbtn');


logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();

    logout()
})

function logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.href = "login.html";
}