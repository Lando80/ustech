//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Apple from '../../assets/Apple.png';
import Google from '../../assets/Google.png';
import Twitter from '../../assets/Twitter.png';
import Facebook from '../../assets/Facebook.png';
import Logo from '../../assets/logo.png'
import userLogo from '../../assets/user.png'
import line from '../../assets/Line.png'
import Carousel from '../../component/carousel/index';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import fotoNoticia from '../../assets/10.png';
import fotoNoticia10x10 from '../../assets/foto2.jpeg';
import fotoNoticia10x11 from '../../assets/foto1.jpeg';
import mia from '../../assets/mia.png';
import Chat from  '../../component';

function Home() {
    return (
        <header className="App-header">
        <div style={cardWhite}>
          <div style={{paddingRight:5, paddingTop:5, right:0, position:'absolute',}}>
            <img src={Apple} style={{marginRight:5}}></img>
            <img src={Google} style={{marginRight:5}}></img>         
            <img src={Twitter} style={{marginRight:5}}></img>     
            <img src={Facebook} style={{marginRight:5}}></img>
            </div>
           </div>
            <div style={divStyle}>
            <img src={Logo} style={logoPrefeitura}></img>

            <div style={{backgroundColor :'red', zIndex:6666}} > 
              <button style={user} onClick={()=>alert("ok")}>
                {/* <img src={userLogo}></img> */}
              </button>
            </div>
        </div>
        <div style={{width:'100%', height:200}}>
        <Carousel />

        <div style={{gridRow:1}}>
          {/* <img src={line}/> */}
          <p >Noticias em destaque</p>
        </div>

        <Chat></Chat>

        <div>
          <img style={{height:200}} src={fotoNoticia}></img> 
          </div>
        <div style={{gridRow:1, flexDirection:'column'}}> 
          <img style={{height:50, paddingLeft:5}} src={fotoNoticia10x10}></img>
          <img style={{height:50, paddingLeft:5}} src={fotoNoticia10x11}></img>
          </div>

</div>
        
      </header>
    )}
    const user = {
        position: 'absolute',
        width: 51,
        height: 51,
        right: 15,
        top: 20,
        borderRadius:29,
        };
        const chat ={
          position:'absolute',
          width: 51,
          height: 51,
          right:0,
          top: 550,
          borderRadius:29,
        };
        const logoPrefeitura={
          position: 'absolute',
          width: 369,
          height: 98,
          left: 30,
          top: 3,
        }
        
        const divStyle = {
          position: 'absolute',
          width: '100%',
          height: 117,
          left: 0,
          top: 30,
          background: '#2AAF7F',
        };
        const cardWhite ={
        position: 'absolute',
        width: '100%',
        height: 39,
        right:0,
        top: 0,
        background: '#F1F4F3',
        };
        const redesociais={
          position: 'absolute',
          width: 28,
          height: 28,
          left: 1263,
          top: 9,
          
        }
        export default Home;
    