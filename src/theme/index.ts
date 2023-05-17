import { createTheme } from "@mui/material/styles";

const THEME = createTheme({
    typography: {
        "fontFamily": `"Open Sans", sans-serif`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    },
    zIndex: {
        mobileStepper: 2,
        speedDial: 2,
        appBar: 3,
        drawer: 4,
        modal: 5,
        snackbar: 6,
        tooltip: 7
    }
});

export default THEME