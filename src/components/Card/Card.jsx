import React, { useState } from 'react';

const Card = ({item:{name,price,id},hendleCallback}) => {
      const [shoes, setShoes] = useState({name,price,id});
     const handelSubmit=()=>{
        hendleCallback(shoes) 
      }
     const handleChange=(e)=>{
        const value = e.target.value;
        setShoes({ ...shoes,[e.target.name]: value});
        console.log(e.target);
      }

    return (
        <div className="cardContainer">
            <input  type="text" name='name' value={shoes.name}  onChange={handleChange}
                   />
            <input  type="text" name='price' value={shoes.price} onChange={handleChange}
                   />
             <button onClick={handelSubmit}>Save</button>
           
        </div>
    )
}

export default Card
