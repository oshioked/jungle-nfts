import React, { useRef, useState, useEffect, useContext } from 'react';
import './NavTogglerIcon.scss';
import gsap from 'gsap';
import { MenuContext } from '../../context/menu.context';

const NavTogglerIcon = props =>{
    const svgRef = useRef(null);
    const {hidden} = useContext(MenuContext);
    const tl = useState(gsap.timeline({paused: true}))[0];
    const fillColor = props.fillColor || "#305017";


    useEffect(()=>{
        const rectsRef = [...svgRef.current.children];
        tl
            .to(rectsRef[0], {
                duration: .4,
                y: (svgRef.current.clientHeight) / 2
            })
            .to(rectsRef[2], {
                duration: .4,
                y: -(svgRef.current.clientHeight) / 2
            }, '0')
            .set(rectsRef[1], {
                opacity: 0
            })
            .to(rectsRef[0], {
                transformOrigin: 'center',
                rotate: 45,
            }, 'same')
            .to(rectsRef[2], {
                transformOrigin: 'center',
                rotate: -45
            }, 'same')
    }, [tl])

    useEffect(()=>{
        if(!hidden){
            tl.play()
        }else{
            tl.reverse()
        }
    }, [hidden])

    return(
        <svg className = "toggle-svg" ref = {svgRef} width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y = "0" width="25" height="2" fill={fillColor}/>
        <rect y="7" width="25" height="2" fill={fillColor}/>
        <rect y="14" width="25" height="2" fill={fillColor}/>
        </svg>
        
    )
}

export default NavTogglerIcon;