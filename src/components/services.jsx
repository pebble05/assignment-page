import React from 'react';
import img1 from '../images/servimg1.png';
import img2 from '../images/servimg2.png';
import img3 from '../images/servimg3.png';
import img4 from '../images/servimg4.png';
import img5 from '../images/servimg5.png';
import img6 from '../images/servimg6.png';
import img7 from '../images/servimg7.png';





const servicedata=[
  {img:img1,heading:'OBJECT TRACKING',discription:'The use cases for labelify are face detection and pedestrian detection.'},
  {img:img2,heading:'SEMANTIC SEGMENTATION',discription:'The Labelify team segments images into components and annotates them. Labelify Computer Vision experts can detect desired objects in images at the pixel-level.'},
  {img:img3,heading:'POLYGON ANNOTATION',discription:'Expert annotators place points at each vertex of the target object. Annotating objects with polygons allows for all edges to be marked, regardless of their shape.'},
  {img:img4,heading:'MULTI-SENSOR FUSION',discription:'Labelify’s teams combine LiDAR with images from multiple angles taken from different sensors to help reduce uncertainty in navigation.'},
  {img:img5,heading:'BOUNDING BOXES',discription:'The Labelify Computer Vision experts use rectangle box annotations to illustrate objects and train data. This allows algorithms to locate and identify objects during ML processes.'},
  {img:img6,heading:'LIDAR',discription:'The Labelify teams label 360-degree visibility images and videos captured by multi-sensor camera systems. This allows them to create accurate ground truth datasets that can be used to drive autonomous driving algorithms.'},
  {img:img7,heading:'PANOPTIC SEGMENTATION',discription:'Combining instance and semantic segmentation, Labelify enrichment team identify pixels in images that belong to a class and identify which instances they belong to.'}
]



export default function Services() {


  return (
    <div className='services'>
      <h1 className='services_heading'>SERVICES</h1>
      <div className="services_card_stack">
        {servicedata.map((data,index)=>{return<Card key={index}img={data.img} heading={data.heading} discription={data.discription}/>})}
      </div>
    </div>
  )
}

const Card=(prop)=>{
  return <div className="services_card">
    <img src={prop.img} alt="" />
    <div className="card_text">
    <h1>{prop.heading}</h1>
        <p>{prop.discription}</p>
    </div>
        
        
  </div>  
}