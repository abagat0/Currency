import React from 'react';
import UserExchangeListItem from "./UserExchangeListItem";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
class Rates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {calculations: this.props.items};
    }
    componentDidMount() {
      this.setState({calculations: this.props.items})
    }

    handleDelete = (e,timestamp)=>{
        let keys = this.props.items;
        keys.map((item, index) => {
            if(item.timestamp == timestamp){
                keys.splice(index, 1)
            }
        })
        localStorage.setItem('calculation', JSON.stringify(keys))
        this.setState({calculations: JSON.parse(localStorage.getItem('calculation'))})
    }
    render() {
        let array = [];
        const keys =this.props.items;
        const reversed = keys ? keys.reverse() : [];
        if(reversed) {
            reversed.map((item, index) => {
                if(this.props.currency && item.currency == this.props.currency || this.props.currency=='Select') {
                    array.push(
                        <UserExchangeListItem key={index} item={item} onHandleDelete={(e)=>this.handleDelete(e, item.timestamp)}/>
                    );
                }
            });
        }
        return (
            <div>
                <TableContainer component={Paper}>
                    <Table  aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Time</TableCell>
                                <TableCell> Currency</TableCell>
                                <TableCell align="right">Rate</TableCell>
                                <TableCell align="right">Value</TableCell>
                                <TableCell align="right">Calculation</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {array}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}
export default Rates