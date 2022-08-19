import React from "react";
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Check } from '@mui/icons-material';

import './contactUS.css'
const ContactUS = () => {
    const theme = useTheme()
    return (
        <Box sx={{ width: 1, height: 1 }}>
            <div className="boxContainerContactUS" id="contact_us">
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                    <img style={{ paddingRight: "5px", minWidth: '35rem', maxWidth: '35rem' }} src={'/image/image_low.png'} />
                </div>
                <div className="divCardContainer">
                    <div className="divCard">
                        <Card sx={{ minWidth: 275, minHeight: 65 }} >
                            <CardContent style={{ display: 'flex' }}>
                                <Card style={{ display: "flex", padding: "2px 4px", backgroundColor: "#eff3fc" }}>
                                    <Check style={{ fontSize: "1rem", alignSelf: "center" }} />
                                </Card>
                                <div style={{ color: theme.palette.primary.main }} className="divCardText">
                                    Eos aspernatur rem
                                </div>
                            </CardContent>
                        </Card>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent style={{ display: 'flex' }}>
                                <Card style={{ display: "flex", padding: "2px 4px", backgroundColor: "#eff3fc" }}>
                                    <Check style={{ fontSize: "1rem", alignSelf: "center" }} />
                                </Card>
                                <div style={{ color: theme.palette.primary.main }} className="divCardText">
                                    Volup amet voluptas
                                </div>
                            </CardContent>
                        </Card>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent style={{ display: 'flex' }}>
                                <Card style={{ display: "flex", padding: "2px 4px", backgroundColor: "#eff3fc" }}>
                                    <Check style={{ fontSize: "1rem", alignSelf: "center" }} />
                                </Card>
                                <div style={{ color: theme.palette.primary.main }} className="divCardText">
                                    Alias possimus
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="divCard">
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent style={{ display: 'flex' }}>
                                <Card style={{ display: "flex", padding: "2px 4px", backgroundColor: "#eff3fc" }}>
                                    <Check style={{ fontSize: "1rem", alignSelf: "center" }} />
                                </Card>
                                <div style={{ color: theme.palette.primary.main }} className="divCardText">
                                    Facilis neque ipsa
                                </div>
                            </CardContent>
                        </Card>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent style={{ display: 'flex' }}>
                                <Card style={{ display: "flex", padding: "2px 4px", backgroundColor: "#eff3fc" }}>
                                    <Check style={{ fontSize: "1rem", alignSelf: "center" }} />
                                </Card>
                                <div style={{ color: theme.palette.primary.main }} className="divCardText">
                                    Rerum omnis sint
                                </div>
                            </CardContent>
                        </Card>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent style={{ display: 'flex' }}>
                                <Card style={{ display: "flex", padding: "2px 4px", backgroundColor: "#eff3fc" }}>
                                    <Check style={{ fontSize: "1rem", alignSelf: "center" }} />
                                </Card>
                                <div style={{ color: theme.palette.primary.main }} className="divCardText">
                                    Repellendus mollita
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Box>
    )

}


export default ContactUS
