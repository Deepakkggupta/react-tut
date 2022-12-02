import React from "react";
const User=(props)=>{
    // console.warn(props.data.name)
    const {data}=props
    return  <div>
        <h1>{data.name} </h1>
        <p>your age is: {data.age}</p>
    </div>
}

export default User;