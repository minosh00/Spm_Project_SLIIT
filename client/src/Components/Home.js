import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "../images/a.jpg" },
    { url: "../images/b.jpeg" },
    { url: "../images/c.webp" },
    { url: "../images/d.jpg" },
    { url: "../images/s.jpg" },
   
  ];


const Home = ()=>(

   
    <blockquote class="blockquote text-center">
     <br></br>  <br></br> 
  <p class="h1">Welcome to the Wijaya Beach Hotel</p>

  <div>
      <SimpleImageSlider
      style={{marginLeft:'103px'}}
        width={1006}
        height={604}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
<br></br>

  <footer class="blockquote-footer">Wijaya Beach is a family-owned business. Since the opening of our restaurant in 1980 we have become one of the best-loved establishments in the area. We pride ourselves on our popularity with the local expat community and the number of visitors who return year after year to enjoy our food, cocktails, stunning beach and relaxed ambience.

Our beachfront restaurant and bar serves an eclectic mix of Asian and European food, and we have an eight-room luxury bed and breakfast set around the courtyard behind the restaurant.

 <cite title="Source Title">Our peaceful beach has a protective reef creating a lagoon which ensures safe swimming all year round, and we have a small surf break in front of our restaurant.</cite></footer>
</blockquote>

)

export default Home;