        document.addEventListener("DOMContentLoaded", function () {
        const toggle = document.getElementById("darkModeToggle");
        const body = document.body;

        // Cek status dari localStorage
        if (localStorage.getItem("dark-mode") === "enabled") {
            body.classList.add("dark-mode");
            toggle.innerHTML = "☀️ Light Mode";
            toggle.classList.remove("btn-outline-light");
            toggle.classList.add("btn-outline-warning");
        } else {
            toggle.innerHTML = "🌙 Dark Mode";
            toggle.classList.remove("btn-outline-warning");
            toggle.classList.add("btn-outline-light");
        }

        // Saat tombol diklik
        toggle.addEventListener("click", () => {
            const isDark = body.classList.toggle("dark-mode");

            if (isDark) {
            localStorage.setItem("dark-mode", "enabled");
            toggle.innerHTML = "☀️ Light Mode";
            toggle.classList.remove("btn-outline-light");
            toggle.classList.add("btn-outline-warning");
            } else {
            localStorage.setItem("dark-mode", "disabled");
            toggle.innerHTML = "🌙 Dark Mode";
            toggle.classList.remove("btn-outline-warning");
            toggle.classList.add("btn-outline-light");
            }
        });
        });

