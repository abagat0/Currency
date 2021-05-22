import React from 'react';
import Rate from "./Rate";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import moment from "moment";

class Rates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {rates: [], timestamp: null};
    }
    componentDidMount() {
        fetch('https://openexchangerates.org/api/latest.json?app_id=4bacfa0dfd17476b89f2fa81e325c0a4')
            .then(response => response.json())
            .then(data => this.setState({rates: data.rates, timestamp:data.timestamp *1000}));
    }

    render() {
        let array = [];
        const keys = Object.keys(this.state.rates)
        keys.map((item, index)=>{
            array.push(
                <Rate key={index} cur={item} item={this.state.rates[item]} />
            );
        })
        return (
            <div><div>Exchange Rates {moment(this.state.timestamp).format('MMMM Do YYYY')}: </div><TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell> Currency</TableCell>
                            <TableCell align="right">Rate</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {array}
                    </TableBody>
                </Table>
            </TableContainer></div>
        );
    }
}
export default Rates