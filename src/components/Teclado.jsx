import React, { useContext}from 'react';
import { TesteContext } from '../page/Home';
import { fakeData } from './fakeData';


import brasaoImg from '../assets/image/brasao.png'

export function Teclado(){
    const {numOne, setNumOne, setNumTwo, setStatus} = useContext(TesteContext);
    
    function handlePress(valor){
        if(numOne === ''){
            setNumOne(valor);
        } else{
            setNumTwo(valor);
            setTimeout(() => {
                setStatus(1);
            }, 1000);
        }  
    }

    return(
        <div className='console'>
            <div className='etiqueta'>
                <img src={brasaoImg} alt="Logo" />
                <span>Justiça Eleitoral</span>
            </div>
            <div className='teclado'>
                <div className='btn-numbers'>
                    <button type="button" onClick={event => handlePress('1')}><span>1</span></button>
                    <button type="button" onClick={event => handlePress('2')}><span>2</span></button>
                    <button type="button" onClick={event => handlePress('3')}><span>3</span></button>
                    <button type="button" onClick={event => handlePress('4')}><span>4</span></button>
                    <button type="button" onClick={event => handlePress('5')}><span>5</span></button>
                    <button type="button" onClick={event => handlePress('6')}><span>6</span></button>
                    <button type="button" onClick={event => handlePress('7')}><span>7</span></button>
                    <button type="button" onClick={event => handlePress('8')}><span>8</span></button>
                    <button type="button" onClick={event => handlePress('9')}><span>9</span></button>
                    <button type="button" onClick={event => handlePress('0')}><span>0</span></button>
                </div>
                <div className='btn-action'>
                    <button type="button" className='white'><span>Branco</span></button>
                    <button type="button" className='orange'><span>Corrige</span></button>
                    <button type="button" className='green'><span>Confirma</span></button>
                </div>
            </div>
        </div>
    );
}