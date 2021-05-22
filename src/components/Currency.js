import React from 'react';

class Currency extends React.Component {
    render() {
        return (
            <option value={this.props.item}>{this.props.item}</option>
        );
    }
}
export default Currency