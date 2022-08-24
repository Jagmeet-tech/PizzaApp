import { useSelect } from '@mui/base';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';


function Cart() {
  let finalPizza = useSelector(state => state);
  let [totalprice,setTotalPrice] = useState(0);
  console.log(finalPizza);

  useEffect(()=>{
    let total = 0;
    finalPizza?.forEach((item)=>{
      total += item.price
    })

    setTotalPrice(total);
  },[])



  return (
        <div className="App">
          <Header/>
          <div style ={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h3>Cart section</h3>
            <p>Total Billing : Rs {totalprice}</p>
          </div>
          <div className='pizza-items'>
            {
              finalPizza?.map((item)=>{
                  return(
                    <Card style={{ width: '20rem',margin : "2rem" }}>
                      <Card.Img  style = {{height:"200px"}} variant="top" src={item.img_url} />
                      <Card.Body style = {{margin:"1px"}}>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <Card.Text>Rating : <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly /></Card.Text>
                        <Card.Text>Price : Rs {item.price}</Card.Text>
                        <Card.Text>Type : {item.isVeg ? "Vegetarian" :"Non-Vegetarian" }</Card.Text>
                        <Card.Text>Size : {item.size}</Card.Text>
                        <Card.Text>Toppings : {item.toppings}</Card.Text>
                        <Button variant="primary" mx = "2px">Payment</Button>
                      </Card.Body>
                  </Card>
                  )
            })
            }
            </div>
          <Footer/>
        </div>
  );
}

export default Cart;
