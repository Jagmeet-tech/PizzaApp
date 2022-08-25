import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setItem } from '../../redux/actions/actions';
import "./RadioButton.css";

function RadioButton({item,details,setDetails}) {

    let [size,setSize] = useState("");
    let dispatch = useDispatch();
    let data = item.size[0].items;

    let handleChange= (e)=>{
        setSize(e.target.value);
    }

    useEffect(() => {
      setDetails({...details,size:size});
      // let obj = {...item,size: size};
      // dispatch(setItem(obj));  
    }, [size]);
    

  return (
    <div className='radio-container'>
        <p className='category'>Select your Sizes:</p>
        {
          data.map((obj)=>(
            <div>
            <input type="radio"  className = "radio" name="size" onClick = {handleChange} value={obj.size}/>
            <label>{obj.size}</label><br/>
            </div>
          ))
        }
    </div>
  )
}

export default RadioButton;