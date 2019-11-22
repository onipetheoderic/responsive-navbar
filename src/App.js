import React from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
//since backdrop is another seperate component we import backdrop here
import Backdrop from './components/BackDrop/Backdrop'
class App extends React.Component{
  state = {
    sideDrawerOpen: false
  };
  
  drawerToggleClickHandler = () => {
    //since we need to access the previous state we do it like this
    //here we will recieve the previous state as an argument
    this.setState((prevState)=>{
      //you now return an object which updates the state
      return {sideDrawerOpen:!prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen:false})
  }
  //we want the SideDrawer component's height to fill d entire page
      //lets start by reacting to the click within the Toolbar component
 //we now pass the function as props to the toolbar compoenent
      render(){
    //let sideDrawer;
    let backDrop;
    if(this.state.sideDrawerOpen){
     // sideDrawer = <SideDrawer />
      backDrop =  <Backdrop click = {this.backdropClickHandler}/>
    }
    return (
          
      <div style={{height:'100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
       <SideDrawer show={this.state.sideDrawerOpen}/>
       {backDrop}
        <main style={{marginTop: '64px'}}>
        <p>This is the Page content</p>
        </main>
      </div>
      );
  }
  
}

export default App;
// the logic is that the hambuger button should open the sidebar, and clicking on the backdrop should close it