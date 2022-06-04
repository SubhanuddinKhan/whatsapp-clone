import React from "react";
import {CommonContext} from './CommonContext';


function Update(){

   
    
    return(    
        <CommonContext.Consumer >
        {
            ({updateColor,updateCounter,color})=>(
                <>
                
                <button onClick={() => updateColor()}>Update Color</button>
                {/* <button onClick={() => updateCounter()}>Count</button> */}
                
                </>
                
            )
        }
    </CommonContext.Consumer>
    );
}


export default Update;