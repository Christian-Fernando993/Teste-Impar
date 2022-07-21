import { BackgroundFieldSearch, ButtonFieldSerch, InputFieldSearch } from "./styleSearchField";
import buscar from '../../assets/buscar.svg'
import { text } from "stream/consumers";
import { useState } from "react";

export default function SearchField({ OnClickFun }: { SetSearch: any, Search: any, OnClickFun: any }) {

    const [text, setText] = useState("");
    return (
        <BackgroundFieldSearch>
            <InputFieldSearch
                type="search"
                value={text}
                id="search-bar-input"
                onChange={(e) => setText(e.target.value)}
                placeholder="Digite aqui sua busca..."
            />
            <ButtonFieldSerch
                onClick={(e) => {
                    OnClickFun(text);
                }}
            >
                <img src={buscar} />
            </ButtonFieldSerch>
        </BackgroundFieldSearch>
    )
}