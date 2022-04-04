import React, {createContext, useState} from 'react';

import { Tela } from '../../components/tela'
import { Teclado } from '../../components/teclado';

import { MainStyled } from './style';


export const TesteContext = createContext({});

export function Home(){

    const [numOne, setNumOne] = useState('');
    const [numTwo, setNumTwo] = useState('');
    const [status, setStatus] = useState(0);
    const [numero, setNumero] = useState('');
    const [candidate, setCandidate] = useState({});
    
    return (
        <MainStyled>
                <TesteContext.Provider value={{numOne, setNumOne, numTwo, setNumTwo, status, setStatus, numero, setNumero, candidate, setCandidate}}>
                    <Tela />
                    <Teclado />
                </TesteContext.Provider>
        </MainStyled>
    );
}