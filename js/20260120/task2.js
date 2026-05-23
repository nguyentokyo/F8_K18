
const users = [
    { id: 1, account: "admin", password: "123456", role: "admin", isActive: true },
    { id: 2, account: "user01", password: "abc123", role: "user", isActive: true },
    { id: 3, account: "user02", password: "111111", role: "user", isActive: false },
    { id: 4, account: "teacher", password: "teach2025", role: "teacher", isActive: true }
]


const login = (users, account, password) => {
    const user = users.find(u => (u.account === account) && (u.password === password))

    if (!user) return "tài khoản hoặc mật khẩu không đúng"

    if (!(user.isActive)) return "người dùng đã bị xóa / vô hiệu hóa"

    return "đăng nhập thành công"
}

console.log(login(users, "admin", "123456"))