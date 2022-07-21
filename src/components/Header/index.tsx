import React from 'react';
import logo from ".//../Logo/logo-impar.svg"
import { ColorBackround, StyleLogo } from "./styles-header";

export function Header() {
    return (
        <header>
            <ColorBackround>
                <StyleLogo>
                    <img src={logo} />
                </StyleLogo>
            </ColorBackround>
        </header>
    )
}