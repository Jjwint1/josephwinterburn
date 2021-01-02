import React from 'react'

export default class DefaultLayout extends React.Component {
    render() {
        return (
            <>
                {this.props.children}
            </>
        )
    }
}