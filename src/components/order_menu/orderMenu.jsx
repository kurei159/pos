import React, { Component }from 'react'
import { Card, CardActions, Stack, Button, ButtonGroup, Grid } from "@mui/material"
import { styled } from '@mui/styles';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ClearIcon from '@mui/icons-material/Clear';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { Link } from 'react-router-dom';
import "./orderMenu.css"


class orderMenu extends Component {
    render() {
        return (<div>
            <Card className="orderList_menu" sx={{ boxShadow: 3 }}>
                <Stack direction="column">
                <Toolbar>
                        <Grid container direction="row" spacing={1} justifyContent="flex-start" alignItems="center">
                            <Grid item>
                                <Button variant="outlined" >
                                <Link to="/" style={{ textDecoration: 'none', color: 'WhiteSmoke' }}>
                                    <ArrowBackIosNewIcon/><br/>BACK
                                </Link>
                                </Button>
                            </Grid>
                            <Grid item>
                            <Button variant="outlined" color="error">
                                <Link to="/" style={{ textDecoration: 'none', color: 'red'}}>
                                    <ClearIcon/><br/>CLEAR
                                </Link>
                            </Button>
                            </Grid>
                            <Grid item>
                            <Button variant="outlined" color="warning">
                                <Link to="/" style={{ textDecoration: 'none', color:'DarkOrange'}}>
                                    <DeliveryDiningOutlinedIcon/><br/>DELIVERY
                                </Link>
                            </Button>
                            </Grid>
                            <Grid item>
                            <Button variant="outlined">
                                <Link to="/" style={{ textDecoration: 'none', color: 'SkyBlue'}}>
                                    <ListAltOutlinedIcon/><br/>RECALL
                                </Link>
                            </Button>
                            </Grid>
                            <Grid item>
                            <Button variant="outlined">
                                <Link to="/" style={{ textDecoration: 'none', color: 'SkyBlue'}}>
                                    <EditOutlinedIcon/><br/>OPEN ITEM
                                </Link>
                            </Button>
                            </Grid>
                            <Grid item xs={2}>
                            <Button variant="outlined" color="success" style={{minWidth: '130px'}}>
                            <Link to="/" style={{ textDecoration: 'none', color: 'SpringGreen'}}>
                            <SendOutlinedIcon/><br/>SEND
                            </Link></Button>
                            </Grid>
                        </Grid>
                </Toolbar>
                <Divider style={{marginTop: "2%", marginBottom: "2%"}} />
                </Stack>
            </Card>
        </div>)
    }
}
export default orderMenu