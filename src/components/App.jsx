import React from 'react';
import Header from './header/header';
import Route from './util/route';
import Accordion from './accordion/accordion';
import Search from './search/search';
import DropDown from './dorpdown/dropdown';
import Translate from './translate/translate';

export default ()=>{

    return (
        <>
        <Header/>
        <Route path='/' component= {()=> <Accordion label='Select a Color'/> }/>
        <Route path='/search' component= {Search}/>
        <Route path='/dropdown' component= {DropDown}/>
        <Route path='/translate' component= {Translate}/>
        </>
    );

}