import React, { useRef, useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom"
import { FaTimes, FaBars } from 'react-icons/fa';
import { FcBriefcase } from 'react-icons/fc';
import { BsBriefcaseFill } from 'react-icons/bs';
import '../styles/navbar.css';
// import { Link } from 'react-scroll';


export function Navigation() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive");
    }
    const hideNavbar = () => {
        navRef.current.classList.remove("responsive");
    }
    
    const divNavRef = useRef();
    const [nav_height, setNavigationHeight] = useState(-98);
    useEffect(() => {
        if (divNavRef.current) {
          const height = divNavRef.current.offsetHeight;
          setNavigationHeight(height);
        }
      }, []);
    const scroll_duration = 500;

    return (
        <div className="nav-container" ref={divNavRef}>
            <NavLink to="/" onClick={hideNavbar}>
                <FcBriefcase size={40} style={{backgroundColor:"#ccc", borderRadius:15, padding:5}}/>
            </NavLink>
            <nav ref={navRef}>
                <NavLink to="/" onClick={hideNavbar} className={({ isActive }) => (isActive ? "link-active" : "link")}>Home</NavLink>
                <NavLink to="/phrasalverbs" onClick={hideNavbar} className={({ isActive }) => (isActive ? "link-active" : "link")}>Phrasal Verbs</NavLink>
                <NavLink to="/auxcontractions" onClick={hideNavbar} className={({ isActive }) => (isActive ? "link-active" : "link")}>Aux Contractions</NavLink>
                <button className="nav-btn nav-btn-close" onClick={showNavbar}><FaTimes /></button>
            </nav>
            <button className="nav-btn nav-btn-bars" onClick={showNavbar}><FaBars /></button>
        </div>
    )
}