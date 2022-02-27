import React from 'react';
import heroimg from "../images/heroimg.jpg"

export default function hero() {
  return <div className='hero'>
      <div className="hero_text">
          <h1>AUTONOMOUS VEHICLES AI INDIA</h1>
          <p>Labelify is a global leader in technology services, providing data annotation across computer vision and natural language processing. This allows large companies to use machine learning and artificial intelligence for autonomous transportation.</p>
          <button>Let's Connect  &rarr;</button>
      </div>
      <div className="hero_img">
          <img src={heroimg} alt="hero_img" />
      </div>

  </div>
  
}
