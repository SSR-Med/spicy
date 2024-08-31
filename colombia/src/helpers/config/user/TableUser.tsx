// Dependencies
import axios from "axios";
import Cookies from "js-cookie";
import { GridColDef } from "@mui/x-data-grid";
// Constants
import { API_URL, englishRole2Spanish } from "../../../constants/Constants";

export const columnsUser: GridColDef[] = [{
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
    field: "password",
    headerName: "Contraseña",
    flex: 1
},
{
    field: "role",
    headerName: "Rol",
    flex: 1
},
{
    field: "tokens",
    headerName: "Tokens",
    flex: 1
},
{
    field: "energy",
    headerName: "Energía",
    flex: 1
},
{
    field: "boosters",
    headerName: "Boosters",
    flex: 1
}
]

async function getUsers(){
    const users = await axios.get(`${API_URL}/admin`,{
        headers:{
            Authorization: `Bearer ${Cookies.get("token")}`
        }
    })
    return users
}

export async function getAndTransformUsers(){
    const users = await getUsers()
    const usersData = users.data.map((user: any) => {
        return {
            ...user,
            role: englishRole2Spanish[user.role.toString()]
        }
    })
    return usersData
}
