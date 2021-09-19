import React from 'react';
import nominorder from './assets/nominorder.jpg';
import fastdelivery from './assets/fastdelivery.jpg';
import liveorder from './assets/liveorder.jpg';
class Section extends React.Component{
    render()
    {
        return(
            <div className="box">
                <div className="box1"><div className="box2"><div className="p1">
                    <img width="105" height="199" src={nominorder}/>
                        </div><div className="p2">No Minimum Order</div>
                        <div className="p3">Order in for yourself or for the group, with no restrictions on order value</div></div>
                        <div className="box2"><div className="p1">
                    <img width="112" height="206" src={liveorder}/></div>
                    <div className="p2">Live Order Tracking</div>
                    <div className="p3">Know where your order is at all times, from the restaurant to your doorstep</div></div>
                    <div className="box2"><div className="p1">
                        <img width="124" height="188" src={fastdelivery}/>
                        </div><div className="p2">Lightning-Fast Delivery</div>
                        <div className="p3">Experience Swiggy's superfast delivery for food delivered fresh &amp; on time</div></div></div></div>

        )}}
        export default Section;