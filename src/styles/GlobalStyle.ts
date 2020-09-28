import  { createGlobalStyle } from 'styled-components';
import {setColor, setFlex, setFont} from '../styles'
import mount8 from '../images/mount8.jpg'




export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Lato:ital,wght@1,700&display=swap');  

    html {
        height: 100vh;
    }

    body {
        /* background-image: url(${mount8}) ;
        background-size: cover; */
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${mount8}) center/cover no-repeat fixed ;
        ${setFlex()};
        margin: 0;
        padding: 0;
        /* color: ${setColor.mainWhite}; */
    } 

    * {
        box-sizing: border-box;
        /* font-family: 'Baloo Tammudu', sans-serif; */
        ${setFont.main}
        font-size: 18px;
    }
`