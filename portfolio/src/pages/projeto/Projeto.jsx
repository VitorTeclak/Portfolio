import './Projeto.css'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

import listaProjetos from '../../data/Projetos';

//Icons
import { HiMiniArrowLeft } from "react-icons/hi2";
import { FaCode } from "react-icons/fa6";
import { LuLayers } from "react-icons/lu";
import { FiExternalLink } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import { BsStars } from "react-icons/bs";



import { a } from 'framer-motion/client';

const Projeto = () => {
    const { nome } = useParams();

    const projeto = listaProjetos.find(
        projeto => projeto.nome === nome
    );

    return (
        <div>
            
            
            <div className='formatacao-projeto'>
                <div className='conteudo-projeto'>
                    <div className='animacao-esquerda-direita'>
                        <Link to={`/portfolio`} className='link'>
                            <HiMiniArrowLeft />
                            Voltar
                        </Link>
                    </div>
                    <div>
                        <h1 className='animacao-esquerda-direita'>{projeto.nome}</h1>
                        <hr />
                        <span className='texto-cinza formatacao-descricao-projeto'>{projeto.descricao}</span>

                        <div className='formatacao-cards-teconologias animacao-esquerda-direita'>
                            <div className='card-projeto'>
                                <div className='icon-projeto'>
                                    <FaCode />
                                </div>
                                <div className='texto-card-projeto'>
                                    {projeto.qtdTecnologias}
                                    <span className='texto-cinza'>Tecnologias utilizadas</span>
                                </div>
                            </div>

                            <div className='card-projeto '>
                                <div className='icon-projeto'>
                                    <LuLayers />
                                </div>
                                <div className='texto-card-projeto'>
                                    {projeto.qtdTecnologias}
                                    <span className='texto-cinza'>Principais Carateristicas</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='formatacao-cards-links animacao-direita-esquerda'>
                        {projeto.linkWeb ? (
                            <a
                                href={projeto.linkWeb}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card-links"
                            >
                                <FiExternalLink />
                                <span>Ver Website</span>
                            </a>
                        ) : (
                            <div className="card-links">
                                <FiExternalLink />
                                <span>Sem Link</span>
                            </div>
                        )}
                        {projeto.linkRep ? (
                            <a
                                href={projeto.linkRep}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card-links"
                            >
                                <IoLogoGithub />
                                <span>Ver Repositorio Git</span>
                            </a>
                        ) : (
                            <div className="card-links">
                                <IoLogoGithub />
                                <span>Sem Link</span>
                            </div>
                        )}
                            
                    </div>

                    <div className='animacao-esquerda-direita'>
                        <span>
                            <FaCode /> Tecnologias Utilizadas
                        </span>
                        <div className='formatacao-tecnologias'>
                            {projeto.tecnologias.map((tecnologia) => (
                                <div key={tecnologia} className='card-tecnologias'>
                                    {tecnologia}
                                </div>
                            ))}
                        </div>
                    </div>
                    
                </div>

                <div className='formatacao-caracteristicas animacao-direita-esquerda'>
                    <div className='card-caracteristica'>
                        <span><BsStars /> Principais Caracteristicas</span>
                        {projeto.caracteristicas.map((caracteristica) => (
                            <div key={caracteristica} >
                                <ul>
                                    <li>{caracteristica}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Projeto;