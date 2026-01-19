import React from "react";
import { userData } from "./data";

let sampleArray = ["Apple", "Mango", 35];

console.log(userData);
let players = [
  {
    cricket: "kohli",
    tennis: "Sania",
    chess: "Anand",
    hockey: "Dyan Chand",
  },
];

const SampleArray = () => {
  return (
    <div>
    
     {userData.map((user)=>{

return(
    <div style={{border:"1px solid blue"}} >

   <div>{user.username}</div>
   <div>{user.email}</div>
   <div>{user.address.street}</div>

    </div>
)


     })}
    </div>
  )
}

export default SampleArray;
