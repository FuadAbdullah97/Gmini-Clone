import React, {useState} from 'react';
import '../Sidebar/SideBar.css'
import {assets} from '../../assets/assets.js'
function SideBar(props) {

    const [expanded, setExpanded] = useState(false);
    return (
        <div className='sidebar'>
            <div className="top">
                <img className='menu' src={assets.menu_icon} alt="" onClick={()=>setExpanded(prev => !prev)}/>
                <div className="new-chat">
                    <img src={assets.plus_icon} alt=""/>

                    {expanded ?   <p>New Chat</p> : null}
                </div>
                {expanded ? <div className="recent">
                    <div className="recent-title">
                        <div className="recent-entry">
                            <img src={assets.message_icon} alt=""/>
                            <p>What is react...</p>
                        </div>
                    </div>
                </div>
                : null
                }

            </div>
            <div className="bottom">
                <div className="bottom-items">
                    <img src={assets.question_icon} alt=""/>
                    {expanded ? <p>Help</p> : null}

                </div>
                <div className="bottom-items">
                    <img src={assets.history_icon} alt=""/>
                    {expanded ? <p>Activities</p> : null}
                </div>
                <div className="bottom-items">
                    <img src={assets.setting_icon} alt=""/>
                    {expanded ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    );
}

export default SideBar;