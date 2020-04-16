import React from 'react';
import Navbar from '../Navbar';

const Layout = ({children})=>{

    return (<div>
           <header><Navbar /></header>  
            <main>
                <div className="container">
                    {children}  
                </div>
               
            </main>       
            
           
            </div>);
}

export default Layout;