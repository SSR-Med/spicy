// TextField
export const textFieldThemeLogin = {
    "& .MuiInputLabel-root": { color: 'white', fontSize: 'x-large' }, // Target label class
    "& .MuiInputBase-input": { color: 'white', fontSize: 'x-large'},  // Target input class
    "& .MuiOutlinedInput-root": { // Target outlined input root
        "& fieldset": { // Target fieldset element within outlined input
            borderColor: 'black',
            borderWidth: 1, // Add border width (optional)
        },
    },
    width: "95%",
    backgroundColor: "#61C1F6",
    margin: "2.5%"
}
// Button
export const buttonThemeLogin = {
    backgroundColor: "#61C1F6",
    color: "white",
    fontSize: "x-large",
    width: "50%",
    margin: "2.5% 25% 2.5% 25%",
    border: '1px solid black',
    '&:hover': { // Target hover state
        backgroundColor: '#61C1F6', 
    },
    textTransform: "none"
}
export const buttonThemeRegister = {
    backgroundColor: "#369DD7",
    color: "white",
    fontSize: "medium",
    width: "50%",
    margin: "0% 25% 0 25%",
    border: '1px solid black',
    '&:hover': { // Target hover state
        backgroundColor: '#369DD7', 
    },
    textTransform: "none"

}