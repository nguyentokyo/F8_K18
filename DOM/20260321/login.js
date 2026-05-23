const btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const errorMsg = document.createElement("p");

    if (!email || !password) {
        errorMsg.textContent = "Nhập tên email và password";
        return;
    }

    try {
        await login(email, password);
        console.log("Đăng nhập thành công");

        window.location.href = "index.html";
    } catch (err) {
        alert(err.message);
    }
});


async function login(email, password) {
    const response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error("Sai email hoặc mật khẩu");
    }

    const { access_token, refresh_token } = await response.json();

    // Lưu token vào localStorage
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);

    console.log(access_token);

    console.log(refresh_token);

    return access_token;
}

// // Gọi
// login("john@mail.com", "changeme").then(() => {
//     console.log("Đăng nhập thành công");
// });
