import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';

function Verse() {
    return (
        <div className="verse">
            <div>
                <img className="verse_image" src="/share_image.png" alt="share_image" />
            </div>
            <div className="verse_prayer">
                <h1 className="prayer">Devote yourself to prayer with an alert mind and a thankful heart</h1>
                <p className="collosians">Colossians 4:2</p>
            </div>
        </div>
    );
}

export default Verse;
