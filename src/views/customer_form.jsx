import React, { Component } from 'react'
import { Button, Grid } from '@mui/material'
import PhoneForm from "../components/customer/phone"
import AddrForm from "../components/customer/addr_form"
import "./styles/customer_info.css"

export class CustomerForm extends Component {
    state = {
        step: 0,
        phoneNum: null,
        fname: "",
        lname: "",
        addr: "",
        zip_code: null,
        note: ""
    }

    nextStep() {
        const { step } = this.state;
        if (this.state.step + 1 < 2){
            this.setState({
                step: step + 1
            });
        }
    };

    prevStep() {
        const { step } = this.state;
        if (this.state.step - 1 >= 0) {
            this.setState({
                step: step - 1
            });
        }
    };

    handler(e) {
        this.setState({[e.target.name]: e.target.value});
    };
    
    render() {
        const { step } = this.state;
        const { phoneNum, name, addr, zip_code, note } = this.state
        const values = { phoneNum, name, addr, zip_code, note };

        switch (step) {
            case 0:
                return (
                  <PhoneForm 
                  nextStep={this.nextStep}
                  handler={this.handler}
                  values={values}
                  />
                )
            case 1:
                return (
                    <AddrForm
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    handler={this.handler}
                    values={values}
                    />
                )
            default:
                throw new Error("Unknown Step");
        }
    }
}

export default CustomerForm;