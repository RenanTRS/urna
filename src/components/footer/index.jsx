import React from 'react';

import { FooterStyled } from './style'

export function Footer(){
    return(
        <FooterStyled>
            <span>Aperta a tecla</span>
            <p>VERDE para CONFIRMAR</p>
            <p>LARANJA para CORRIGIR</p>
        </FooterStyled>
    );
}