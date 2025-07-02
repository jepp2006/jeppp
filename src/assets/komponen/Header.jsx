import './Header.css'
import thinkaraLogo from './thinkara.png'; // sesuaikan path dan ekstensi file gambar
function Header(props) {
    const { title } = props;
    return (
        <header className="bg-blue-500 text-white p-4">
            <div className="kontainer-semua">
                <div className="logo">
                    <h1 className="Judul">{title}</h1>
                    <img class = "logothinkara" src={thinkaraLogo} alt="Thinkara Logo" />
                </div>
                <div className="containernavbar">
                    <nav className="Navbar mt-2">
                        <ul className="flex space-x-4 Header-nav">
                            <li>
                                <a href="#home" class="home">Home</a>
                            </li>
                            <li>
                                <a href="#courses" class="courses">Courses</a>
                            </li>
                            <li>
                                <a href="#about" class="about">About</a>
                            </li>
                            <li>
                                <a href="#contact" class="contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="userinput">
                    <button className="login">Login</button>
                    <button className="signup">Sign Up</button>
                </div>
            </div>
        </header>
    );
}
export default Header;