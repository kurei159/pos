import React from 'react'
import { Box, Grid } from '@mui/material'
import OrderList from "../components/order_menu/orderList"
import OrderMenu from "../components/order_menu/orderMenu"
import { Link } from 'react-router-dom';

const order_menu = (props) => {
    return (
        <div className="order_main">
            <Box sx={{flexGrow: 1}}>
                <Grid container>
                    <Grid item xs={4}>
                        <OrderList order_type={props.order_type} />
                    </Grid>
                    <Grid item xs={8}>
                        <OrderMenu />
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default order_menu
