import React from 'react';
import { Link } from "react-router-dom";
 function OpenAccount() {
    return ( 
            <div className='container p-5'>
            <div className='row text-center'>
            <h1 className='mt-5 mb-3' style={{color: "#424242"}}>
            Open a Zerodha account
            </h1>
            <p className='fs-5 mb-5' style={{color: "#666"}}>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
            </p>
                <Link to="/signUp">
                   <button style={{width:"20%",margin:"0 auto",backgroundColor:"#387ed1"}} className='fs-5 p-2 btn btn-primary'>Sign up for free</button> 
                </Link>
            </div>
        </div>
     );
 }
 
 export default OpenAccount;