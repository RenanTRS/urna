import React from 'react';

import brasaoImg from '../assets/image/brasao.png'

export function Teclado(){
    return(
        <div className='console'>
            <div className='etiqueta'>
                <img src={brasaoImg} alt="Logo" />
                <span>Justiça Eleitoral</span>
            </div>
            <div className='teclado'>
                <div className='btn-numbers'>
                    <button type="button"><span>1</span></button>
                    <button type="button"><span>2</span></button>
                    <button type="button"><span>3</span></button>
                    <button type="button"><span>4</span></button>
                    <button type="button"><span>5</span></button>
                    <button type="button"><span>6</span></button>
                    <button type="button"><span>7</span></button>
                    <button type="button"><span>8</span></button>
                    <button type="button"><span>9</span></button>
                    <button type="button"><span>0</span></button>
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