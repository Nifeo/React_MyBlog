import React from 'react';
import Header from './js/Header';
import Footer from './js/Footer';
import './css/style_main.css';
import {BrowserRouter} from 'react-router-dom';

class Home extends React.Component{
	render(){
		return (
			<div id="wrap_main">
				<Header />
				<div id="wrap_temp">
					<div id="temp1"></div>
					<div id="temp">
						<h1>what's next</h1>
						<ol>
							<li>update from new folder</li>
							<li>image!image!image!</li>
						</ol>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Home;