import React from 'react';
import img1 from "../images/solimg1.png";
import img2 from "../images/solimg2.png";





const soldata=[
    {img:img1,heading:"COMPUTER VISION",dis:"Labelify’s teams have extensive experience in autonomous vehicle domain Computer Vision projects."}
    ,{img:img2,heading:"NATURAL LANGUAGE PROCESSING", dis:"Labelify’s experts in linguistic labeling can help you build the best-in-class, in vehicle communication systems."}
]

export default function Solutions() {
 
  return (
    <div className='solutions'>
        <h1 className='solutions_heading'>SOLUTIONS</h1>
        <div className="solutions_card_stack">
            {soldata.map((data,index)=>{
                return <Card key={index} img={data.img} heading={data.heading} dis={data.dis}/>
            })}

        </div>

    </div>
  )
}

const Card=(prop)=>{
    return <div className="solutions_card">
        <img src={prop.img} alt="" />
        <div className="solutions_text">
            <h1>{prop.heading}</h1>
            <p>{prop.dis}</p>
        </div>
    </div>
}