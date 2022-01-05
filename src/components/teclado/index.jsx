import React, { useContext, useEffect }from 'react';
import { TesteContext } from '../../page/home';
import { fakeData } from '../fakeData';

import {ConsoleStyled, EtiquetaStyled, TecladoStyled, BtnNumbersStyled, BtnActionStyled, ButtonWhite, ButtonGreen, ButtonOrange} from './style';

import brasaoImg from '../../assets/image/brasao.png'

export function Teclado(){
    const {numOne, setNumOne, setNumTwo, status, setStatus, numero, setNumero, setCandidate} = useContext(TesteContext);

    useEffect(()=>{
        //Atualiza sempre que o state numero é modificado
        console.log(numero);
        if(numero !== ''){ //Apenas se for diferente de vazio
            if(fakeData[numero]){
                setCandidate(fakeData[numero]);
                console.log('tem');
                setTimeout(() => {
                    setStatus(1);
                }, 1000)
            }else{
                console.log('não tem');
                setTimeout(() => {
                    setStatus(2);
                }, 1000)
            }
        }
    },[numero])
    
    function handlePress(valor){
        if(numOne === ''){
            setNumOne(valor);
        } else{
            setNumTwo(valor);
            setNumero(numOne+valor);
        }  
    }
    const branco = () => {
        setStatus(3);
    }
    const corrige = () => {
        setNumOne('');
        setNumTwo('');
        setStatus(0);
    }
    const confirma = () => {
        setStatus(4);
        setTimeout(() => {
            setNumOne('');
            setNumTwo('');
            setStatus(0);
        }, 1000);
    }

    return(
        <ConsoleStyled>
            <EtiquetaStyled>
                <img src={brasaoImg} alt="Logo" />
                <span>Justiça Eleitoral</span>
            </EtiquetaStyled>
            <TecladoStyled>
                <BtnNumbersStyled display={(status !== 0) && 'none'}>
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
                </BtnNumbersStyled>
                
                <BtnActionStyled>
                    <ButtonWhite type="button" onClick={branco}><span>branco</span></ButtonWhite>
                    <ButtonOrange type="button" onClick={corrige}><span>corrige</span></ButtonOrange>
                    <ButtonGreen type="button" onClick={confirma}><span>confirma</span></ButtonGreen>
                </BtnActionStyled>
            </TecladoStyled>
        </ConsoleStyled>
    );
}