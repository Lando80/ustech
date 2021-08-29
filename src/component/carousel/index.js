import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import foto1 from '../../assets/foto1.jpeg';
import foto2 from '../../assets/foto2.jpeg';
import foto3 from '../../assets/foto3.jpeg';
import foto4 from '../../assets/foto4.jpeg';
import foto5 from '../../assets/foto5.jpeg';


export default () => (
    <Carousel
    showThumbs={false} 
    autoPlay>
        <div style={{paddingTop: 119}}>
            <img alt="" src={foto1} style={{width:'100%', height:200}}/>
        </div>
        <div style={{paddingTop: 119}} >
            <img alt="" src={foto2} style={{width:'100%', height:200}}/>
        </div>
        <div style={{paddingTop: 119}} >
            <img alt="" src={foto3} style={{width:'100%', height:200}}/>
           
        </div>
        <div style={{paddingTop: 119}}>
            <img alt="" src={foto4} style={{width:'100%', height:200}}/>
            
        </div>
        <div style={{paddingTop: 119}} >
            <img alt="" src={foto5} style={{width:'100%', height:200}}/>
            
        </div>
    </Carousel>
);
