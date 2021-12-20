import React from 'react';

export function Tela(){

    const {numOne, numTwo} = useContext(TesteContext);

    return(
        <>
            <div className='tela'>
                <h1>Presidente</h1>
                <div className='inputs'>
                    <input type="number" />
                    <input type="number" />
                </div>
            </div>
        </>
    );
}