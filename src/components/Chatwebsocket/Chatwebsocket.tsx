import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import './Chatwebsocket';

function Chatwebsocket(){
    
    const [mensaje, setMensaje]= useState('');
    const [mensajes, setMensajes]= useState <string[]>([]);
    const [webSocket, setwebSocket]= useState<WebSocket | null>(null);
        
    return(
        <>
        <div className="chat-container">
            <div className="chat-title">Titulo</div>
            {/* aqui estaran las burbujas de mensajes */}
            <div className="chat-messages">
                <div className="chat-message">
                    <div className={'mensaje.azul'}>mensaje {/* Hora */}</div>
                    <div className={'mensaje.blanco'}>mensaje {/* Hora */}</div>
                </div>
                <div className="chat-input-message">
                    <input className="chat-text"></input>
                    <div className="chay-send">
                        <IoSend color="white" size="30" className="chayName"/>
                    </div>
                </div>
            </div>
            <div className="chat-input">
                
            </div>
        </div>
        {/* Navbar */}
        {/* body messages */}
        {/* input text */}
        {/* pop-up set user name */}
        </>
    );
}

export default Chatwebsocket;