//CardComponent.tsx
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { staticUrlCard } from "../../helpers/StaticUrlCard";
import { buttonLevelCard } from "../../styles/team/CardStyle";
import { getItemsByUser, getUserCard } from "./actions";
import axios from "axios";
import { API_URL } from "../../constants/Constants";
import Cookies from "js-cookie";

function getNameUrl() {
    return window.location.pathname.split("/").pop();
}

export function getImage() {
    return staticUrlCard(getNameUrl() || "");
}

function replaceFakeSpace(name: string) {
    return name.replace("_", " ");
}

function upperCaseFirstLetter(name: string) {
    return name.replace(/\b\w/g, l => l.toUpperCase());
}

export function getName() {
    return upperCaseFirstLetter(replaceFakeSpace(getNameUrl() || ""));
}

export function LevelUp(props: any) {
    const [userCard, setUserCard] = useState<{ id: string, level: number, xp: number, attack: number, evasion: number, defense: number, health: number, id_user: string, card: { name: string } }>();
    const [items, setItems] = useState<{ id: number, item: { id: number, name: string, xp: number } }[]>([]);
    const [totalXp, setTotalXp] = useState(0);
    const [maggiCount, setMaggiCount] = useState(0);
    const [ricostillaCount, setRicostillaCount] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const [usedMaggiItems, setUsedMaggiItems] = useState<number[]>([]);
    const [usedRicostillaItems, setUsedRicostillaItems] = useState<number[]>([]);

    useEffect(() => {
        const userCardId = Number(getNameUrl());
    
        getUserCard(userCardId).then((card) => {
            setUserCard(card);
        });
    
        getItemsByUser().then((items) => {
            setItems(items);
            //console.log("Items:", items);
            const maggiCount = items.filter((item: { item: { name: string } }) => item.item.name.toLowerCase() === 'maggi').length;
            const ricostillaCount = items.filter((item: { item: { name: string } }) => item.item.name.toLowerCase() === 'ricostilla').length;
    
            setMaggiCount(maggiCount);
            setRicostillaCount(ricostillaCount);
        });
    }, []); // Dependencia en el valor del nombre de la carta en la URL
    

    const handleMaggiClick = () => {
        const maggiItem = items.find(item => item.item.name.toLowerCase() === 'maggi' && !usedMaggiItems.includes(item.id));
        if (maggiItem && maggiCount > 0) {
            setTotalXp(prevXp => prevXp + maggiItem.item.xp);
            setMaggiCount(prevCount => prevCount - 1);
            setUsedMaggiItems(prevItems => [...prevItems, maggiItem.id]);
        }
    };

    const handleRicostillaClick = () => {
        const ricostillaItem = items.find(item => item.item.name.toLowerCase() === 'ricostilla' && !usedRicostillaItems.includes(item.id));
        if (ricostillaItem && ricostillaCount > 0) {
            setTotalXp(prevXp => prevXp + ricostillaItem.item.xp);
            setRicostillaCount(prevCount => prevCount - 1);
            setUsedRicostillaItems(prevItems => [...prevItems, ricostillaItem.id]);
        }
    };

    const handleCloseLevelUp = () => {
        props.onCloseLevelUp();
    }

    const handleConfirmClick = () => {
        if (!userCard || !userCard.id) {
            console.error("No user card data available.");
            return;
        }

        if (totalXp <= 0) {
            setErrorMessage("Debes usar al menos un ítem para acumular XP.");
            return;
        }

        if (usedMaggiItems.length === 0 && usedRicostillaItems.length === 0) {
            alert("No se han seleccionado ítems para usar.");
            return;
        }

        const data = {
            userId: Number(getNameUrl()),
            cardUserId: userCard.id,
            xpAdded: totalXp,
            usedMaggiItems,
            usedRicostillaItems
        };

        console.log("Sending data:", data);

        axios.patch(`${API_URL}/cardxuser/${userCard.id}`, data, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })
        .then(response => {
            //alert(response.data.message);
            setTotalXp(0);
            setMaggiCount(0);
            setRicostillaCount(0);
            setUsedMaggiItems([]);
            setUsedRicostillaItems([]);
            getItemsByUser().then((items) => setItems(items));
            setErrorMessage("");
        })
        .catch(error => {
            console.error("Error al subir de nivel o eliminar ítems:", error);
        });
        getUserCard(Number(getNameUrl())).then((card) => {
            setUserCard(card);
        });
        props.onCloseLevelUp();
    };

    return (
        <div className="level-up-container">
            <div className="level-up-container-attributes">
                <img src={staticUrlCard(userCard?.card.name)} alt={`Card of ${userCard?.card.name}`} />
                <div className="level-up-container-attributes-element-container">
                    <div className="level-up-container-attributes-element">
                        <h1>Nivel actual: {userCard?.level}</h1>
                    </div>

                    <div className="level-up-container-attributes-element">
                        <h1>Items a usar:</h1>
                        <div className="level-up-container-attributes-element">
                            <Button
                                variant="contained"
                                sx={{
                                    ...buttonLevelCard,
                                    padding: "4px 8px",
                                    fontSize: "0.8rem",
                                    minWidth: "60px",
                                    height: "40px"
                                }}
                                onClick={handleMaggiClick}
                            >
                                Maggi ({maggiCount})
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    ...buttonLevelCard,
                                    padding: "4px 8px",
                                    fontSize: "0.8rem",
                                    minWidth: "60px",
                                    height: "40px"
                                }}
                                onClick={handleRicostillaClick}
                            >
                                Ricostilla ({ricostillaCount})
                            </Button>
                        </div>
                    </div>

                    <div className="level-up-container-attributes-element">
                        <h1>Estadísticas finales: A:{userCard?.attack}+{userCard?.attack ? (userCard.attack * 0.1).toFixed(1) : "N/A"} D:{userCard?.defense}+{userCard?.defense ? (userCard.defense * 0.1).toFixed(1) : "N/A"} V:{userCard?.health}+{userCard?.health ? (userCard.health * 0.1).toFixed(1) : "N/A"} E:{userCard?.evasion}+{userCard?.evasion ? (userCard.evasion * 0.1).toFixed(1) : "N/A"}</h1>
                        <h1>XP Acumulada: {totalXp}</h1>
                    </div>

                    {errorMessage && <h2 style={{ color: "red" }}>{errorMessage}</h2>}

                    <div className="level-up-buttons">
                        <Button variant="contained" sx={buttonLevelCard} onClick={handleCloseLevelUp}>Cancelar</Button>
                        <Button variant="contained" sx={{ ...buttonLevelCard, marginLeft: "2.5%" }} onClick={handleConfirmClick}>Confirmar</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}