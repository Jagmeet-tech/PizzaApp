import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setItem } from '../../redux/actions/actions';
import "./RadioButton.css";

function RadioButton({item,details,setDetails}) {

    let [size,setSize] = useState("Regular");
    let dispatch = useDispatch();

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
        <p>Select your Sizes:</p>
        <input type="radio" name="size" onClick = {handleChange} value="Regular"/>
        <label for="html">Regular</label><br/>
        <input type="radio" name="size" value="Medium"  onClick = {handleChange}/>
        <label for="css">Medium</label><br/>
        <input type="radio" name="size" value="Large"  onClick = {handleChange}/>
        <label for="javascript">Large</label>
    </div>
  )
}

export default RadioButton;