import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import {USER_CONNECTED, LOGOUT} from '../Events'

export default function Layout({ title }) {
  const [socket, setSocket] = useState(null);
  const socketUrl = "http://192.168.56.1:3231"
  function initSocket() {
    const s = io(socketUrl);
    s.on('connect', () => console.log('Connected'));
    setSocket(s);
  }

  function recieveUser(u) {
      socket.emit(USER_CONNECTED, u); 
      setUser(u); 
  }

  function logout() {
      socket.emit(LOGOUT); 
      setUser(null); 
  }

  useEffect(() => {
    initSocket();
  }, []);
  return <div className="container">{title}</div>;
}