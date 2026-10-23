const apiBase = window.location.origin;
const registerForm = document.getElementById("registerForm");

if (registerForm) {
	registerForm.addEventListener("submit", async (event) => {
		event.preventDefault();

		const user = {
			name: document.getElementById("name").value,
			email: document.getElementById("email").value,
			password: document.getElementById("password").value,
		};

		try {
			const response = await fetch(`${apiBase}/users/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			});

			if (!response.ok) {
				throw new Error("Registration failed");
			}

			localStorage.setItem(
				"currentUser",
				JSON.stringify({ name: user.name, email: user.email })
			);
			alert("Registered");
			window.location.href = "index.html";
		} catch (error) {
			alert("Unable to register right now. Please try again.");
		}
	});
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
	loginForm.addEventListener("submit", async (event) => {
		event.preventDefault();

		try {
			const response = await fetch(`${apiBase}/users/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: document.getElementById("email").value,
					password: document.getElementById("password").value,
				}),
			});
			const data = await response.json();

			if (data.success) {
				localStorage.setItem(
					"currentUser",
					JSON.stringify({ name: data.user.name, email: data.user.email })
				);
				alert("Login Success");
				window.location.href = "index.html";
			} else {
				alert("Invalid Credentials");
			}
		} catch (error) {
			alert("Unable to log in right now. Please try again.");
		}
	});
}
