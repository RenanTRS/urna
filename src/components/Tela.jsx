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
                    <h1>Presidente</h1>
                    <img src={teste.avatar} alt="" />
                </div>
            }
            {(status === 2) &&
                <div className='tela'>
                    <h1>Voto nulo</h1>
                </div>
            }
        </>
    );
}