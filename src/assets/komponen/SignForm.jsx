import React, { useState, useEffect } from 'react';

function SignForm({ onClose }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    const usernameInput = document.getElementById('signup-username');
    if (usernameInput) {
      usernameInput.focus();
    }
  }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Konfirmasi password tidak cocok!');
      return;
    }
    // Di sini Anda bisa menambahkan logika pendaftaran
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    alert('Pendaftaran berhasil! (Ini hanya simulasi)');
    onClose();
  };

  return (
    <div className="login-popup-overlay"> {/* Menggunakan gaya overlay yang sama */}
      <div className="login-form-container"> {/* Menggunakan gaya container form yang sama */}
        <button
          onClick={onClose}
          className="login-close-button"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="login-title">Daftar Akun Baru</h2>

        <form onSubmit={handleSubmit}>
          <div className="login-input-group">
            <label htmlFor="signup-username" className="login-label">
              Username
            </label>
            <input
              type="text"
              id="signup-username"
              className="login-input"
              placeholder="Pilih username Anda"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="login-input-group">
            <label htmlFor="signup-email" className="login-label">
              Email
            </label>
            <input
              type="email"
              id="signup-email"
              className="login-input"
              placeholder="Masukkan email Anda"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="login-input-group">
            <label htmlFor="signup-password" className="login-label">
              Password
            </label>
            <input
              type="password"
              id="signup-password"
              className="login-input"
              placeholder="Buat password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="login-input-group">
            <label htmlFor="signup-confirm-password" className="login-label">
              Konfirmasi Password
            </label>
            <input
              type="password"
              id="signup-confirm-password"
              className="login-input"
              placeholder="Konfirmasi password Anda"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}> {/* Mengatur tombol di tengah */}
            <button
              type="submit"
              className="login-submit-button"
            >
              Daftar
            </button>
          </div>
        </form>
        <p className="login-signup-text">
          Sudah punya akun?{' '}
          <a href="#login" className="login-signup-link" onClick={onClose}> {/* Bisa ditambahkan logika untuk kembali ke login */}
            Masuk Sekarang
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignForm;
