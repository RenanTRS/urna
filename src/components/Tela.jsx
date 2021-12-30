import React, {useContext} from 'react';
import { TesteContext } from '../page/Home';

import { Footer } from './Footer';

export function Tela(){

    const add = (event) => {
        setNumOne(event);
    }
    const addt = (event) => {
        setNumTwo(event);
    }

    const {numOne, setNumOne, numTwo, setNumTwo, status, candidate} = useContext(TesteContext);

    return(
        <>
            {(status === 0) &&
                <div className='tela'>
                    <h1>Presidente</h1>
                    <div className='inputs'>
                        {/*<input type='number' value={numOne} onChange={(event)=>add(event)}/>*/}
                        <input type='number' value={numOne}/>
                        <input type='number' value={numTwo} onChange={(event) => addt(event)}/>
                    </div>
                </div>
            }
            {(status === 1) &&
                <div className='tela'>
                    <div className='valido'>
                        <header>
                            <p>Seu voto para</p>
                            <h1>Presidente</h1>
                        </header>
                        <img src={candidate.avatar} alt="Candidato" />
                        <div className='block-text'>
                            <ul>
                                <li><p>Número:</p><div><span className='num'>{numOne}</span><span className='num'>{numTwo}</span></div></li>
                                
                                <li><p>Nome:</p><span>{candidate.name}</span></li>
                                
                                <li><p>Partido:</p><span>{candidate.partido}</span></li>
                            </ul>
                        </div>
                    </div>
                    <Footer />
                </div>
            }
            {/*Voto nulo*/}
            {(status === 2) &&
                <div className='tela'>
                    <div className='nulo'>
                        <span>Seu voto para</span>
                        <h1>Presidente</h1>
                        <p>Número: <span className='num'>{numOne}</span><span className='num'>{numTwo}</span></p>
                        <h3>Número errado</h3>
                        <h2>Voto nulo</h2>
                    </div>
                    <Footer />
                </div>
            }
            {/*Voto branco*/}
            {(status === 3) &&
                <div className='tela'>
                    <div className='branco'>
                        <h1>Voto Branco</h1>
                    </div>
                    <Footer />
                </div>
            }
            {(status === 4) &&
                <div className='tela'>
                    <div className='fim'>
                        <h1>fim</h1>
                    </div>
                </div>
            }
        </>
    );
}