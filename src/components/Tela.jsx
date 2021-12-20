import React, {useContext} from 'react';
import { TesteContext } from '../page/Home';

export function Tela(){

    const {numOne, numTwo, status} = useContext(TesteContext);
    console.log(numOne + numTwo);

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
                    <h1>Vote em mim</h1>
                
                </div>
            }
        </>
    );
}