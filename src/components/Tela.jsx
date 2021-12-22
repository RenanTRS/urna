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
                        <input type="text" value={numOne} onChange={(event)=>add(event)}/>
                        <input type="text" value={numTwo} onChange={(event) => addt(event)}/>
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
                    <Footer />
                </div>
            }
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