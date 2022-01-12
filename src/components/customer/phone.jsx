import React from 'react'
import "./phone.css"
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const phone = ({nextStep, handler, values}) => {
    return (
        <React.Fragment>
            <div className='main'>
                <InputForm />
            </div>
        </React.Fragment>
    )
}

export default phone;

// Autofocus

function InputForm() {
      return <Card>
        <CardContent></CardContent>
      </Card>

};