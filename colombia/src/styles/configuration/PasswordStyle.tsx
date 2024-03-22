// TextField
export const textFieldThemePassword = {
    "& .MuiInputLabel-root": { color: 'white', fontSize: 'large' }, // Target label class
    "& .MuiInputBase-input": { color: 'white', fontSize: 'large'},  // Target input class
    "& .MuiOutlinedInput-root": { // Target outlined input root
        "& fieldset": { // Target fieldset element within outlined input
            borderColor: 'black',
            borderWidth: 1, // Add border width (optional)
        },
    },
    width: "95%",
    backgroundColor: "#369DD7",
    margin: "2.5%"
}
// Button
export const buttonThemePassword = {
    backgroundColor: "#369DD7",
    color: "white",
    fontSize: "x-large",
    width: "45%",
    border: '1px solid black',
    '&:hover': { // Target hover state
        backgroundColor: '#369DD7', 
    },
    textTransform: "none"
}
