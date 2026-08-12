import './Sobre.css'

import { FaFilePdf } from 'react-icons/fa'
import { HiMiniArrowUpRight } from "react-icons/hi2";

import CVVitor from '../../assets/pdf/CV-VitorTeclak.pdf'

import { Link } from 'react-router-dom'

import imgPerfil from '../../assets/img-perfil.jpeg'

const Sobre = () => {
    return (
        <div>
            <div className='formatacao-sobre-mim'>
                <div className='conteudo-sobre-mim'>
                    <div className='texto-nome'>
                        <span>Vitor Teclak </span>
                        <span className='texto-cinza'>Deodato Oliveira</span>
                    </div>
                    
                    

                    <div className='formatacao-sobre-mim'>
                        <div className='texto-sobre-mim texto-cinza'>
                            <p> 
                                Muito prazer, sou Vitor. Sou formado em Análise e Desenvolvimento de Sistemas e atualmente curso Engenharia
                                de Software. Possuo 2 anos de experiência no mercado de desenvolvimento de software e sou apaixonado por 
                                tecnologia e pela inovação. 
                            </p> 
                            <p> 
                                Ao longo da minha trajetória, venho buscando 
                                aprimorar meus conhecimentos, explorar novas tecnologias e desenvolver soluções que unam qualidade, 
                                eficiência e boas práticas de desenvolvimento. 
                            </p> 
                            <p> 
                                Fora do mundo da programação, sou um amante da leitura, principalmente de conteúdos relacionados à 
                                filosofia, história e educação financeira, que são áreas que 
                                também despertam bastante meu interesse. 
                            </p> 
                        </div>
                    </div>

                    <div className='card-sobre-mim'>
                        “Insanidade é fazer a mesma coisa repetidamente e esperar resultados diferentes”, Albert Einstein
                    </div>

                    <div className='botoes-sobre-mim'>
                        <button className='botao-branco'>
                            <FaFilePdf />
                            <a href={CVVitor} download>
                                Baixar CV
                            </a>
                        </button>
                        <Link to={`/portfolio`} className="link">
                            <button className='botao-preto'>
                                <HiMiniArrowUpRight />
                                Ver Projetos
                            </button>
                        </Link>
                        
                    </div>
                </div>
                <div className='foto-sobre-mim'>
                    <img src={imgPerfil} alt="ImagemDePerfil" />
                </div>
                
                
            </div>
        </div>
    )
}

export default Sobre