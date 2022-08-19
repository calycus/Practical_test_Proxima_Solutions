import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTheme } from '@mui/material/styles';
import { East } from '@mui/icons-material';

import './Home.css'
const Home = () => {
    const theme = useTheme()
    return (
        <Box sx={{ width: 1 }}>
            <div className="boxContainerHome">
                <div className="divTexContainer">
                    <Typography color='primary' variant="body1" style={{ fontWeight: 600, fontFamily: "system-ui", fontSize: "3rem", lineHeight: 1 }}>
                        Unlock nearshore resources & insurtech capabiliies
                    </Typography>
                    <Typography color='#646467' style={{ paddingTop: "15px", fontFamily: "system-ui", fontSize: "1.5rem" }}>
                        We deliver transformation
                    </Typography>

                    <div style={{ paddingTop: "2rem" }}>
                        <Button variant="contained" color='buttonSecontaryColor' className='textButon' style={{ padding: "8px 25px" }}>
                            <div style={{ color: theme.palette.textButton.main }}>Discover How</div>
                            <East sx={{ paddingLeft: "10px", fontSize: "25px !important", color: theme.palette.textButton.main }} />
                        </Button>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <img style={{ paddingRight: "5px" }} src={'/image/image_top.png'} />
                </div>
            </div>
        </Box>
    )

}


export default Home
