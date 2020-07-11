import React, { useState, useEffect } from 'react';

export default ()=>{

    const [text , setText ] = useState('programming');
    const [debounceText , setDebounceText ] = useState(text);
    const [searchResults, setSearchResults ] = useState([]);

    useEffect(()=>{
        const timeOutId = setTimeout(()=>{
            setDebounceText(text);
        },1000);

        return ()=>{
            clearTimeout(timeOutId);
        }
    },[text]);

    useEffect(()=>{

    fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&origin=*&format=json&srsearch=${debounceText}`)
    .then(response => response.json())
    .then(json => setSearchResults(json.query.search))

    },[debounceText]);

    const onclickHandler =({target})=>{
        setText(target.value);
    }
    return (
        <>
        <input onInput={onclickHandler} type="text"/>
        <div>
            <div>Search Results below:</div>
    { searchResults.map(el=>(
        <div>
            <div>{el.title}</div>
            <span dangerouslySetInnerHTML={{__html:el.snippet}}></span>
        </div>))
    }
        </div>
        </>
    )
}