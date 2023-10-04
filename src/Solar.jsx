import React from 'react'
import './index.css'
import './animation.css'
import './Solarsystem.css'
import sun from './assets/01.1 Sun.webp';
import mercury from './assets/02.0 Mercury.webp'
import { useNavigate } from 'react-router-dom';
// import Solar from './Solar';



function Solar() {

    const navigate = useNavigate()
    function nav(){
        navigate('/quiz')
        console.log('i am woe')
    }
    return (
        <div>
        <input type="radio" id="first_view" name="stage" checked />
        <input type="radio" id="loading" name="stage"/>
        <input type="radio" id="mainView" name="stage" />
        <input type="checkbox" id="zen" name="mode" />
    
        <input type="radio" id="sunC" name="icard"/>        
        <input type="radio" id="mercuryC" name="icard"/>        
        <input type="radio" id="venusC" name="icard"/>        
        <input type="radio" id="earthC" name="icard" checked/>        
        <input type="radio" id="moonC" name="icard"/>        
        <input type="radio" id="marsC" name="icard"/>        
        <input type="radio" id="jupiterC" name="icard"/>        
        <input type="radio" id="saturnC" name="icard"/>        
        <input type="radio" id="uranusC" name="icard"/>        
        <input type="radio" id="neptunC" name="icard"/>        
        <input type="radio" id="akC" name="icard"/>        
            <main>
                <div class="welcompage flexdiv fullscreen">
                    <div class="start flexdiv fullscreen">
                        <p>Welcome</p>
                        <p>To begin your Experience, Press start</p>
                        <label class="flexdiv" for="loading"><i class="bi bi-play-fill"></i></label>
                    </div>
                    <div class="loading flexdiv fullscreen">
                        <div class="spinner flexdiv">
                            {/* <!-- <p>One Moment ...</p> --> */}
                            <div class="backCircle flexdiv">
                                <div class="greenBalls flexdiv"></div>
                                <div class="greenBalls flexdiv"></div>
                            </div>
                            <div class="frontCircle flexdiv">
                                <div class="name">A moment...</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="SolarSystemContainer">
                    <div class="SS">
                        <div class="planet sun">   
                            <figure>
                                <img src={sun} alt="Sun"/>
                            </figure>
                        </div>
                        <div class="planet mercury">
                            <figure>
                                <img src={mercury} alt="Mercury"/>
                                <div class="shadow">
                                    <div><div></div></div>
                                </div>
                            </figure>
                        </div>
                        <div class="planet venus">
                            <figure>
                                <img src="assets/03.0 Venus.webp" alt="Venus"/>
                                <div class="shadow">
                                    <div><div></div></div>
                                </div>
                            </figure>
                        </div>
                        <div class="planet earth">
                            <figure>
                                <img src="assets/04.0 Earth.webp" alt="Earth"/>
                                <div class="shadow">
                                    <div><div></div></div>
                                </div>
                                <figure class="moon">
                                    <img src="assets/05.2 Moon.webp" alt="Moon"/>
                                </figure>
                            </figure>
                        </div>
                        <div class="planet mars">
                            <figure>
                                <img src="assets/06.0 Mars.webp" alt="mars"/>
                                <div class="shadow">
                                    <div><div></div></div>
                                </div>
                            </figure>
                        </div>
                        <div class="belt">
                        </div>
                        <div class="planet jupiter">
                            <figure>
                                <img src="assets/07.0 Jupiter.webp" alt="jupiter"/>
                                <div class="shadow">
                                    <div><div></div></div>
                                </div>
                            </figure>
                        </div>
                        <div class="planet saturn">
                            <figure>
                                <img src="assets/08.0 Saturn.webp" alt="saturn"/>
                                <div class="shadow">
                                    <div><div></div></div>
                                </div>
                                <img src="assets/08.1 Saturn_Ring.webp" alt="saturn ring"/>
                            </figure>
                        </div>
                        <div class="planet uranus">
                            <figure>
                                <img src="assets/09.0 Uranus.webp" alt="Uranus"/>
                                <div class="shadow">
                                    <div><div></div></div>
                                </div>
                                <div class="uranus_ring"></div>
                            </figure>
                        </div>
                        <div class="planet neptun">
                            <figure>
                                <img src="assets/10.0 Neptun.webp" alt="neptun"/>
                                <div className="shadow">
                                    <div><div></div></div>
                                </div>
                                
                            </figure>
                        </div>
                    </div>
        
                </div>
                <div class="tutorial flexdiv">
                    <div>
                        <h2>Secret Of Eclipse</h2>
                        <p>Welcome to Secret Of Eclipse ,here you can enlight your knowledge about eclipse ocurring in our solar sytem.</p>
                    </div>
                    <div>
                        <h2>Play</h2>
                        <p>sit back, relax and enjoy the beauty of our home system, for a better Experience press F11 to fullscreen</p>
                    </div>
                    <label for="mainView" onClick={nav} >Start <i class="bi bi-arrow-right"></i></label>
                    <label for="mainView">Setting <i class="bi bi-arrow-right"></i></label>
                </div>
            </main>
    
        </div>
      )
}

export default Solar
