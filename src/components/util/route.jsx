import React, {useEffect, useState} from 'react';

export default ({path, component : ComponentToRender})=>{

    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(()=>{
        window.addEventListener('popstate',()=>{
            setCurrentPath(window.location.pathname);
        })
    },[currentPath]);

    return window.location.pathname === path ? <ComponentToRender/> :null;
}