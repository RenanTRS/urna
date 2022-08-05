import { createGlobalStyle } from 'styled-components'

export const Base = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        font-size: 62.5%;
    }
`

export const colors = {
  body: '#E6E8E7',
  tela: '#E9F9F6',
  etiqueta: '#FFFDFD',
  tecladoBase: '#23262D',
  teclaNum: '#161920',
  btnWhite: '#f5f5f5',
  btnOrange: '#D16738',
  btnGreen: '#549B4B'
}

export const media = {
  phone: '@media (max-width: 767.99px)',
  phoneLandscape: '@media (max-width: 767.98px) and (orientation: landscape)',
  tablet: '@media (min-width: 768px) and (max-width: 1199.98px)',
  tabletLandscape:
    '@media (min-width: 768px) and (max-width: 1199.98px) and (orientation: landscape)',
  desktop: '@media (min-width: 1200px)'
}
