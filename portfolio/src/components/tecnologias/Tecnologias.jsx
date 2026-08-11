import './Tecnologias.css'

import listaTecnologias from '../../data/Tecnologias'

const Tecnologias = () => {
  return (
    <div className='lista-tecnologias'>
        {listaTecnologias.map((tecnologia) => (
            <div className="card-tecnologia" key={tecnologia.nome}>
                <img src={tecnologia.icon} alt={tecnologia.nome} />
                <span>{tecnologia.nome}</span>
            </div>
        ))}
    </div>
  )
}

export default Tecnologias