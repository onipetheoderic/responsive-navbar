import React from 'react';
import './SideDrawer.css';


// the side drawer will contain the same items with the Toolbar
const SideDrawer = props => {
//since we would want to do some calculations
let drawerClass = 'side-drawer';
if(props.show){
    drawerClass='side-drawer open'
}
return (
    <nav className={drawerClass}>
        <ul>
            <li><a href="/">Products</a></li>
            <li><a href="/">Users</a></li>
        </ul>
    </nav>
)

}
export default SideDrawer;
//the sidebar is independent of the toolbar, so we add it alongside app.js