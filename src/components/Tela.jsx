import React, {useContext} from 'react';
import { TesteContext } from '../page/Home';
import { fakeData } from './fakeData';

export function Tela(){

    const {numOne, numTwo, status, setStatus} = useContext(TesteContext);
    const number = numOne + numTwo;
    let teste = fakeData[number];

    if(number.length === 2){
        if(!teste){
            teste = '';
            setStatus(2);
        }
    }

    return(
        <>
            {(status === 0) &&
                <div className='tela'>
                    <h1>Presidente</h1>
                    <div className='inputs'>
                        <input type="text" value={numOne} />
                        <input type="text" value={numTwo} />
                    </div>
                </div>
            }
            {(status === 1) &&
                <div className='tela'>
                    <div className='valido'>
                        <div className='block-text'>
                            <p>Seu voto para</p>
                            <h1>Presidente</h1>
                            <ul>
                                <li><p>Número:</p><div><span className='num'>{numOne}</span><span className='num'>{numTwo}</span></div></li>
                                
                                <li><p>Nome:</p><span>{teste.name}</span></li>
                                
                                <li><p>Partido:</p><span>{teste.partido}</span></li>
                            </ul>
                        </div>
                        <img src={teste.avatar} alt="" />
                    </div>
                    <footer>
                        <span>Aperta a tecla</span>
                        <p>VERDE para CONFIRMAR</p>
                        <p>LARANJA para CORRIGIR</p>
                    </footer>
                </div>
            }
            {(status === 2) &&
                <div className='tela'>
                    <h1>Voto nulo</h1>
                </div>
            }
            {(status === 3) &&
                <div className='tela'>
                    <h1>fim</h1>
                </div>
            }
        </>
    );
}