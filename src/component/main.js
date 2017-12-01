import React from 'react';
import Header from './js/Header';
import Footer from './js/Footer';
import Contents from './js/Contents';
import {BrowserRouter as Router} from 'react-router-dom';
import {Intl,addLocaleData,IntlProvider }  from 'react-intl';
import cn from './localization/cn';
import en from './localization/en';


addLocaleData(cn);
class Home extends React.Component{
	constructor(){
		super();
		this.state={
			currentLanguage:en
		};
		
	}
	render(){
		return (
		<IntlProvider locale={this.state.currentLanguage.locale} defaultLocale={this.state.currentLanguage.locale} messages={this.state.currentLanguage}>
			<Router>
				<div>
					<div style={{"width":"100%", height:'5%',"backgroundColor":"#fff","textAlign":"right"}}>
						<button onClick={()=>{
							let lan = this.state.currentLanguage.locale;
							console.log(lan);
							if(lan=="en"){this.setState({currentLanguage:cn});}
							if(lan=="cn"){this.setState({currentLanguage:en});}
						}} style={{"border":"none","backgroundColor":"#fff","color":"#8590a6",}}>{this.state.currentLanguage.change_language}</button>
					</div>
					<Header />
					<div style={{"width":"1080px", "margin":"0 auto"}}>
						<Contents />
					</div>
					<Footer />
				</div>
			</Router>
		</IntlProvider>
		);
	}
}

export default Home;