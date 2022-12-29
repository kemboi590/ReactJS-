
import React from "react";
// function Great() {
//     return <h1> Hello Kemboi</h1>
// }
const Great = ({name, jargonName, children}) => {
    
    return (
        <div>
            <h1>
                Hello {name} a.k.a {jargonName}
            </h1>
            
                {children}
            
        
        </div>
        
    ) 

}
export default Great

//this is a functional component