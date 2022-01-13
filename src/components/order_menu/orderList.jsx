import React from 'react';
import {Card, CardContent, ButtonGroup, Button, Box, IconButton} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/styles';
import "./orderList.css";

// ------------------Test Functions------------
function createData(id, quantity, item, price) {
    return {id, quantity, item, price};
}

const rows = [
    createData(1, 2, "TEST_ITEM 1", 2.99),
    createData(2, 1, "TEST_ITEM 2", 7.99),
    createData(3, 1, "TEST_ITEM 3", 6.25),
    createData(4, 4, "TEST_ITEM 4", 6.25),
    createData(5, 2, "TEST_ITEM 5", 12.25),
    createData(6, 2, "TEST_ITEM 1", 2.99),
    createData(7, 1, "TEST_ITEM 2", 7.99),
    createData(8, 1, "TEST_ITEM 3", 6.25),
    createData(9, 4, "TEST_ITEM 4", 6.25),
]


// ----------------Calc Functions ---------------
function getTax() {
    var tax = 0;

    for (var i = 0; i < rows.length; i ++) {
        tax += rows[i].price*rows[i].quantity;
    }
    tax = tax*(0.0825);

    return tax;
}

function getSubtotal() {
    var subtotal = 0;

    for (var i = 0; i < rows.length; i ++) {
        subtotal += rows[i].price*rows[i].quantity;
    }
    return subtotal;
}

function getTotal() {
    let s = getSubtotal();
    let t = getTax();
    
    return (s+t);
}

//--------------List Control--------------------
var Selected = {
    selected: false,
    item: []
}

function SelectHandler(o) {
    Selected.selected = true;
    Selected.item = o;
    console.log("selected Item!");
    console.log(o);
}


// ----------------Styles----------------
const SubtotalDisplay = styled(Box)({
    display: 'flex',
    paddingRight: 4,
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    fontSize: 'large',
})

const TaxDisplay = styled(Box)({
    display: 'flex',
    paddingRight: 4,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    fontSize: 'large',
})

const TotalDisplay = styled(Box)({
    display: 'flex',
    paddingRight: 4,
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    fontSize: 'x-large',
});

const OrderTable = styled(Paper)({
    display: 'flex',
    height: '60%',
    overflowY: "scroll"
    
})

  const orderList = (props) => {
    return (
        <div>
            <Card className="orderList_main" sx={{ boxShadow: 3 }}>
                <CardContent>
                    {props.order_type}
                    <Divider />
                    <div>Ticket Number Here</div>
                    
                </CardContent>
                <Divider />
                <OrderTable>
                    <TableContainer component={Paper}>
                        <Table stickyHeader size='small' aria-label="Order Table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Count</TableCell>
                                    <TableCell>Item</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                className="orderList_row"
                                hover={true}
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                onClick = {()=> SelectHandler(row)}
                                >
                                  <TableCell align="left">{row.quantity}</TableCell>
                                  <TableCell component="th" scope="row">
                                  {row.item}
                                </TableCell>
                                  <TableCell align="right">{(row.price * row.quantity).toFixed(2)}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </OrderTable>
                <Box 
                display="flex" 
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                >
                    <ButtonGroup style={{display: "flex"}}>
                        <IconButton color="info" size="large"><AddIcon style={{transform: "scale(1.5)"}} /></IconButton>
                        <IconButton color="error" size="large"><ClearIcon style={{transform: "scale(1.5)"}} /></IconButton>
                        <IconButton size="large"><RemoveIcon style={{transform: "scale(1.5)"}} /></IconButton>
                        <IconButton color="secondary" size="large"><EditIcon style={{transform: "scale(1.2)"}} /></IconButton>
                    </ButtonGroup>
                    </Box>
                <Divider />
                <SubtotalDisplay>
                Subtotal: {getSubtotal().toFixed(2)}
                </SubtotalDisplay>
                <TaxDisplay>
                Tax: {getTax().toFixed(2)}
                </TaxDisplay>
                <Divider variant="inset"/>
                <TotalDisplay>
                Total: {getTotal().toFixed(2)}
                </TotalDisplay>
            </Card>
        </div>
    )
}


orderList.defaultProps = {
    order_type: "Pick Up"
}

export default orderList