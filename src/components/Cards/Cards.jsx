import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Cards.css";
import Rating from '@mui/material/Rating';
import Filter from '../Filter/Filter';
import Popup from '../Popup/Popup';
import { selectClasses } from '@mui/material';
import { useSelector } from 'react-redux';

// import getPizzaService from '../../services/getPizzaService';

function Cards({searchText,setSearchText}) {
    let allSelectedPizza = useSelector(state=>state);
    let [selectedPizza,setSelectedPizza] = useState({});
    let [pizza,setPizza] = useState([]);
    let [popup,setPopup] = useState(false);
    let [type,setType] = useState("");
    let [price,setPrice] = useState("");
    let [rating,setRating] = useState("");
    let [filterPizza,setFilterPizza] = useState([]); //for filter
  
    useEffect(()=>{
        axios.get("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68").then((res)=>{
          console.log(res);
          setPizza(res.data);
          setFilterPizza(res.data)
        }).catch((err)=>{
          console.log(err);
        })
    },[]);

    useEffect(()=>{
      if(type){
        let filter = pizza.filter((item)=>{
          let str = "";  
          if(item.isVeg === true)
              str = "Veg";
          else
              str = "Non-Veg"
          return type === str;       
        })
        if(price === "Increase"){
          filter.sort((a,b) => a.price - b.price);
        }
        else if(price === "Decrease")
          filter.sort((a,b) => b.price - a.price); 
        setFilterPizza([...filter]);
      }else{
        setFilterPizza([...pizza]);
      }
    },[type])

    useEffect(()=>{
      if(price){
          if(price === "Increase"){
            let filter = [...filterPizza];
            filter.sort((a,b) => a.price - b.price);
            console.log(filter);
            setFilterPizza([...filter]);
          }else if(price === "Decrease"){
              let filter = [...filterPizza];
              filter.sort((a,b) => b.price - a.price);
              setFilterPizza([...filter]);
          }
      }else{
        setFilterPizza([...pizza]);
      }
    },[price])

    useEffect(()=>{ // issue in rating filter
      if(rating){
        if(rating === "Increase"){
          let filter = [...pizza];
          filter.sort((a,b) => Math.ceil(a.rating) - Math.ceil(b.rating));
          console.log(filter);
          setFilterPizza([...filter]);
        }else if(rating === "Decrease"){
            let filter = [...pizza];
            filter.sort((a,b) => Math.ceil(b.rating) - Math.ceil(a.rating));
            setFilterPizza([...filter]);
        }
    }else{
      setFilterPizza([...pizza]);
    }
    },[rating])

    useEffect(()=>{
      if(!searchText){
        setFilterPizza([...pizza]);
      }else{
        let newArr = pizza.filter((obj)=>{
          let str = obj.name.toLowerCase();
          return str.includes(searchText.toLowerCase());
        })
        setFilterPizza([...newArr]);
      }
    },[searchText])

    let handleButton = (item)=>{
      console.log(popup);
      setSelectedPizza(item);
      setPopup(!popup);
    }
    
    let handleRemove = (item)=>{
      setSelectedPizza({});
    }
    
    console.log(popup);
  return (
    <>
    <h2>Trending Pizza's</h2>
    <div className='filter-container'>
      <Filter name = {"type"} type = {type} setType = {setType}></Filter>
      <Filter name = {"price"} price = {price} setPrice = {setPrice}></Filter>
      <Filter name = {"rating"} rating = {rating} setRating = {setRating}></Filter>
    </div>
    <div className='pizza-items'>
    {
      filterPizza.map((item)=>{
          return(
            <Card style={{ width: '20rem',margin : "2rem" }}>
              <Card.Img  style = {{height:"200px"}} variant="top" src={item.img_url} />
              <Card.Body style = {{margin:"1px"}}>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>Rating : <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly /></Card.Text>
                <Card.Text>Price : Rs {item.price}</Card.Text>
                <Card.Text>Type : {item.isVeg ? "Vegetarian" :"Non-Vegetarian" }</Card.Text>
                <Button variant="primary" style= {{marginRight:"10px"}} onClick={()=>{handleButton(item)}}>Add +</Button>
              </Card.Body>
          </Card>
          )
    })
    }
    {
      popup && (
        <Popup popup = {popup} setPopup = {setPopup} item = {selectedPizza} />
      )
    }
    </div>
    </>
  );
}

export default Cards;