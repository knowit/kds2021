import { NONAME } from 'dns';
import React, { Component, useRef, useEffect } from 'react';
import LinesEllipsis from 'react-lines-ellipsis'; 
import { Transition, CSSTransition } from 'react-transition-group'; 
import { render } from "react-dom"; 
import Link from "next/link";

interface props {
    title: string;
    id: any;
    clamped?: boolean;
}

const ScheduleTitle = ({title, id, clamped}:props) => {

    let [over, setOver] = React.useState(false);

    return (
        <div 
            onMouseOver={()=>setOver(true)} 
            onMouseOut={()=>setOver(false)}>

            <div>
                <LinesEllipsis
                    style={{display: over? 'none' : 'block'}}
                    className='title'
                    text={title}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    isClamped='true'
                />
            </div>
            
            <Link href={`./talksAndSpeakers/#${encodeURIComponent(id)}`}>
                <a>
                    <h1 className="title" style={{display: over? 'block' : 'none'}}>
                        {title} 
                    </h1>
                </a>
            </Link>
        </div>
    );
}
export default ScheduleTitle;