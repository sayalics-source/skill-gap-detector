import { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    setMessage("Logging in...");

    try {
      const response = await fetch(
        "http://127.0.0.1:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Login successful! 🎉");

        if (onLogin) {
          onLogin(data);
        }
      } else {
        setMessage(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage(
        "Cannot connect to backend. Please make sure the backend is running."
      );
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#070b1a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#ffffff08",
          border: "1px solid #ffffff18",
          borderRadius: "20px",
          padding: "35px",
          boxSizing: "border-box",
        }}
      >
        <h1>Welcome Back 👋</h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "25px",
          }}
        >
          Login to continue discovering your skill gap.
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Login →
          </button>
        </form>

        {message && (
          <p
            style={{
              marginTop: "20px",
              color: "#a78bfa",
              textAlign: "center",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #ffffff20",
  background: "#ffffff08",
  color: "white",
  outline: "none",
  fontSize: "15px",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "15px",
  border: "none",
  borderRadius: "10px",
  background: "linear-gradient(90deg, #7c3aed, #4f46e5)",
  color: "white",
  fontSize: "15px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default Login;