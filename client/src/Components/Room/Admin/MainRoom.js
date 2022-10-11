import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import AllRooms from './AllRooms';
import '../Rooms.css'

const images = [
    { url: "https://www.wijayabeach.com/conmain/images/IMG_0151.jpg" },
    { url: "https://www.wijayabeach.com/conmain/images/IMG_9471.jpg" },
    { url: "http://wallpapers.net/maldives-hotel-room-hd-wallpaper/download/828x350.jpg" },
    { url: "https://www.telegraph.co.uk/content/dam/Travel/hotels/asia/sri-lanka/kk-beach-sri-lanka-l-xlarge.jpg?imwidth=1280" },
];

const MainRoom = () => (
    <blockquote class="blockquote text-center">
        <div>
            <SimpleImageSlider
                width="100%"
                height={400}
                images={images}
                showBullets={true}
                showNavs={true} />
        </div>
        <AllRooms />
    </blockquote>
)

export default MainRoom;