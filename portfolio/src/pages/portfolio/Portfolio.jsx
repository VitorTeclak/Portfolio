import './Portfolio.css'

import Projetos from '../../components/projetos/Projetos';
import Tecnologias from '../../components/tecnologias/Tecnologias'



import { useState } from 'react';

const Portfolio = () => {

  const [botaoSelecionado, setBotaoSelecionado] = useState('projetos');

  return (
    <div>
      <div className='formatacao-portfolio'>
        <div className='animacao-portfolio'>
          <h1>
            Vitrine de Portfólio
          </h1>

          <span className='texto-cinza'>
            Explore meus projetos, meus certificados e minhas experiencias tecnicas
          </span>
        </div>
        

        <div className='navbar-portfolio'>
          <button
            className={botaoSelecionado === 'projetos' ? 'selecionado' : ''}
            onClick={() => setBotaoSelecionado('projetos')}
          >
            Projetos
          </button>

          <button
            className={botaoSelecionado === 'stacks' ? 'selecionado' : ''}
            onClick={() => setBotaoSelecionado('stacks')}
          >
            Stacks
          </button>
        </div>

        {botaoSelecionado === 'projetos' && <Projetos />}

        {botaoSelecionado === 'stacks' && <Tecnologias />}


        
        
        

        
      </div>
    </div>
  )
}

export default Portfolio