import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

type CandidateType = {
    name: string;
    number: string;
    avatar: string;
    partido: string;
}

interface IDataContext {
    numOne: string;
    setNumOne: Dispatch<SetStateAction<string>>;
    numTwo: string;
    setNumTwo: Dispatch<SetStateAction<string>>;
    status: number;
    setStatus: Dispatch<SetStateAction<number>>;
    numero: string;
    setNumero: Dispatch<SetStateAction<string>>;
    candidate?: CandidateType[];
    setCandidate?: any;
    //setCandidate?: Dispatch<SetStateAction<CandidateType[]>>;
}

export const DataContext = createContext({} as IDataContext)

type Props = {
    children: ReactNode;
}
export const DataContextProvider = ({children}: Props) => {
    const [numOne, setNumOne] = useState<string>('')
    const [numTwo, setNumTwo] = useState<string>('')
    const [status, setStatus] = useState<number>(0)
    const [numero, setNumero] = useState<string>('')
    const [candidate, setCandidate] = useState<CandidateType[]>([])

    const value = {
        numOne,
        setNumOne,
        numTwo,
        setNumTwo,
        status,
        setStatus,
        numero,
        setNumero,
        candidate,
        setCandidate
    }
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}