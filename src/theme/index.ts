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
        mobileStepper: 1,
        speedDial: 1,
        appBar: 1,
        drawer: 1,
        modal: 1,
        snackbar: 1,
        tooltip: 1
    }
});

export default THEME