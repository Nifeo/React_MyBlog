import React from 'react';
import {Route, Link} from 'react-router-dom';
import {Intl,addLocaleData,FormattedMessage} from 'react-intl';
import '../css/style_header.css';
import hbt from "../image/hb.png";


export default class Header extends React.Component{	
	render(){
		return (
			<div id="wrap_header">
			<div style={{"width":"1080px", "margin":"0 auto"}}>
			<div id="nav_bar" style={{"width":"100%"}}>
				<ul className="nav" >
					<li><Link to="/freelancer"><FormattedMessage id="menu_item1" /></Link></li>
					<li><Link to="/resume"><FormattedMessage id="menu_item2" /></Link></li>
				</ul>
				<Link to="/"><img className="nav" src={hbt} style={{'width':'64px'}}></img></Link>
				<ul className="nav">
					<li><Link to="/relative_skill"><FormattedMessage id="menu_item3" /></Link></li>
					<li><Link to="/contact_me"><FormattedMessage id="menu_item4" /></Link></li>
				</ul>
			</div>
			</div>
			<Route exact path="/" component={Home}/>
			<Route exact path="/freelancer" component={AboutMe}/>
			<Route exact path="/resume" component={Resume}/>
			<Route exact path="/relative_skill" component={JobExperience}/>
			<Route exact path="/contact_me" component={ContactMe}/>
			</div>
		);
	}
}

const Home = () =>(
	<div className="self_intro">
		<div>
			<p><FormattedMessage id="brief_intro_home" /></p>
		</div>
	</div>
)

const AboutMe = () =>(
	<div className="self_intro">
		<p><FormattedMessage id="brief_intro_web_design" /></p>
	</div>
)
const Resume = () =>(
	<div className="self_intro">
		<img></img>
		<p><FormattedMessage id="brief_intro_resume" /></p>
	</div>
)
const JobExperience = () =>(
	<div className="self_intro">
		<p>this is on going page, some link may not available at this time</p>
	</div>
)
const ContactMe = () =>(
	<div className="self_intro">
		<p style={{"textAlign":"center"}}><FormattedMessage id="contact_title" /></p>
	</div>
)


