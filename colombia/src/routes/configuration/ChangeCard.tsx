// Dependencies
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, IconButton} from '@mui/material';
import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
// Css
import "/src/static/css/configuration/changeCard.css"
// Themes
import { tableContainerThemeAdmin } from '../../styles/configuration/ConfigurationAdmin';
// Components
import { createHomeFooter,createHomeHeaderElement } from "../../components/home/HomeComponent"
import { AdminSearch, ButtonEdit, createHeaderTable, createCells, createCard } from '../../components/configuration/AdminConfigurationComponent';
export default function ChangeCard(){
    const rows = [
        {
            "id": 1,
            "name": "Carta 1",
            "rarity": "Barranca",
            "base_attack": 1,
            "base_defense": 1,
            "base_health": 1,
            "base_evassion": 1
        },
        {
            "id": 2,
            "name": "Carta 2",
            "rarity": "Barranca",
            "base_attack": 2,
            "base_defense": 2,
            "base_health": 2,
            "base_evassion": 2
        },
        {
            "id": 3,
            "name": "Carta 3",
            "rarity": "Barranca",
            "base_attack": 3,
            "base_defense": 3,
            "base_health": 3,
            "base_evassion": 3
        },
        {
            "id": 4,
            "name": "Carta 4",
            "rarity": "Barranca",
            "base_attack": 4,
            "base_defense": 4,
            "base_health": 4,
            "base_evassion": 4
        },
        {
            "id": 1,
            "name": "Carta 1",
            "rarity": "Barranca",
            "base_attack": 1,
            "base_defense": 1,
            "base_health": 1,
            "base_evassion": 1
        },
        {
            "id": 2,
            "name": "Carta 2",
            "rarity": "Barranca",
            "base_attack": 2,
            "base_defense": 2,
            "base_health": 2,
            "base_evassion": 2
        },
        {
            "id": 3,
            "name": "Carta 3",
            "rarity": "Barranca",
            "base_attack": 3,
            "base_defense": 3,
            "base_health": 3,
            "base_evassion": 3
        },
        {
            "id": 4,
            "name": "Carta 4",
            "rarity": "Barranca",
            "base_attack": 4,
            "base_defense": 4,
            "base_health": 4,
            "base_evassion": 4
        }
    ]
    const [editedRowIndex, setEditedRowIndex] = useState(null);
    return (
        <div className="home">
            {createHomeHeaderElement()}
            <main className="home-main">
                <div className = "admin-configuration">
                    <div className = "admin-items">
                        <h1>Configuración de cartas</h1>
                        {AdminSearch("Nombre Carta")}
                        <TableContainer sx={tableContainerThemeAdmin} component={Paper}>
                        <Table>
                            {createHeaderTable(["Id","Nombre","Rareza","Ataque base","Defensa base","Vida base","Evasión base","Acciones"])}
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                {createCells(row.id,editedRowIndex,[row.name,row.rarity,row.base_attack,row.base_defense,row.base_health,row.base_evassion])}
                                {ButtonEdit(row.id,editedRowIndex, setEditedRowIndex)}
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                        <IconButton sx={{color:"white",}} onClick={createCard}>
                            <AddCircleIcon />
                        </IconButton>
                    </div>
                </div>
            </main>
            {createHomeFooter()}
        </div>
    )
}