import React from 'react';

function Pricing() {
    return (  
         <div className='container mt-5'>
            <div className='row'>
                <div className='col-1'></div>
               <div className='col-4'>
                <h2>Unbeatable pricing</h2>
                    <br></br>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}}>See pricing -- <i class="fa-solid fa-arrow-right"></i> </a>
                    <br></br>
               </div>
               <div className='col-7'>
                <img src='media/images/pricing-eq.svg' style={{width:"15%"}}/> 
                <p style={{display:"inline-block",color:"#424242",fontSize: "12px",fontWeight:"400"}}>Free account 
                    <br></br>
                    opening</p>
                <img src='media/images/pricing-eq.svg' style={{width:"15%"}}/> 
                <p style={{display:"inline-block",color:"#424242",fontSize: "12px",fontWeight:"400"}}>
                    Free equity delivery
                    <br></br>
                    and direct mutual funds</p>
                <img src='media/images/other-trades.svg' style={{width:"15%"}}/>  
                <p style={{display:"inline-block",color:"#424242",fontSize: "12px",fontWeight:"400"}}>
                    Intraday and
                    <br></br>
                     F&O
                </p>
               </div>
            </div>
        </div>
    );
}

export default Pricing;
