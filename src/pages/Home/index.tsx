import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import SearchField from '../../components/SearchField';
import axiosCon from '../../Services/Api';
import { BackGroundColor, PrimaryColor } from '../../styles/global';
import Card from '../../components/Card';
import { CardType } from '../../Interfaces/types';
import DeleteCard from '../../components/DeleteCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { BackgroundFieldSearch } from './styleHome';
import EditCard from '../../components/EditCard';
import CreateCard from '../../components/CreateCard';

export function Home() {

    const [EditCanvas, setEditCanvas] = useState<boolean>(false);
    const [CreateCardFlag, setCreateCardFlag] = useState(false);
    const [Loading, setLoading] = useState<boolean>(true);
    const [listData, setlistData] = useState<Array<any>>([]);
    const [deleteModal, setdeleteModal] = useState<boolean>(false);
    const [deleteId, setdeleteId] = useState<number>(0);
    const [EditObject, setEditObject] = useState<any>({});

    const [text, setText] = useState("");
    const [SearchText, setSearchText] = useState<string>("");

    async function LoadDice(filter: any = null) {
        try {
            let api = axiosCon;

            let response = await api.get(`pokemon/?offset=0&limit=151`)

            const pokemons = response.data.results.map((
                pokemon: { url: string; }) => {
                const urlSplit = pokemon.url.split('/')
                const id = urlSplit[urlSplit.length - 2]
                return {
                    ...pokemon,
                    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
                }
            }
            ).filter((pokemon: any) => {
                if (filter)
                    return pokemon.name.toUpperCase() === filter.toUpperCase()
                return true
            })
            let tmpArr: Array<any> = [];
            tmpArr.concat(pokemons, listData);
            setlistData(pokemons);
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        } catch (error) {
            console.log("Erro LoadDice", error);
        }
    };
    useEffect(() => {
        LoadDice();
        return () => {
        }
    }, [])
    return (
        <>
            <div style={{ backgroundColor: BackGroundColor, minHeight: "100vh" }}>
                <Header />
                <BackgroundFieldSearch>
                    <SearchField OnClickFun={(value: any) => {
                        LoadDice(value);
                    }} Search={SearchText} SetSearch={setSearchText} />
                </BackgroundFieldSearch>
                <Container className='mt-3'>
                    <Row className='mb-3'>
                        <Col xs="5" md="5" lg="12">
                            <div className='d-flex justify-content-between'>
                                <h1 style={{
                                    color: PrimaryColor,
                                    fontFamily: "Muli",
                                }}>
                                    Resultado de Busca
                                </h1>
                                <Button className="Button_NovoCard" style={{ background: "#E76316", border: "none" }} onClick={() => { setCreateCardFlag(true); }}>
                                    Novo Card
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mb-4'>
                        {listData.map(item => {
                            return (
                                <Col xs="12" md="4" lg="4" xl="3" >
                                    <Card
                                        OnDelete={(value: number) => {
                                            setdeleteId(Number(value));
                                            setdeleteModal(true)
                                        }}
                                        OnEdit={(EditModel: CardType) => {
                                            setEditObject(EditModel);
                                            setEditCanvas(true)
                                        }}
                                        photoPokemon={item.img}
                                        namePokemon={item.name}>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>

                </Container>
            </div>

            <DeleteCard show={deleteModal} setShow={setdeleteModal} id={deleteId} />
            <CreateCard CloseCanvas={setCreateCardFlag} show={CreateCardFlag} setShow={setCreateCardFlag} />
            <EditCard show={EditCanvas} setShow={setEditCanvas} EditModel={EditObject} />
        </>
    )
}

