import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material/';

import SwitchAppBar from './router/Switch';
import './css/app.css'

const ElevateAppBar = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);



    function ElevationScroll(props) {
        const { children, window } = props;

        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 0,
            target: window ? window() : undefined,
        });

        return React.cloneElement(children, {
            elevation: trigger ? 4 : 0,
        });
    }

    ElevationScroll.propTypes = {
        children: PropTypes.element.isRequired,
        window: PropTypes.func,
    };

    function handleClickOpenMenuButton(event) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }

    function handleCloseOpenMenuButton() {
        setAnchorEl(null);
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar className='appBar'>
                    <Toolbar className='Toolbar'>
                        <div style={{ display: "flex", paddingLeft: "2rem" }}>
                            <img style={{ minWidth: '50px', maxWidth: '50px', paddingRight: "5px" }} src={'image/Proxima_Logo.png'} />
                            <Typography color='primary' variant="h4" style={{ fontWeight: 500, fontFamily: "system-ui" }}>
                                PROXIMA
                            </Typography>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end", paddingRight:"25px" }}>
                            <Stack spacing={2} direction="row">
                                <Button variant="text">
                                    <Typography color='primary' style={{ fontWeight: 700, fontFamily: "system-ui", fontSize: "0.875rem" }}>
                                        About Us
                                    </Typography>
                                </Button>

                                <Button variant="text">
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <Typography color='primary' style={{ fontWeight: 700, fontFamily: "system-ui", fontSize: "0.875rem" }}>
                                            Nearshoring
                                        </Typography>
                                        <div style={{ display: "flex", alignSelf: "flex-start" }}>
                                            <KeyboardArrowDown sx={{ fontSize: "22px !important", color: "rgba(34, 119, 213, 0.5)" }} />
                                        </div>
                                    </div>
                                </Button>
                                <Button variant="text">
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <Typography color='primary' style={{ fontWeight: 700, fontFamily: "system-ui", fontSize: "0.875rem" }}>
                                            Insurtech
                                        </Typography>

                                        <div style={{ display: "flex", alignSelf: "flex-start" }}>
                                            <KeyboardArrowDown sx={{ fontSize: "22px !important", color: "rgba(34, 119, 213, 0.5)" }} />
                                        </div>
                                    </div>
                                </Button>
                                <Button variant="text">
                                    <Typography color='primary' style={{ fontWeight: 700, fontFamily: "system-ui", fontSize: "0.875rem" }}>
                                        Careers
                                    </Typography>
                                </Button>
                                <Button variant="contained" color='buttonColor' style={{padding: "9px 15px"}}>
                                    Contact Us
                                </Button>
                            </Stack>
                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
            <Container>
                <Box sx={{ my: 2, width: 1 }}>
                    <SwitchAppBar />
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default ElevateAppBar;