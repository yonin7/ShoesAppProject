import React, { useState } from 'react';
import './card.css'

const Card = ({item:{name,price,id,size,imgURL},hendleCallback}) => {
      const [shoes, setShoes] = useState({name,price,id,size,imgURL});
     const handelSubmit=(e)=>{
       e.preventDefault()
        hendleCallback(shoes) 
      }
     const handleChange=(e)=>{
        const value = e.target.value;
        setShoes({ ...shoes,[e.target.name]: value});
        console.log(e.target);
      }

    return (
        <div className="cardContainer">
            {imgURL===''?<div className="cardContainer"> <form>
              <input  type="text" name='name' placeholder="Name" value={shoes.name}  onChange={handleChange}/>
              <input  type="number" name='price' placeholder="Price" value={shoes.price} onChange={handleChange}/>
              <input  type="number" name='size' placeholder='Size' value={shoes.size} onChange={handleChange}/>
              <input  type="text" name='imgURL' placeholder='imgURL' value={shoes.imgURL} onChange={handleChange}/>
              <button onClick={handelSubmit}>Save</button>
             </form></div>:<div className="cardContainer"> 
            
            <form>
              <label>Name:</label>
              <input  type="text" name='name' value={shoes.name}  onChange={handleChange}/>
              <label>Price:</label>
              <input  type="text" name='price' value={shoes.price} onChange={handleChange}/>
              <label>Size:</label>
              <input  type="text" name='size' value={shoes.size} onChange={handleChange}/>
              <button onClick={handelSubmit}>Save</button>
             </form>
             <img name='imgURL' alt='' src={imgURL} onChange={handleChange}/>
             </div>}
        </div>
    )
}

export default Card
