import React, {createContext, useState} from 'react';

import { Tela } from '../components/Tela';
import { Teclado } from '../components/Teclado';

import '../style/style.scss';

export const TesteContext = createContext({});

export function Home(){

    const [numOne, setNumOne] = useState('');
    const [numTwo, setNumTwo] = useState('');
    const [candidato, setCandidato] = useState({});
    const [status, setStatus] = useState(0);
    
    return (
        <main>
            <TesteContext.Provider value={{numOne, setNumOne, numTwo, setNumTwo, status, setStatus, candidato, setCandidato}}>
                <Tela />
                <Teclado />
            </TesteContext.Provider>
        </main>
    );
}