import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useTheme } from '@mui/material/styles';

import './Home.css'
const Home = () => {
    const theme = useTheme()
    return (
        <Box sx={{ width: 1 }}> 
            <div className="boxContainerHome">
                <div>
                    <Typography>
                        Unlock nearshore resources & insurtech capabiliies
                    </Typography>
                    <Typography>
                        We insurtech capabilities
                    </Typography>
                    
                    <Button variant="contained" color='buttonSecontaryColor'><div style={{color: theme.palette.textButton.main}}>Discover How</div></Button>
                </div>
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                    <img style={{ paddingRight: "5px" }} src={'/image/image_top.png'} />
                </div>
            </div>
        </Box>
    )

}


export default Home
