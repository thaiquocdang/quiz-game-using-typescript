import styled from 'styled-components';
import { setColor } from '../styles';

export const Button = styled.button`
    cursor: pointer;
    display: inline-block;
    outline: none;
    text-decoration: none;
    margin: 5px auto;

`

export const MainButton = styled(Button)`
    background: ${setColor.primaryColor};
    color: ${setColor.mainWhite};
    padding: 3px 20px;
    border-radius: 10px;
    text-transform: capitalize;
    border: 3px solid ${setColor.primaryColor};
    transition: all 0.6s ease-in-out;
    margin: 10px auto;
   

    &:hover {
        background: ${setColor.lightGrey};
        color: ${setColor.primaryColor};
    }
`
type SecondButtonProps= {
    correct: boolean;
    userClicked: boolean;
}

export const SecondButton = styled(Button)`
    padding: 3px 20px;
    width: 100%;
`