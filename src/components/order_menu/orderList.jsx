import React from 'react'
import {Card, CardContent, ButtonGroup, Button, Box, IconButton} from "@mui/material"
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
import "./orderList.css"

function createData(id, quantity, item, price) {
    return {id, quantity, item, price};
}

const rows = [
    createData(1, 2, "TEST_ITEM 1", 2.99),
    createData(2, 1, "TEST_ITEM 2", 7.99),
    createData(3, 1, "TEST_ITEM 3", 6.25),
    createData(4, 4, "TEST_ITEM 4", 6.25),
    createData(5, 2, "TEST_ITEM 5", 12.25)
]

function getTotal() {
    var total = 0;

    for (var i = 0; i < rows.length; i ++) {
        total += rows[i].price*rows[i].quantity;
    }
    return total.toFixed(2);
}



const orderList = (props) => {
    return (
        <div >
            <Card className="orderList_main" sx={{ boxShadow: 3 }}>
                <CardContent>
                    <h5>{props.order_type}</h5>
                    <Divider />
                    Ticket Number Here
                </CardContent>
                <Divider />
                <Paper className="orderList_table">
                    <TableContainer sx={{maxheight: 240}} component={Paper}>
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
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
                </Paper>
                <Box 
                display="flex" 
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                >
                <ButtonGroup size="large">
                    <IconButton><AddIcon className="orderList_btn" fontSize="inherit" /></IconButton>
                    <IconButton><ClearIcon className="orderList_btn" fontSize="inherit" /></IconButton>
                    <IconButton><RemoveIcon  className="orderList_btn" fontSize="inherit" /></IconButton>
                    </ButtonGroup>
                    </Box>
                <Divider />
                <Box className="orderList_total">
                    Total: {getTotal()}
                </Box>
            </Card>
        </div>
    )
}


orderList.defaultProps = {
    order_type: "Pick Up"
}

export default orderList
