import React from 'react';

import { Tela } from '../components/Tela';
import { Teclado } from '../components/Teclado';

import '../style/style.scss';

export function Home(){
    return (
        <main>
            <Tela />
            <Teclado />
        </main>
    );
}