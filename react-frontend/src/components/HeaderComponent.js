import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-danger">
                    <div><a href="https://javaguides.net" className="navbar-brand">User Credit Limit Check App</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
