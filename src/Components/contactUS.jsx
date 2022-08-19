import React from "react";
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Check } from '@mui/icons-material';

import './contactUS.css'

let textCard = [
    "Eos aspernatur rem",
    "Volup amet voluptas",
    "Alias possimus",
    "Facilis neque ipsa",
    "Rerum omnis sint",
    "Repellendus mollita",
]

const setCssPorfile = (data, index) => {
    const style = document.documentElement.style
    {
        (data % 2 > 0 && index == data - 1)
            ? style.setProperty('--gridColumn', 'span 2')
            : style.setProperty('--gridColumn', 'span 1')
    }
}

const ContactUS = () => {
    const theme = useTheme()

    return (
        <Box sx={{ width: 1, height: 1 }}>
            <div className="boxContainerContactUS" id="contact_us">
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                    <img style={{ paddingRight: "5px", minWidth: '35rem', maxWidth: '35rem' }} src={'/image/image_low.png'} />
                </div>
                <div className="divCardContainer">
                    {textCard.map((text, index) => {
                        setCssPorfile(textCard.length, index);
                        return (
                            <Card
                                key={index}
                                sx={{ minWidth: 275, minHeight: 65}}
                                style={{
                                    display: 'flex',
                                    minWidth: "260px",
                                    'gridColumn':
                                        textCard.length % 2 > 0 &&
                                            index == textCard.length - 1
                                            ? 'span 2'
                                            : 'span 1',
                                }}>
                                <CardContent style={{ display: 'flex', padding: "20px" }}>
                                    <Card style={{ display: "flex", padding: "2px 4px", backgroundColor: "#eff3fc" }}>
                                        <Check style={{ fontSize: "1rem", alignSelf: "center" }} />
                                    </Card>
                                    <div style={{ color: theme.palette.primary.main }} className="divCardText">
                                        {text}
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </Box>
    )

}


export default ContactUS
