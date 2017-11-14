import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/main';
import {BrowserRouter} from 'react-router-dom';
ReactDOM.render(<BrowserRouter><div style={{"backgroundColor":"#f3f3f3"}}><Home /></div></BrowserRouter>, document.getElementById('root'));
