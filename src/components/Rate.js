import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
class Rate extends React.Component {
    render() {
        return (
        <TableRow key={this.props.cur}>
            <TableCell component="th" scope="row">
                {this.props.cur}
            </TableCell>
            <TableCell align="right"> {this.props.item}</TableCell>

        </TableRow>
        );
    }
}
export default Rate