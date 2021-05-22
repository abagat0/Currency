import React from 'react';
import Currency from "./Currency";
import UserExchangeList from "./UserExchangeList";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
class Exchange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {rates: [], value: '', currency: this.props.currency ? this.props.currency: 'Select', calculatedUSD: '0 USD', calculationsList: []};
    }

    componentDidMount() {
        fetch('https://openexchangerates.org/api/latest.json?app_id=4bacfa0dfd17476b89f2fa81e325c0a4')
            .then(response => response.json())
            .then(data => this.setState({rates: data.rates }));
        if(!localStorage.getItem('calculation')){
            localStorage.setItem('calculation', JSON.stringify([]))
        } else {
            const arrayCalc = JSON.parse(localStorage.getItem('calculation'));
            this.setState({calculationsList: arrayCalc});
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const rate = this.state.rates[this.state.currency];
        const calculation = (this.state.value / rate).toFixed(8) + ' USD';
        this.setState({calculatedUSD: calculation});
        let arrayCalc = JSON.parse(localStorage.getItem('calculation'));
        let calc = {timestamp:new Date().getTime(),calculation: calculation, currency: this.state.currency, rate: rate, value: this.state.value}
        arrayCalc.push(calc)
        localStorage.setItem('calculation', JSON.stringify(arrayCalc));
        this.setState({calculationsList: arrayCalc, currency: this.props.currency ? this.props.currency : 'Select'});
    }

    render() {
        let array = [];
        const selectKeys = Object.keys(this.state.rates)
        array.push(
            <option value='Select' key='0' >Select Currency</option>
        );
        selectKeys.map((item, index)=>{
            array.push(
                <Currency item={item} key={index+1}/>
            );
        });
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Value:
                        <TextField type="text" id="value"  value={this.state.value}  onChange={this.handleChange} />
                    </label>
                    <label>
                        Pick currency code:
                        <select id='currency' value={this.state.currency}   onChange={this.handleChange}>
                            {array}
                        </select>
                    </label>
                    <Button type="submit"  variant="contained" color="primary">Exchange</Button>
                </form>
                <div >Calcuated value: {this.state.calculatedUSD}</div><br/>
                <div>User Calulations:</div>
                <UserExchangeList currency={this.state.currency} items={this.state.calculationsList}/>
            </div>
        );
    }
}
export default Exchange