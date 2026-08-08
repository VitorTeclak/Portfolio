import './Home.css'

import MaquinaEscrever from '../../components/maquinaEscrever/MaquinaEscrever'

const Home = () => {
  return (
    <div>
        <div className='formatacao-home'>
            <div className='conteudo-home'>
                <div className='texto-desenvolvedor'>
                    <span>Desenvolvedor</span>
                    <span className='texto-cinza'>Fullstack</span>

                    <MaquinaEscrever
                    palavras={[
                        'Happy hacking',
                        'Hello world'
                    ]}
                    />
                </div>
                
                

                <div className='texto-apresentacao texto-cinza'>
                    <div>
                        Formado em Analise e Desenvolvimento de Sistemas e cursando bacharelado de Engenharia de Software
                        (3° período), possuo 2 anos de experiência no mercado de desenvolvimento de Software,
                        sempre entregando trabalho com agilidade e dedicação.
                    </div>
                </div>
            </div>
            <div className='foto-home'>
                lado direito
            </div>
            
        </div>
    </div>
  )
}

export default Home