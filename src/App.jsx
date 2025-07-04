import React, { useState } from 'react';
import Header from './assets/komponen/Header';
import HeroSection from './assets/komponen/HeroSection';
import Footer from './assets/komponen/Footer';
import LoginForm from './assets/komponen/loginForm';
import SignForm from './assets/komponen/SignForm';
import './App.css';
import './assets/komponen/Header.css';

function App() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignUpPopup, setShowSignUpPopup] = useState(false); // State baru untuk pop-up Sign Up

  const handleShowLogin = () => {
    setShowLoginPopup(true);
    setShowSignUpPopup(false); // Pastikan pop-up Sign Up tertutup jika Login dibuka
  };

  const handleCloseLogin = () => {
    setShowLoginPopup(false);
  };

  const handleShowSignUp = () => { // Fungsi baru untuk membuka pop-up Sign Up
    setShowSignUpPopup(true);
    setShowLoginPopup(false); // Pastikan pop-up Login tertutup jika Sign Up dibuka
  };

  const handleCloseSignUp = () => { // Fungsi baru untuk menutup pop-up Sign Up
    setShowSignUpPopup(false);
  };

  return (
    <>
      {/* Header Component, meneruskan fungsi handleShowSignUp */}
      <Header title="Thinkara" onShowLogin={handleShowLogin} onShowSignUp={handleShowSignUp} />

      {/* HeroSection Component */}
      <HeroSection
        desc1="Thinkara adalah sebuah platform yang menyediakan berbagai sumber daya dan alat untuk membantu Anda dalam proses pembelajaran dan pengembangan diri. Kami berkomitmen untuk memberikan pengalaman belajar yang menyenangkan dan efektif."
        desc2="Dengan Thinkara, Anda dapat mengakses berbagai materi pembelajaran, tutorial, dan alat bantu yang dirancang untuk meningkatkan keterampilan dan pengetahuan Anda. Bergabunglah dengan komunitas kami dan mulailah perjalanan belajar Anda hari ini!"
      />

      {/* Footer Component */}
      <Footer foot="© 2025 Thinkara. All rights reserved." />

      {/* Pop-up Login Form, ditampilkan jika showLoginPopup bernilai true */}
      {showLoginPopup && <LoginForm onClose={handleCloseLogin} />}

      {/* Pop-up Sign Up Form, ditampilkan jika showSignUpPopup bernilai true */}
      {showSignUpPopup && <SignUpForm onClose={handleCloseSignUp} />}
    </>
  );
}

export default App;