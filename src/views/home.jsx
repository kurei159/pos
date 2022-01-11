import { Button, Grid } from '@mui/material'
import Stack from '@mui/material/Stack';
import React from 'react'
import "./styles/home.css"
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { Link } from 'react-router-dom';

export default function home() {
    return (
        <div>
            <div className="main_menu">
                <Grid container
                direction="row"
                alignItems="center"
                justifyContent="center"
                >
                <Stack direction="row" spacing={1}>
                    <Link to="/customer">
                        <Button variant="contained" fontSize="inherit" className="main_btn" ><h3>Delivery <br/> <DeliveryDiningIcon /></h3></Button>
                    </Link>
                        <Button variant="contained" fontSize="inherit" className="main_btn"><h3>PickUp <br/> <ShoppingBagIcon /></h3></Button>
                        <Button variant="contained" fontSize="inherit" className="main_btn"><h3>Dine-In <br/> <LocalDiningIcon /></h3></Button>
                </Stack>
                </Grid>
            </div>
            <div className="side_menu">
                <Stack direction="row" spacing={1}>
                    <Button variant="contained" className="side_btn"><h3>Orders <br /> <MenuBookIcon /></h3></Button>
                    <Button variant="contained" className="side_btn"><h3>Analytics <br /> <AnalyticsIcon /></h3></Button>
                    <Button variant="contained" className="side_btn"><h3>Settings <br /> <SettingsIcon /></h3></Button>
                </Stack>
            </div>
        </div>
    )
}
