import styled from 'styled-components'
import { setColor, setFlex } from '../styles'

export const Wrapper = styled.div`
    ${setFlex({direction: 'column'})};
    max-width: 1000px;
    padding: 20px;

    h1 {
        font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        background-image: linear-gradient(180deg, ${setColor.mainWhite},  ${setColor.mainBlack});
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 60px;
        font-weight: 500;
        text-align: center;
        margin: 20px;
    }
`

export const QuestionWrapper = styled.div`
    padding: 10px 30px;
    ${setFlex({direction: 'column', y: 'center'})};
    max-width: 1000px;
    background: ${setColor.mainWhite};
    border-radius: 10px;
    border: 4px solid ${setColor.primaryColor};
    /* text-align: center; */
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.3); 
`

export const ResultWrapper = styled(QuestionWrapper)`
    ${setFlex({direction: 'column', y: 'start'})};
    /* margin-top: 20px; */

    .result-row {
        margin: 8px 0;

        .result-question {
            font-weight: 550;
        }
    }
`