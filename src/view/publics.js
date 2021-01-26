import React, { Component } from 'react'

export default class publics extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>
                    Content--{this.props.match.params.type}----{this.props.match.params.page}
                </h1>
            </div>
        )
    }
}
