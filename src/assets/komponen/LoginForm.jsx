import React, { useState, useEffect } from 'react';

function LoginForm({ onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const usernameInput = document.getElementById('username');
    if (usernameInput) {
      usernameInput.focus();
    }
  }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    alert('Login berhasil! (Ini hanya simulasi)');
    onClose();
  };

  return (
    <div className="login-popup-overlay">
      <div className="login-form-container">
        <button
          onClick={onClose}
          className="login-close-button"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="login-title">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="login-input-group">
            <label htmlFor="username" className="login-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="login-input"
              placeholder="Masukkan username Anda"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="login-input-group">
            <label htmlFor="password" className="login-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="login-input"
              placeholder="Masukkan password Anda"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <button
              type="submit"
              className="login-submit-button"
            >
              Masuk
            </button>
          </div>
        </form>
        <p className="login-signup-text">
          Belum punya akun?{' '}
          <a href="#signup" className="login-signup-link">
            Daftar Sekarang
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
