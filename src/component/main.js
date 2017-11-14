import React from 'react';
import Header from './js/Header';
import Footer from './js/Footer';
import Contents from './js/Contents';
import {BrowserRouter as Router} from 'react-router-dom';

class Home extends React.Component{
	render(){
		return (
		<Router>
			<div>
				<Header />
				<div style={{"width":"1080px", "margin":"0 auto"}}>
					<Contents />
				</div>
				<Footer />
			</div>
		</Router>
		);
	}
}

export default Home;