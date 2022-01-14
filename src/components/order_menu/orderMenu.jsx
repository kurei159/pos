import React, { Component }from 'react'
import { Card, CardActions, Stack, Button, ButtonGroup } from "@mui/material"
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
import menuFile from "../../menu_json/menu.json"

const CategoryBtn = styled(Button) ({
    float: "right"
})

function clickedCat(props) {
    console.log("Clicked " + props);

}

class orderMenu extends Component {
    render() {
        return (<div>
            <Card className="orderList_menu" sx={{ boxShadow: 3 }}>
                <Stack direction="column">
                <Toolbar disableGutters>
                    <CardActions>
                        <Stack direction="row" spacing={1}>
                        <Button variant="outlined" >
                            <Link to="/" style={{ textDecoration: 'none', color: 'WhiteSmoke' }}>
                                <ArrowBackIosNewIcon/><br/>BACK
                            </Link>
                            </Button>
                            <Button variant="outlined" color="error">
                                <Link to="/" style={{ textDecoration: 'none', color: 'red'}}>
                                    <ClearIcon/><br/>CLEAR
                                </Link>
                            </Button>
                            <Button variant="outlined" color="warning">
                                <Link to="/" style={{ textDecoration: 'none', color:'DarkOrange'}}>
                                    <DeliveryDiningOutlinedIcon/><br/>DELIVERY
                                </Link>
                            </Button>
                            <Button variant="outlined">
                                <Link to="/" style={{ textDecoration: 'none', color: 'SkyBlue'}}>
                                    <ListAltOutlinedIcon/><br/>RECALL
                                </Link>
                            </Button>
                            <Button variant="outlined">
                                <Link to="/" style={{ textDecoration: 'none', color: 'SkyBlue'}}>
                                    <EditOutlinedIcon/><br/>OPEN ITEM
                                </Link>
                            </Button>
                            <Button variant="outlined" color="success">
                            <Link to="/" style={{ textDecoration: 'none', color: 'SpringGreen'}}>
                            <SendOutlinedIcon/><br/>SEND
                            </Link></Button>
                        </Stack>
                    </CardActions>
                </Toolbar>
                <Divider style={{marginTop: "2%", marginBottom: "2%"}} />
                <Toolbar>
                    <CardActions>
                    {
                        menuFile.map((props) => {
                            return (
                                <Button key={props.cat_id} onClick={() => clickedCat(props.cat_id)}>{props.name}</Button>
                            )})
                    }
                    </CardActions>
                </Toolbar>
                </Stack>
            </Card>
        </div>)
    }
}
export default orderMenu