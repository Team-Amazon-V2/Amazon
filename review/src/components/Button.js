import React from 'react'

class Button extends React.Component {
    render() {
        return <h1 className="btn" onClick={this.props.clearSingleUser}>Back</h1>

    }
}

export default Button