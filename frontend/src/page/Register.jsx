// src/page/Register.jsx
import React, { useState } from 'react';
import { signUpUser } from '../services/authService';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await signUpUser(email, password);
      alert("✅ Registered Successfully!");
    } catch (error) {
      console.error("❌ Registration failed:", error);
      alert(error.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Register</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />

      <button
        onClick={handleRegister}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Register
      </button>
    </div>
  );
}
