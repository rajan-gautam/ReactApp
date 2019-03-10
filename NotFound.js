

import React,{Component} from 'react';
import MainContainer from './MainContainer';
import notFound from './notFound.gif';

class NotFound extends Component{
    render() {
        return (
            
            <MainContainer>
                <h1 className="page-header"> Not Found</h1>
                {/* <span>Page Not Found</span> */}
                <img src={notFound} alt = "Page Not Found" />
            </MainContainer>
        )
           
            
    }
} 

export default NotFound;

