import React from 'react';
import Header from './js/Header';
import Footer from './js/Footer';
import Contents from './js/Contents';

//import {BrowserRouter} from 'react-router-dom';

class Home extends React.Component{
	render(){
		return (
			<div style={{"width":"1080px", "margin":"0 auto", }}>
				<Header />
				<Contents />
				<Footer />
			</div>
		);
	}
}

export default Home;