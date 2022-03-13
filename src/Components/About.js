import React from 'react';
import Flower from '../Images/flower.jpg'
import Temp from '../Images/temp.png'

function About(props) {


    return (
        <>
            <header id='header'>
                <div className='flower'>
                    <img src={Flower} width={400} alt="" />
                </div>
                <div className="texts">
                    <h1>O'simlik haqida</h1>
                </div>
                <div className="aboutTexts">
                    <ul>
                        <li>
                            <img src={Temp} width={40} alt="" /> Xona harorati: <span>{21} °C</span>
                        </li>
                        <li>
                            <img src={Temp} width={40} alt="" />  Tuproq namligi: <span>{12}</span>
                        </li>
                        <li>
                            <img src={Temp} width={40} alt="" /> Suvning miqdori: <span>{5}litr</span>
                        </li>

                    </ul>
                </div>
                <div className="map">
                    <h3>
                        Gul turgan joy
                    </h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.7847605957445!2d69.52622841489342!3d41.313545808533405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5774bb568c81%3A0x5a794f7263a1e89a!2sAstrum%20-%20IT%20Academy!5e0!3m2!1suz!2s!4v1647165467984!5m2!1suz!2s" width={1200} height={450} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </header>
        </>
    );
}

export default About;