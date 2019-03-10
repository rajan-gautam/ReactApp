import React, {Component} from 'react'

import NavBar from './NavBar';

import SideBar from './SideBar';



class MainContainer extends Component{
    render(){
        return(                                  
            <div>
                <NavBar />
                <div className="container-fluid">
                    <div className="row">
                        <SideBar highlight = {this.props.sidebar}/> 
                        <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                    {/* be sure to add a reference to the "children" here */}
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default MainContainer;