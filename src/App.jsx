import * as React from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

import { useState } from 'react';
import { KeyboardArrowDown } from '@mui/icons-material/';
import { AppBar, Toolbar, Typography, useScrollTrigger, Container, Stack, Button } from '@mui/material';

import PageConteiner from './pageContainer';
import './App.css'
import API from './API/apiRES';

const ElevateAppBar = (props) => {
    /////////
    //Función encargada de mantener el App Bar de forma sticky-header 
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

    /////////
    //Función encargada de realizar el consumo de la API por parte del usuario y el envío de los datos solicitados
    const handleContact = async () => {
        let ip_address = await getIpClient()
        let time = generateDate()
        let name = "Jhon David Macias Saldarreaga"
        let api = API()
        setTimeout(() => {
            try {
                axios({
                    method: 'POST',
                    url: api.url,
                    headers: api.headers,
                    responseType: 'json',
                    data: {
                        name: name,
                        local_time: time,
                        ip_address: ip_address.ip
                    }
                })

                console.log("post echo");
            } catch (error) {
                console.log(error)
            }
        }, 1000);
    }

    return (
        <React.Fragment>
            <ElevationScroll {...props}>
                <AppBar className='appBar'>
                    <Toolbar className='Toolbar'>
                        <div style={{ display: "flex", paddingLeft: "1rem" }}>
                            <img style={{ minWidth: '50px', maxWidth: '50px', paddingRight: "5px" }} src={'image/Proxima_Logo.png'} />
                            <Typography color='primary' variant="h4" style={{ fontWeight: 600, fontFamily: "system-ui" }}>
                                PROXIMA
                            </Typography>
                        </div>
                        <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: "25px" }}>
                            <Stack spacing={2} direction="row">
                                <Button variant="text">
                                    <Typography color='primary' className='textButon'>
                                        About Us
                                    </Typography>
                                </Button>
                                <Button variant="text">
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <Typography color='primary' className='textButon'>
                                            Nearshoring
                                        </Typography>
                                        <div style={{ display: "flex", alignSelf: "flex-start" }}>
                                            <KeyboardArrowDown sx={{ fontSize: "22px !important", color: "rgba(34, 119, 213, 0.5)" }} />
                                        </div>
                                    </div>
                                </Button>
                                <Button variant="text">
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <Typography color='primary' className='textButon'>
                                            Insurtech
                                        </Typography>

                                        <div style={{ display: "flex", alignSelf: "flex-start" }}>
                                            <KeyboardArrowDown sx={{ fontSize: "22px !important", color: "rgba(34, 119, 213, 0.5)" }} />
                                        </div>
                                    </div>
                                </Button>
                                <Button variant="text">
                                    <Typography color='primary' className='textButon'>
                                        Careers
                                    </Typography>
                                </Button>
                                <Button
                                    variant="contained"
                                    color='buttonColor'
                                    className='textButon'
                                    style={{ padding: "7px 15px" }}
                                    href='#contact_us'
                                    onClick={handleContact}
                                >
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


/////////
//Función encargada de obtener la dirección IP del cliente desde el cual se realizar el envió de los datos hacia el servidor 
const getIpClient = async () => {
    let ip;
    try {
        const res = await axios.get('https://api.ipify.org?format=json');
        ip = res.data
    } catch (error) {
        alert("Eror!! Request blocked by AdBlock....")
        ip = {
            ip: "Eror!! Request blocked by AdBlock...."
        }
    }

    return ip
}

/////////
//Función encargada de obtener la fecha y hora actual de la región en la que se encuentra el usuario 
const generateDate = () => {
    // Creamos array con los meses del año
    const meses = [
        'enero', 'febrero',
        'marzo', 'abril',
        'mayo', 'junio',
        'julio', 'agosto',
        'septiembre', 'octubre',
        'noviembre', 'diciembre'];
    // Creamos array con los días de la semana
    const dias_semana = ['Domingo', 'Lunes',
        'martes', 'Miércoles',
        'Jueves', 'Viernes',
        'Sábado'];
    // Creamos el objeto fecha instanciándolo con la clase Date
    const fecha = new Date();
    // Construimos el formato de salida
    return (dias_semana[fecha.getDay()] + ', ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' del ' + fecha.getUTCFullYear() + '  ' + fecha.toLocaleTimeString());
}