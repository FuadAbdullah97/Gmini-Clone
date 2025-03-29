import React from 'react';
import '../Main/Main.css'
import {assets} from "../../assets/assets.js";
function Main() {
    return (
        <div className='main'>
            <div className="nav">
                <p>Gimini</p>
                <img src={assets.user_icon} alt=""/>
            </div>

            <div className="main-container">
            <div className="main-greet">
                    <p><span>Hello Dev</span></p>
            </div>
                <div className="cards">
                    <div className="card">
                        <p>Briefly summarize this concept : urban Planing</p>
                        <img src={assets.compass_icon} alt=""/>
                    </div>
                    <div className="card">
                        <p>Briefly summarize this concept : urban Planing</p>
                        <img src={assets.compass_icon} alt=""/>
                    </div>
                    <div className="card">
                        <p>Briefly summarize this concept : urban Planing</p>
                        <img src={assets.compass_icon} alt=""/>
                    </div>
                    <div className="card">
                        <p>Briefly summarize this concept : urban Planing</p>
                        <img src={assets.compass_icon} alt=""/>
                    </div>

                    <div className="main-bottom">
                        <div className="search-box">
                            <input type="text" placeholder='Enter a prompt here...'/>
                            <div className="searchBox-bottons">
                                <img src={assets.gallery_icon} alt=""/>
                                <img src={assets.mic_icon} alt=""/>
                                <img src={assets.send_icon} alt=""/>
                            </div>

                        </div>
                        <div className="bottom-info">
                            <p>Gemini can make mistakes, so double-check it

                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Main;