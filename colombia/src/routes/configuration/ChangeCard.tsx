// Css
import "/src/static/css/configuration/changeCard.css"
// Dependencies
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { Button } from "@mui/material"
// Components
import { createHomeFooter,createHomeHeaderElement } from "../../components/home/HomeComponent"
import { searchValues, dataTable } from "../../components/TableComponent"
import crudCard from "../../components/Dialog/CrudCard"
// Helpers
import { userRedirect} from "../../helpers/API/user/UserHelper"
import { deleteCard, getCards } from "../../helpers/API/card/CardHelper"
import { columnsCard } from "../../helpers/config/card/TableCard"
import filterSearch from "../../helpers/FilterSearch"
// Styles
import { crudButtonStyle } from "../../styles/TableStyle"

export default function ChangeCard(){
    const navigate = useNavigate()
    // States
    const [selectValue, setSelectValue] = useState<string>("")
    const [searchValue, setSearchValue] = useState<string>("")
    const [selectedRow, setSelectedRow] = useState<Record<string,any> | null>(null)
    const [rows, setRows] = useState<Array<Record<string,any>>>([])
    // State for crud
    const [open, setOpen] = useState<boolean>(false)
    // Request state for crud
    const [request, setRequest] = useState<string>("POST")
    // Select values map
    const mapSelectValuesSearch: Record<string,string> = {
        "name": "string",
    }
    // Rows and columns
    // Rows
    useEffect(() =>{
        userRedirect(navigate)
        getCards().then((data:Array<Record<string,any>>) => {
            setRows(filterSearch(
                data,
                mapSelectValuesSearch[selectValue],
                selectValue,
                searchValue))
        })
    },[rows])

    return (
        <div className="home">
            {createHomeHeaderElement()}
            {crudCard(open, setOpen, selectedRow, request)}
            <main className="home-main">
                <div className="admin-configuration">
                    <div className="admin-items">
                        <h1>Configuración de cartas</h1>
                            <Button variant="contained" sx={crudButtonStyle} onClick={
                                () => {
                                    setOpen(true)
                                    setRequest("POST")
                                }
                            }>Crear</Button>
                            {searchValues({
                                selectMap: {
                                    "name": "Nombre",
                                },
                                searchState: {
                                    getter: searchValue,
                                    setter: setSearchValue
                                },
                                selectState: {
                                    getter: selectValue,
                                    setter: setSelectValue
                                }
                            })}
                            {dataTable({
                                rows: rows,
                                columns: columnsCard,
                                setSelectedRowSchema: setSelectedRow
                            })}
                            <div className="table-modify">
                                <Button variant="contained" sx={crudButtonStyle}
                                onClick = {() => {
                                    setRequest("PUT")
                                    setOpen(true)
                                }}
                                >Modificar</Button>
                                <Button variant="contained" sx={crudButtonStyle} onClick={
                                    () => {
                                        if(selectedRow != null){
                                            deleteCard(Number(selectedRow.id))
                                    }}
                                    }>Eliminar</Button>  
                            </div>
                    </div>
                </div>
            </main>
            {createHomeFooter()}
        </div>
    )
}