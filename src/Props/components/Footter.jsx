import React, { Component } from 'react';

class Footter extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>{this.props.iniFooter}</h3>
                {this.props.paragraf()}
            </div>
        );
    }
}

export default Footter;
