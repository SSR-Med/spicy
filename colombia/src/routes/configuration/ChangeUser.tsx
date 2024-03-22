// Dependencies
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper} from '@mui/material';
import { useState } from 'react';
// Components
import { createHomeFooter,createHomeHeaderElement } from "../../components/home/HomeComponent"
import { AdminSearch, ButtonEdit, createHeaderTable, createCells } from '../../components/configuration/AdminConfigurationComponent';
// Theme
import { tableContainerThemeAdmin } from '../../styles/configuration/ConfigurationAdmin';
export default function ChangeUser(){
    const rows = [
        {
            "id": 1,
            "name": "Carta 1",
            "password": "Hashed:v",
            "admin": true,
            "objects":{
                "tokens": 200,
                "xp_boosters": 3,
                "energy": 100
            }
        },
        {
            "id": 1,
            "name": "Carta 1",
            "password": "Hashed:v",
            "admin": true,
            "objects":{
                "tokens": 200,
                "xp_boosters": 3,
                "energy": 100
            }
        },
        {
            "id": 1,
            "name": "Carta 1",
            "password": "Hashed:v",
            "admin": true,
            "objects":{
                "tokens": 200,
                "xp_boosters": 3,
                "energy": 100
            }
        },
    ]
    const [editedRowIndex, setEditedRowIndex] = useState(null);
    return (
        <div className="home">
            {createHomeHeaderElement()}
            <main className="home-main">
                <div className="admin-configuration">
                    <div className="admin-items">
                        <h1>Configuración de usuarios</h1>
                        {AdminSearch("Nombre Usuario")}
                        <TableContainer sx={tableContainerThemeAdmin} component={Paper}>
                        <Table>
                            {createHeaderTable(["Id","Nombre","Contraseña","Admin","Tokens","Boosters","Energía","Acciones"])}
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                {createCells(row.id,editedRowIndex,[row.name,row.password,row.admin ? "Sí": "No",row.objects.tokens,row.objects.xp_boosters,row.objects.energy])}
                                {ButtonEdit(row.id,editedRowIndex, setEditedRowIndex)}
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </div>
                </div>
            </main>
            {createHomeFooter()}
        </div>
    )
}