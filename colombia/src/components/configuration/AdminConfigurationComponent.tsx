// Dependencies
import { Button,TextField, InputAdornment, IconButton,TableHead, TableCell, TableRow} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Swal from 'sweetalert2';
import React from 'react';
// Themes
import { textFieldThemeAdminSearch, iconButtonThemeAdminSearch, cellEditionTheme, AdminSearchTheme } from '../../styles/configuration/ConfigurationAdmin';

export function AdminSearch(label:string){
    return(
    <TextField label={label} variant="outlined" sx={textFieldThemeAdminSearch} InputProps={
        {
            endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" sx = {iconButtonThemeAdminSearch}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
        }
    }
    />)
}

// Alert
async function handleDeleteAdmin() {
  const result = await Swal.fire({
    title: '¿Está seguro de borrar el item?',
    text: "Perderá el item y no podrá recuperarlo",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#D73636',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Sí, borrar item',
    cancelButtonText: 'Cancelar'
  });
}

// Button Edit
export function ButtonEdit(id:number,editedRowIndex:number|null, setEditedRowIndex: React.Dispatch<React.SetStateAction<any>>) {
  if (editedRowIndex === id){
    return(
      <TableCell sx={cellEditionTheme}>
        <Button variant="contained" onClick={() => setEditedRowIndex(null)}>Cancelar</Button>
        <Button variant="contained" onClick={() => setEditedRowIndex(null)}>Confirmar</Button>
      </TableCell>
    )
  } else{
    return(
      <TableCell sx={cellEditionTheme}>
        <Button variant="contained" onClick={() => setEditedRowIndex(id)}>Editar</Button>
        <Button variant="contained" onClick={handleDeleteAdmin}>Borrar</Button>
    </TableCell>
    )
  }
}
// Cells
export function createCells(id:number,editedRowIndex:number|null,row:Array<number|string>){
  return (
    <>
      {row.map((element, index) => {
        return(
          <TableCell key={index}>
            {editedRowIndex === id ? (
            <TextField sx = {AdminSearchTheme}
              type={typeof element === 'number' ? 'number' : 'text'} 
              defaultValue={element}
            />
          ) : (
            <span>{element}</span>
          )}
          </TableCell>
        )
      })}
    </>
  
  )
}
// Header table return
export function createHeaderTable(header:string[]){
  return(
    <TableHead>
      <TableRow>
        {header.map((element) => {
          return(
            <TableCell>{element}</TableCell>
          )
        })}
      </TableRow>
    </TableHead>
  )
}