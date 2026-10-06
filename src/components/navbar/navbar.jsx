import Logo from "../../assets/logo.jpg";
import "./navbar.css"

function Navbar(){
    return (
        <nav className="navBar">
            <div className="logo">
                <a href="#home">
                <img src={Logo} alt="Logo Bicicletaria Rocha"/> 
                </a>
            </div>
            <div className="navLinks">
                <a href="#services">Serviços</a>
                <a href="#products">Produtos</a>
                <a href="#about">Sobre</a>
                <a href="#contact">Contato</a>
            </div>

        </nav>
    )
}

export default Navbar;