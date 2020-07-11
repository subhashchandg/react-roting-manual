import React from 'react';

export default ({children, to})=>{
    const clickHandler = ()=>{
        history.pushState({}, "", to);
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
return <div onClick={clickHandler}>{children}</div>
}