import './Projetos.css'

import listaProjetos from '../../data/Projetos';

import { HiMiniArrowRight } from "react-icons/hi2";

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
            <button>
                <HiMiniArrowRight />
                Detalhes
            </button>
            </div>
        </div>
        ))}
        

        </div>
    )
}

export default Projetos