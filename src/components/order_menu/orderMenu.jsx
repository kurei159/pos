import React from 'react'
import { Card, CardActions, Stack, Button } from "@mui/material"
import { styled } from '@mui/styles';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ClearIcon from '@mui/icons-material/Clear';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { Link } from 'react-router-dom';
import "./orderMenu.css"

const CategoryBtn = styled(Button) ({
    float: "right"
})

const orderMenu = () => {
    return (
        <div>
            <Card className="orderList_menu" sx={{ boxShadow: 3 }}>
                <CardActions>
                    <Stack direction="row" spacing={1}>
                    <Button variant="outlined" >
                        <Link to="/" style={{ textDecoration: 'none', color: 'WhiteSmoke' }}>
                            <ArrowBackIosNewIcon/>BACK
                        </Link>
                        </Button>
                        <Button variant="outlined" color="error">
                            <Link to="/" style={{ textDecoration: 'none', color: 'red'}}>
                                <ClearIcon/>CLEAR
                            </Link>
                        </Button>
                        <Button variant="outlined" color="warning">
                            <Link to="/" style={{ textDecoration: 'none', color:'DarkOrange'}}>
                                <DeliveryDiningOutlinedIcon/>DELIVERY
                            </Link>
                        </Button>
                        <Button variant="outlined">
                            <Link to="/" style={{ textDecoration: 'none', color: 'SkyBlue'}}>
                                <ListAltOutlinedIcon/>RECALL
                            </Link>
                        </Button>
                        <Button variant="outlined">
                            <Link to="/" style={{ textDecoration: 'none', color: 'SkyBlue'}}>
                                <EditOutlinedIcon/><br/>OPEN ITEM
                            </Link>
                        </Button>
                        <Button variant="outlined" color="success">
                        <Link to="/" style={{ textDecoration: 'none', color: 'SpringGreen'}}>
                        <SendOutlinedIcon/>SEND
                        </Link></Button>
                    </Stack>
                </CardActions>
                <CardActions>
                </CardActions>
            </Card>
        </div>
    )
}
export default orderMenu