import './Projetos.css'

import listaProjetos from '../../data/Projetos';

import { HiMiniArrowRight } from "react-icons/hi2";

import { Link } from 'react-router-dom'

const Projetos = () => {
  return (
    <div className='lista-projetos'>
        {listaProjetos.map((projeto) => (
        <div className='card-projetos' key={projeto.nome}>
            <div className='titulo-projeto'>
            {projeto.nome}
            </div>
            <span className='texto-cinza'>
            {projeto.descricao}
            </span>
            <div>

            </div>
            <div className='footer-projetos'>
                <Link to={`/projeto/${projeto.nome}`} className='link'>
                    <button>
                            <HiMiniArrowRight />
                            Detalhes
                    </button>
                </Link>
            </div>
        </div>
        ))}
        

        </div>
    )
}

export default Projetos