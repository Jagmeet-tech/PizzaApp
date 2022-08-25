import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from "react-redux";
import { setItem } from '../../redux/actions/actions';
import "./Checkbox.css"

function Checkbox({item,details,setDetails}) {

    let [check,setCheck] = useState([]);
    let data = item.toppings[0].items
    let dispatch = useDispatch();

    let handleChange = (e)=>{
        if(check.includes(e.target.value)){
            let filter = check.filter((value)=>{
                return value !== e.target.value;
            }) 
            setCheck([...filter]);
        }
        else
            setCheck([...check,e.target.value]);

         
    }

    useEffect(() => {
        setDetails({...details,toppings:check});
        // let obj = {...item,toppings : check};
        // dispatch(setItem(obj));  
    }, [check])
    

    

  return (

    <div className='checkbox-container'>
     <p className='category'>Select your Toppings:</p>
        {
            data.map((obj)=>(
                <div>
                    <input type="checkbox" className='checkbox' value={obj.name} onClick = {handleChange} required/>  
                    <label>{obj.name}</label><br/>    
                </div>
            ))
        }
    </div>
  )
}

export default Checkbox;