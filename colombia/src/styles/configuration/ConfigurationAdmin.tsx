// TextField
export const textFieldThemeAdminSearch= {
    "& .MuiInputLabel-root": { color: 'white', fontSize: 'large' }, // Target label class
    "& .MuiInputBase-input": { color: 'white', fontSize: 'large'},  // Target input class
    "& .MuiOutlinedInput-root": { // Target outlined input root
        "& fieldset": { // Target fieldset element within outlined input
            borderColor: 'black',
            borderWidth: 1, // Add border width (optional)
        },
    },
    width: "50%",
    backgroundColor: "#369DD7",
}
// IconButton
export const iconButtonThemeAdminSearch = {
    color: "white"
}
// Table
export const tableContainerThemeAdmin = {
    "& .MuiTableCell-root": { 
        color: 'white', 
    },
    margin: "2.5% 0 2.5% 0",
    backgroundColor: "#369DD7",
    overflowY: "scroll",
    maxHeight: "45vh",

}
// Button edition
export const buttonEditionTheme = {
    backgroundColor: "#61C1F67",
    color: "white",
    "&:hover": {
        backgroundColor: "#61C1F6",
    },
    textTransform: "none"
}
// Cell edition
export const cellEditionTheme = {
    display:"flex",
    gap:"5%"
}
// Search textfield
export const AdminSearchTheme = {
    "& .MuiInputLabel-root": { color: 'white'}, 
    "& .MuiInputBase-input": { color: 'white'},  
}