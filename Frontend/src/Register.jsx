import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    setMessage("Creating account...");

    try {
      const response = await fetch(
        "http://127.0.0.1:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Account created successfully! 🎉");
        setName("");
        setEmail("");
        setPassword("");
      } else {
        setMessage(data.message || "Registration failed");
      }
    } catch (error) {
      console.error(error);
      setMessage("Cannot connect to backend.");
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
        }}
      >
        <h1>Create Account</h1>

        <p style={{ color: "#94a3b8" }}>
          Start discovering your career skill gap.
        </p>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyle}
          />

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
            Create Account →
          </button>
        </form>

        {message && (
          <p style={{ color: "#a78bfa", textAlign: "center" }}>
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
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "15px",
  border: "none",
  borderRadius: "10px",
  background: "linear-gradient(90deg, #7c3aed, #4f46e5)",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};

export default Register;