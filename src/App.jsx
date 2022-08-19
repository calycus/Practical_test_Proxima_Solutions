import * as React from 'react';
import PropTypes from 'prop-types';

import { useState } from 'react';
import { KeyboardArrowDown } from '@mui/icons-material/';
import { AppBar, Toolbar, Typography, CssBaseline, useScrollTrigger, Container, Stack, Button } from '@mui/material';

import PageConteiner from './pageContainer';
import './App.css'

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
                        <div style={{ display: "flex", paddingLeft: "1rem" }}>
                            <img style={{ minWidth: '50px', maxWidth: '50px', paddingRight: "5px" }} src={'image/Proxima_Logo.png'} />
                            <Typography color='primary' variant="h4" style={{ fontWeight: 500, fontFamily: "system-ui" }}>
                                PROXIMA
                            </Typography>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: "25px" }}>
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
                                <Button variant="contained" color='buttonColor' style={{ padding: "7px 15px" }} href='#contact_us'>
                                    Contact Us
                                </Button>
                            </Stack>
                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
            <Container>
                <PageConteiner />
            </Container>
        </React.Fragment>
    );
}

export default ElevateAppBar;