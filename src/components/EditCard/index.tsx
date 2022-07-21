import { Button, Modal } from "react-bootstrap";
import { PrimaryColor } from "../../styles/global";
import React, { useState } from 'react';

export default function EditCardTeste({ EditModel, show, setShow }: { show: boolean, EditModel: any, setShow: any }) {
    return (
        <>
            <Modal show={show} centered onHide={() => setShow(false)} style={{ minHeight: "250px" }}>
                <div className="text-center p1" style={{ color: PrimaryColor }}>
                    <h2>Criar Card</h2>
                    <hr />
                </div>
                <div>
                    <br />
                    <h5 style={{ marginLeft: "20px" }}>Digite um nome para o card</h5>
                    <input placeholder="Digite o titulo"
                        style={{
                            marginLeft: "20px",
                            width: "400px",
                            height: "60px",
                            border: "1px solid #B9B9B9",
                            borderRadius: "8px",
                            fontFamily: "Muli",
                            fontSize: "13px",
                            color: "#454545",
                            textTransform: "uppercase",
                        }} />
                    <br />
                    <br />
                    <h5 style={{ marginLeft: "20px" }}>Inclua uma imagem para aparecer no card</h5>

                    <input placeholder="Nenhum arquivo selecionado"
                        style={{
                            marginLeft: "20px",
                            width: "400px",
                            height: "60px",
                            border: "1px solid #B9B9B9",
                            borderRadius: "8px",
                            fontFamily: "Muli",
                            fontSize: "13px",
                            color: "#454545",
                            textTransform: "uppercase",
                        }}
                    />
                    <button style={{
                        marginTop: "20px",
                        padding: "8px 20px",
                        marginLeft: "20px",
                        background: "#E76316",
                        border: "none",
                        boxShadow: "0px 0px 23px 5px rgba(0,0,0,0.22)",
                        margin: "7px",
                    }}>
                        Escolher arquivo
                    </button>

                </div>
                <div className="w-100 d-flex justify-content-center">
                    <br />
                    <Button style={{
                        background: "#E76316",
                        border: "none",
                        padding: "8px 20px",
                        boxShadow: "0px 0px 23px 5px rgba(0,0,0,0.22)",
                        margin: "7px",
                    }}
                        onClick={() => {
                            alert("Função não implementada");
                        }}>
                        Criar card
                    </Button>
                </div>
                <br />
            </Modal>
        </>
    )
}