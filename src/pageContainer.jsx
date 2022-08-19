
import Home from "./Components/Home"
import ContactUS from "./Components/contactUS"
import ScrollToTop from "react-scroll-to-top";
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

/////////
// ScrollToTop es un componente perteneciente a la librería react-scroll-to-top, el cual proporciona un componente base y altamente customizable.

const PageConteiner = () => {
    const theme = useTheme()
    return (
        <div>
            <Box sx={{ my: 2, width: 1 }}>
                <Home />
                <ContactUS />
                <ScrollToTop
                    smooth
                    style={{ backgroundColor: theme.palette.buttonColor.main, right: "0px", bottom: "10px" }}
                    component={
                        <ArrowUpwardIcon
                            fontSize="small"
                            sx={{ color: theme.palette.textButton.main }}
                        />
                    }
                />
            </Box>
        </div>
    )
}

export default PageConteiner