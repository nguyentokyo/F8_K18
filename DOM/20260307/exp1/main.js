// const url = "https://jsonplaceholder.typicode.com/users/1";
//
// fetch(url)
//     .then(res => res.json())
//     .then(u => {
//         console.log(u);
//
//         const ul = document.querySelector("#list__user");
//         const li = document.createElement("li");
//         li.textContent = u.name;
//
//
//         ul.appendChild(li);
//
//         })
//     .catch(console.error);
import z from 'https://cdn.jsdelivr.net/npm/zod@4.3.6/+esm'

const form = document.querySelector("#form__user");
const nameInput = document.querySelector("#name");
const passInput = document.querySelector("#pass");
const nameError = document.querySelector("#name__error");

function showError(id, message) {
    id.textContent = message;
}

const Player = z.object({
    username: z.string().min(3, "Username phải >= 3 ký tự")
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = nameInput.value;
    const password = passInput.value;

    nameError.textContent = "";

    const result = Player.safeParse({
        username: username
    });

    console.log(result);
    // if (!result.success) {
    //     // showError(nameError, result.error.message);
    //     const message = result.error.errors[0].message;
    //     showError(nameError, message);
    //     return;
    // }
    if (!result.success) {
        const message = result.error.addIssue;
        showError(nameError, message);
        return;
    }

    console.log("gui len server:", { username, password });
});

