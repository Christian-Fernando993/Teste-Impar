import { TextColorSearch } from "../../styles/global";
import { BiTrash } from 'react-icons/bi';
import { BsPencil } from "react-icons/bs";
import { Image } from 'react-bootstrap';

export default function Card(
    { OnDelete, OnEdit, namePokemon, photoPokemon, ...props }
        :
        { OnDelete: any, OnEdit: any, namePokemon: any, photoPokemon: any }) {
    return (
        <>
            <div style={{ background: "#ffffff", marginTop: "5px", border: "1px solid #E4E4E4", borderRadius: "8px" }}>
                <div className="d-flex justify-content-center" style={{ minHeight: "170px" }}>
                    <div className='CardPokemon'>
                        <Image src={photoPokemon} />
                    </div>
                </div>
                <div className="d-flex justify-content-center w-75 mt-4"
                    style={{ borderBottom: "1px solid #E4E4E4", margin: "auto" }}>
                    <p style={{ color: TextColorSearch }}>
                        {namePokemon}
                    </p>
                </div>
                <div className="w-100 d-flex justify-content-center" >
                    <div className="w-50 d-flex justify-content-center align-items-center m-2"
                        style={{ cursor: "pointer", borderRight: "1px solid #E4E4E4" }}
                        onClick={() => { OnDelete(namePokemon.id) }}>
                        <BiTrash color="#AE276F" />
                        <span style={{ color: "#757575" }}> Excluir</span>
                    </div>
                    <div className="w-50 d-flex justify-content-center align-items-center m-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => { OnEdit({ namePokemon, photoPokemon }) }}>
                        <BsPencil color="#E76316" />
                        <span style={{ color: "#757575" }}> Editar</span>
                    </div>
                </div>
            </div>
        </>
    )
}