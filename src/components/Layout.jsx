import React, { Component } from 'react';

class Layout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="wrapper">
            test Layout
                {/* <TopNav />
                <SideNav /> */}
                {
                    this.props.children
                }
            </div>
        )
    }
}

export default Layout;