import { auth } from "https://unpkg.com/strateegia-api/strateegia-api.js";

function login() {
    const btnLogin = document.getElementById("btnLogin");

    btnLogin.addEventListener("click", (e) => {
        console.log("btnLogin clicked");
        const usernameElement = document.getElementById("username");
        const passwordElement = document.getElementById("password");

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const global_selected_mode = urlParams.get('mode') || "usuário";

        const username = usernameElement.value;
        const password = passwordElement.value;

        auth(username, password).then((token) => {
            console.log(token);
            localStorage.setItem("strateegiaAccessToken", token);
            location.href = `main.html?mode=${global_selected_mode}`;
        });
    });
}

login();