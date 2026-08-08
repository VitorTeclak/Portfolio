import { useEffect, useState } from 'react';
import './MaquinaEscrever.css';

const VELOCIDADE_DIGITANDO = 100; // ms por letra ao escrever
const VELOCIDADE_APAGANDO = 50;   // ms por letra ao apagar
const PAUSA_PALAVRA_COMPLETA = 2000; // ms parado ao concluir a palavra

const MaquinaEscrever = ({ palavras }) => {
    const [texto, setTexto] = useState('');
    const [indice, setIndice] = useState(0);
    const [apagando, setApagando] = useState(false);

    useEffect(() => {
        const palavraAtual = palavras[indice];
        let delay = apagando ? VELOCIDADE_APAGANDO : VELOCIDADE_DIGITANDO;

        // Se acabou de terminar de digitar a palavra inteira, pausa antes de apagar
        if (!apagando && texto === palavraAtual) {
            delay = PAUSA_PALAVRA_COMPLETA;
        }

        const timer = setTimeout(() => {
            if (apagando) {
                if (texto.length > 0) {
                    setTexto(texto.slice(0, -1));
                } else {
                    setIndice((prev) => (prev + 1) % palavras.length);
                    setApagando(false);
                }
            } else {
                if (texto.length < palavraAtual.length) {
                    setTexto(palavraAtual.slice(0, texto.length + 1));
                } else {
                    setApagando(true);
                }
            }
        }, delay);

        return () => clearTimeout(timer);

    }, [texto, apagando, indice, palavras]);

    return (
        <div className="MaquinaEscrever">
            {texto}
            <span className="cursor">|</span>
        </div>
    );
};

export default MaquinaEscrever;