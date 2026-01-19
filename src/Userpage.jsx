import React, { useState, useEffect } from "react";

const userDetails = "https://jsonplaceholder.typicode.com/posts";

console.log("i am link from API", userDetails);

const Userpage = () => {
  const [user, setUser] = useState([]);

  const userHandler = async () => {
    const response = await fetch(userDetails);
    const newData = await response.json();

    setUser(newData);
  };
  useEffect(() => {
    console.log(userHandler());
  }, []);

  console.log(user);

  return <div>

    {user.map((item)=>{
        return(
<div className="userSection">
   <h2 style={{color:"blue"}}>{item.title}</h2>
  <h3 style={{color:"red"}}> {item.body}</h3>
  <h4 style={{color:"darkBlue"}}>{item.id}</h4>


</div>
            
        )






    })}
  </div>;
};

export default Userpage;
