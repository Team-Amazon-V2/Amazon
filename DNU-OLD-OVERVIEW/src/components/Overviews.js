import React from 'react'

const Overviews=props=>{
    
  
        return (
        <>
            {props.overviews.map((overview)=>(
                <div className="overviews">
                     <h1>ProductName: {overview.productname}</h1>
                     <h1>ProductOverview: {overview.productoverview}</h1> 
                </div>
            ))}
           
        </>
        )
        
     
    }


export default Overviews