import styled from "styled-components";
import { BackgroundCard, PrimaryColor } from "../../styles/global";

export const BackgroundFieldSearch = styled.div 
`
    width:1046px;
    background:#ffffff;
    height:75px;
    border-radius:8px;
    display:flex;
    justify-content:space-between;
`

export const InputFieldSearch = styled.input
`
    background-color:transparent;
    border: none;
    font-size: 25px;
    font-family: Muli
    background-color:transparent;
    margin-left:10px;
    height:100%;
    flex: 1;
    border:none;
    &:focus {
        outline: none;
    }
`

export const ButtonFieldSerch = styled.button 
`   
    background-color:transparent;
    border: none;
    width: 75px;
    background-color:transparent;
    opacity: 1;
    &:hover{
        background-color:#ccc;
        cursor:pointer;
        border-radius:8px;
    }
`