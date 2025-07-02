import './App.css'
import Footer from './assets/komponen/Footer'
import Header from './assets/komponen/Header'
import HeroSection from './assets/komponen/HeroSection' 
function App() {
  return (
    <>
      <Header title="Thinkara" />
      <HeroSection desc1="Thinkara adalah sebuah platform yang menyediakan berbagai sumber daya
          dan alat untuk membantu Anda dalam proses pembelajaran dan pengembangan
          diri. Kami berkomitmen untuk memberikan pengalaman belajar yang
          menyenangkan dan efektif." desc2="Dengan Thinkara, Anda dapat mengakses berbagai materi pembelajaran,
          tutorial, dan alat bantu yang dirancang untuk meningkatkan keterampilan
          dan pengetahuan Anda. Bergabunglah dengan komunitas kami dan mulailah
          perjalanan belajar Anda hari ini!"/>
      <Footer foot="© 2025 Thinkara. All rights reserved." />
    </>
  )
}

export default App
