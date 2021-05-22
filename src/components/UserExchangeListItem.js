import React from 'react';
import moment from 'moment';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Button from '@material-ui/core/Button';
class UserExchangeListItem extends React.Component {
    handleDelete = (e) => {
        this.props.onHandleDelete(e)
    }
    render() {
        return (
            <TableRow key={this.props.item.timestamp}>
                <TableCell component="th" scope="row">
                    {moment(this.props.item.timestamp).format('MMMM Do YYYY')}
                </TableCell>
                <TableCell align="right">{this.props.item.currency}</TableCell>
                <TableCell align="right">{this.props.item.rate}</TableCell>
                <TableCell align="right">{this.props.item.value}</TableCell>
                <TableCell align="right">{this.props.item.calculation}</TableCell>
                <TableCell align="right"><Button onClick={(e)=>this.handleDelete(e)}>Delete</Button></TableCell>
            </TableRow>

        );
    }
}
export default UserExchangeListItem