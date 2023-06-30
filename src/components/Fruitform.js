import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FruitService from '../services/FruitService';


const FruitForm=()=>{
    let navigate=useNavigate()
   let [fruits1,setfruits]=useState({fid:"",fname:"",fcolor:"",quantity:"",price:""})
    
   let addFruit=()=>{
    FruitService.insertFruit(fruits1).then(()=>{
        console.log(fruits1)
        navigate("/");

    })

//  updateFruit1=()=>{
//         FruitService.updateFruit(fid).then(()=>{
//             console.log(fruits1)
//             navigate("/");
//         })
//     }
    
   }


   return(
    <div>
        <form>
            <label htmlFor='fid'>FruitId</label>
            <input type="text" id="fid" name="fid" value={fruits1.fid}
            onChange={(event)=>{setfruits({...fruits1,fid:event.target.value})}}/>

<label htmlFor='fname'>Fruitname</label>
            <input type="text" id="fname" name="fname" value={fruits1.fname}
            onChange={(event)=>{setfruits({...fruits1,fname:event.target.value})}}/>

<label htmlFor='fcolor'>FruitColor</label>
            <input type="text" id="fcolor" name="fcolor" value={fruits1.fcolor}
            onChange={(event)=>{setfruits({...fruits1,fcolor:event.target.value})}}/>

<label htmlFor='quantity'>quantity</label>
            <input type="text" id="quantity" name="quantity" value={fruits1.quantity}
            onChange={(event)=>{setfruits({...fruits1,quantity:event.target.value})}}/>

<label htmlFor='price'>price</label>
            <input type="text" id="price" name="price" value={fruits1.price}
            onChange={(event)=>{setfruits({...fruits1,price:event.target.value})}}/>
          <button type="button" id="btn" name="btn" value="btn" onClick={addFruit}>AddFruit</button>
          {/* <button type="button" id="btn1" name="btn1" value="btn1" onClick={updateFruit1}>updateFruit</button> */}
        </form>
    </div>
   )

}
export default FruitForm;
