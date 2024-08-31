// Dependencies
import { GridColDef } from "@mui/x-data-grid";

export const columnsCard: GridColDef[] = [{
    field: "id",
    headerName: "ID",
    flex: 1
},
{
    field: "name",
    headerName: "Nombre",
    flex: 1
},
{
    field: "rarity",
    headerName: "Rareza",
    flex: 1
},
{
    field: "health",
    headerName: "Salud",
    flex: 1
},
{
    field: "attack",
    headerName: "Ataque",
    flex: 1
},
{
    field: "defense",
    headerName: "Defensa",
    flex: 1
},
{
    field: "evasion",
    headerName: "Evasión",
    flex: 1
}
]