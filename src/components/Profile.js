import React from 'react';
import { CommonContext } from './CommonContext';


function Profile() {
  return (
    <CommonContext.Consumer>
    
       {
           ({color,counter})=>(
               <><h1 style={{ color: color }}>Profile Page</h1>
               {/* <h2 style={{backgroundColor:color}}>Counter: {counter}</h2> */}
               </>
               )
       }
        </CommonContext.Consumer>
        
  )
}

export default Profile

