import React, {createContext, Dispatch, useState} from 'react';
import { fakeData } from '../../components/fakeData';
import { Tela } from '../../components/tela'
import { Teclado } from '../../components/teclado';

import { MainStyled } from './style';
import { SetStateAction } from 'react';

type CandidateType = typeof fakeData //type equal fakedata
interface ITesteContext {
    numOne: string;
    setNumOne: Dispatch<SetStateAction<string>>;
    numTwo: string;
    setNumTwo: Dispatch<SetStateAction<string>>;
    status: number;
    setStatus: Dispatch<SetStateAction<number>>;
    numero: string;
    setNumero: Dispatch<SetStateAction<string>>;
    candidate: any;
    setCandidate: any;
}

export const TesteContext = createContext({} as ITesteContext);

export function Home(){

    const [numOne, setNumOne] = useState<string>('');
    const [numTwo, setNumTwo] = useState<string>('');
    const [status, setStatus] = useState<number>(0);
    const [numero, setNumero] = useState<string>('');
    const [candidate, setCandidate] = useState<any>({})
    
    return (
        <MainStyled>
                <TesteContext.Provider value={{numOne, setNumOne, numTwo, setNumTwo, status, setStatus, numero, setNumero, candidate, setCandidate}}>
                    <Tela />
                    <Teclado />
                </TesteContext.Provider>
        </MainStyled>
    );
}