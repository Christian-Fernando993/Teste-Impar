import { Button, Modal } from "react-bootstrap";
import { GoTrashcan } from "react-icons/go";

export default function DeleteCard({ show, setShow, id = 0 }: { show: boolean, setShow: any, id?: number }) {
    return (
        <>
            <Modal style={{ minHeight: "250px" }} show={show} centered onHide={() => setShow(false)}>
                <Modal.Body>
                    <div
                        style={{
                            margin: "auto", borderRadius: "50%", width: "150px", height: "150px",
                            border: "1px solid #E4E4E4", backgroundColor: "#FFFFFF", display: "flex",
                            justifyContent: "center", alignItems: "center"
                        }}>
                        <GoTrashcan size={70} color="#DB2525" />
                    </div>
                    <div className="text-center p1">
                        <h3 className="text-danger m1">Excluir</h3>
                        <h6 className="text-secondary m-2">CERTEZA QUE DESEJA EXCLUIR?</h6>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="w-100 d-flex justify-content-around">
                        <Button
                            style={{ padding: "5px 40px", border: "1px solid #DB2525", backgroundColor: "#DB2525" }}
                            onClick={() => {
                                alert("Função não implementada");
                            }}>
                            Excluir
                        </Button>
                        <Button
                            style={{ padding: "5px 30px", border: "1px solid #DB2525", color: "#DB2525", backgroundColor: "#FFFFFF" }}
                            onClick={() => {
                                alert("Função não implementada");
                            }}>
                            Cancelar
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}