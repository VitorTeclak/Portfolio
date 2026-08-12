import './Contato.css'

import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contato = () => {
    return (
        <div className='formatacao-contato'>
            <a
                href="https://www.linkedin.com/in/vitor-teclak-76a9a525b/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button>
                    <FaLinkedin /> Linkedin
                </button>
            </a>

            <a
                href="https://www.instagram.com/teclak_/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button><BsInstagram /> Instagram</button>
            </a>

            <a
                href="https://github.com/VitorTeclak"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button><IoLogoGithub /> Github</button>
            </a>

            <a
                className="botao-whatsapp"
                href="https://wa.me/5541991322442?text=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20entrar%20em%20contato."
                target="_blank"
                rel="noopener noreferrer"
            >
                <button><FaWhatsapp /> WhatsApp</button>
            </a>
            
            <a
                className="botao-email"
                href="mailto:vitorteclak@hotmail.com?subject=Contato%20pelo%20portfólio&body=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20entrar%20em%20contato."
            >
                <button><MdEmail /> E-mail</button>
            </a>
            
            
        </div>
    )
}

export default Contato