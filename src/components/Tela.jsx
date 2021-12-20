import React, {useContext} from 'react';
import { TesteContext } from '../page/Home';

export function Tela(){

    const {numOne, numTwo} = useContext(TesteContext);

    return(
        <>
            <div className='tela'>
                <h1>Presidente</h1>
                <div className='inputs'>
                    <input type="text" value={numOne} />
                    <input type="text" value={numTwo} />
                </div>
            </div>
        </>
    );
}