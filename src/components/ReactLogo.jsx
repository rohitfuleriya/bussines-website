import React from 'react';
import { BiAtom } from "react-icons/bi";


const ReactLogo = ({ type, size }) => {
    const style = type === 'static' ? '' : 'hover:scale-125 hover:rotate-180 duration-1000';

    return (
        <div className='text-emerald-400'>
            <BiAtom className={style} size={size} />
        </div>
    );
}

export default ReactLogo;