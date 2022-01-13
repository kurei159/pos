import React from 'react'
import { Box, Grid } from '@mui/material'
import OrderList from "../components/order_menu/orderList"

const order_menu = (props) => {
    return (
        <div className="main">
            <Box sx={{flexGrow: 1}}>
                <Grid container>
                    <Grid item xs={4}>
                        <OrderList order_type={props.order_type} />
                    </Grid>
                    <Grid item xs={8}>
                    hsfdghsrtgsreersg
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default order_menu
