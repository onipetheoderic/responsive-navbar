import React from 'react'
import './Toolbar.css';//this automatically injects the css code into our running application

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'


//we will get some props and then return some jsx
// we will wrap it with normal parenthesis because we wanna return one statement, which would actually be multiline jsx code
const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle--button"><DrawerToggleButton click={props.drawerClickHandler} /></div>
            <div className="toolbar__logo"><a href="/">The Logo</a></div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>

                </ul>
            </div>
        </nav>
    </header>

)

export default toolbar;