import React from 'react';
import './Doughnut.css';
import Logo from './Image/Frame 3 (1).png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import DoughnutImage from './Image/2FC98C52-7814-43C2-B09D-A489A3AECB54-removebg-preview.png'
import {NavLink, Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

export default function Doughnuts(){
    const [current, setCurrent] = React.useState(0)
    const [toggleOn,setToggleOn] = React.useState(false)


    let navigate = useNavigate()
  
   
   let navigation = [
     
     "/doughnuts",
     "/",
     "/cupcake",
     "/fruits",
     
  
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

        <div className="doughnut-bg-image">
          <div className="navbar">
          <img src={Logo} alt="couldnt load" className="doughnut-logo"/>
          <div className="nav-2nd">
          <h4 className="all-products">ALL PRODUCTS</h4>
          <FontAwesomeIcon icon={faBars} style={{color: "white",
          paddingLeft: "40px", paddingRight: "180px"}} onClick={changeToggle} className="hamburger-menu"/>
           {toggleOn && <div className="doughnuts-togglebutton">
        <Link to="/cupcake" style={{textDecoration: "none", marginLeft: "2px"}}>Cupcakes</Link><br/>
        <Link to="/fruits" style={{textDecoration: "none", marginLeft: "2px"}}>Paffe</Link><br/>
        <Link to="/chocolate" style={{textDecoration:"none", marginLeft: "2px"}}>Doughnuts</Link><br/>

        </div>}
          </div>
          </div>
          <h1 className="doughnut-above-big">G0 NUTS</h1>
          <h1 className="doughnut-big-text">HAVE SOME <br/>
              DOUGHNUTS!</h1>
          <button className="doughnut-big-button">SHOP NOW</button>
          
        </div>
        <img src={DoughnutImage} className="doughnut-image" style={{width:"530px"}}/>
        <div className="right">
        <h2 className="right-text"><span style={{color: "white", fontWeight:"bolder"}}>04</span>/04</h2>
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




 
  

   
 



