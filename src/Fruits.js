import React from 'react';
import './Fruit.css';
import Logo from './Image/Frame 3 (1).png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Fruitcup from './Image/christmas-parfait-removebg-preview.png'
import HotChocolate from './Image/Vegan-hot-chocolate-recipe-472x310-398c53f4-1e09-4b2d-ba5e-d97cce1bf2ae-0-472x310-removebg-preview.png'
import {NavLink, Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

export default function Fruits(){
    const [current, setCurrent] = React.useState(0)
    const [toggleOn,setToggleOn] = React.useState(false)


    let navigate = useNavigate()
  
   
   let navigation = [
     
     "/fruits",
     "/doughnuts",
     "/",
     "/cupcake",
     
  
   ]

   function changeToggle(){
    setToggleOn(prevOn => !prevOn)
  }

   const length = navigation.length;

 function moveLeft(){
   setCurrent(current === 0? length-1 : current-1)
   navigate(navigation[current])
   
 }

 function moveRight(){
   setCurrent(current === length - 1 ? 0: current+1)
   navigate(navigation[current])

 }
    return(
        <div className="bg">

        <div className="fruits-bg-image">
          <div className="navbar">
          <img src={Logo} alt="couldnt load" className="fruits-logo"/>
          <div className="nav-2nd">
          <h4 className="all-products">ALL PRODUCTS</h4>
          <FontAwesomeIcon icon={faBars} style={{color: "white",
          paddingLeft: "40px", paddingRight: "180px"}} onClick={changeToggle} className="hamburger-menu"/>
          </div>
          </div>
          {toggleOn && <div className="chocolate-togglebutton">
        <Link to="/cupcake" style={{textDecoration: "none", marginLeft: "2px"}}>Cupcakes</Link><br/>
        <Link to="/fruits" style={{textDecoration: "none", marginLeft: "2px"}}>Chocolate</Link><br/>
        <Link to="/doughnuts" style={{textDecoration:"none", marginLeft: "2px"}}>Doughnuts</Link><br/>

        </div>}
          <h1 className="fruits-above-big">EXPERIENCE</h1>
          <h1 className="fruits-big-text">FRUITY <br/>
              SENSATION!</h1>
          <button className="fruits-big-button">SHOP NOW</button>
          
        </div>
        <img src={Fruitcup} className="fruit-cup" />
        <div className="right">
        <h2 className="right-text"><span style={{color: "white", fontWeight:"bolder"}}>03</span>/04</h2>
        <h3 className="right-paragraph">A cup of mouthwatering hot chocolate. Drink a cup filled with savouring goodness and satisfy your cravings</h3>
      
        </div>
        <FontAwesomeIcon onClick={moveLeft} icon={faArrowLeft} className="left-arrow"/>
        <NavLink to="/" className="chocolate-navlink">.</NavLink>
      <NavLink to="/cupcake" className="cupcake-navlink">.</NavLink>
      <NavLink to="/fruits" className="fruits-navlink">.</NavLink>
      <NavLink to="/doughnuts" className="doughnuts-navlink">.</NavLink>
        <FontAwesomeIcon onClick={moveRight} icon={faArrowRight} className="right-arrow"/>
        <div className="followus-batch">
    <h3 className="follow-us">FOLLOW US</h3>
    <FontAwesomeIcon icon={faFacebookF} className="facebook"/>
    <FontAwesomeIcon icon={faInstagram} className="instagram"/>
    <FontAwesomeIcon icon={faYoutube} className="youtube"/>

    </div>
    
        </div>
        
            
        
    )
}




 
  

   
 



