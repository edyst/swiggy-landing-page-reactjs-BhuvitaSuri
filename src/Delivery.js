import React from "react"
import food from './assets/food.jpg'
import logo from './assets/logo.jpg'
import location from './assets/location.jpg'
 class Delivery extends React.Component{
     render()
     {
         return(
             <div className="main">
                <div className="left" style={{width:"900px", height:"540px"}}>
                    <div className="nav">
                        <img src={logo} style={{height:"120px", width:"220px"}}/>
                        {/* <h1 style={{color:"orange",fontSize:"30px",letterSpacing:"7px"}}>SWIGGY</h1> */}
                        <div style={{marginTop:"19px"}}>
                        <a href="#" style={{color:"black", textDecorationLine:"none", fontSize:"16px", fontWeight:"bold"}}>Login</a> 
                        <button id="sign">Sign Up</button></div>
                    </div>
                    <div className="order1" style={{marginLeft:"180px"}}>
                    <h1><span id="h"></span></h1>
                    <h2 className="order">Order food from favourite restaurants near you.</h2> <br/>


                    <div className="search"><div>
  <input type="text" className="form-control" placeholder="Enter your delivery location "/>
  <button id="clear"><img src={location} style={{height:"20px", width:"20px"}}/ >Locate me</button></div><div>
  <button type="button" id="food"><b style={{fontSize:"18px",fontWeight:"bold"}}>Find Food</b></button></div>
                            </div>
                            <h3 className="pop">Popular cities in India</h3> <br/>
                            <ul className="cities">
                                <li className="city"><a href="/web/20210903174711/https://www.swiggy.com/ahmedabad" className="name">Ahmedabad</a></li>
                                <li className="city"><a style={{color:"#a9abb2"}}href="/web/20210903174711/https://www.swiggy.com/bangalore" className="name">Bangalore</a></li>
                                <li className="city"><a  href="/web/20210903174711/https://www.swiggy.com/chennai" className="name">Chennai</a></li>
                                <li className="city"><a style={{color:"#a9abb2"}}href="/web/20210903174711/https://www.swiggy.com/delhi" className="name">Delhi</a></li>
                                <li className="city"><a href="/web/20210903174711/https://www.swiggy.com/gurgaon" className="name">Gurgaon</a></li>
                                <li className="city"><a style={{color:"#a9abb2"}}href="/web/20210903174711/https://www.swiggy.com/hyderabad" className="name">Hyderabad</a></li>
                                <li className="city"><a href="/web/20210903174711/https://www.swiggy.com/kolkata" className="name">Kolkata</a></li>
                                <li className="city"><a style={{color:"#a9abb2"}}href="/web/20210903174711/https://www.swiggy.com/mumbai" className="name">Mumbai</a></li>
                                <li className="city"><a href="/web/20210903174711/https://www.swiggy.com/pune" className="name">Pune</a></li>
                                <li className="city"><a style={{color:"#a9abb2"}}href="#city-links" class="name"> more.</a></li>
                                </ul>
                    </div>
                </div>
                    <img src={food} style={{width:"640px", height:"540px" , float:"right"}}/>
                
             </div>
         )
     }
 }
 export default Delivery;