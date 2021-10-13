//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Apple from '../../assets/Apple.png';
import Google from '../../assets/Google.png';
import Twitter from '../../assets/Twitter.png';
import Facebook from '../../assets/Facebook.png';
import Logo from '../../assets/logo.png';
import userLogo from '../../assets/user.png';
import line from '../../assets/Line.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import fotoNoticia from '../../assets/10.png';

import fotoNoticia10x11 from '../../assets/foto1.jpeg';
import fotoNoticia10x12 from '../../assets/foto3.jpeg';
import mia from '../../assets/mia.png';
import Chat from  '../../component';
import search from '../../assets/Vector.png';
import './styles.css';
import Carousel from '../../component/carousel/index';

function Home() {
    return (

      <section className="container">
        <div className="containerGlobal">
          <Chat/>
          <header>
            <div className="blockOne">
              <img src={Logo} style={{width: 233}}></img>
            </div>

            <div  className="blockTwo">

                <input type="search" placeholder="Pesquise aqui" className="inputSeach">

                    {/* /<img src={search}/> */}

                </input>

              <button className="userButton"></button>

            </div>
          </header>
        <div className="barSections">
          <p>A SEMEF</p>
          <p>A SEMEF</p>
          <p>AREAS</p>
          <p>CARF-M</p>
          <p>TRANSPARENCIA</p>
          <p>DIARIO OFICIAL</p>
          <p>PORTAL MANAUS</p>
        </div>
        <div  style={{ border: "1px solid white"}}>
        <Carousel
        />
        </div>

        <div className="containerPai">

        <div className="container_link">
          <img  className="photo" src={fotoNoticia}/>
        </div>

        <div className="container_link2">
          <div className="noticia">
            <img  className="photo10x11" src={fotoNoticia10x11}/>
            </div>
            <div className="noticia1">
            {/* <p >asasfas</p> */}
            <img  className="photo10x12" src={fotoNoticia10x12}/>
            </div>
            </div>

            <div className="container_ntc">
         <p>testsdfsfg</p>
        </div>

        </div>
        </div>
      </section>

    )}
      export default Home;
