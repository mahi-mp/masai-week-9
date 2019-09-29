import React from "react";
import { Button, Row, Col, Container } from 'react-bootstrap';

export default class search_company extends React.Component
	{
	constructor(props){
		super(props);
		this.state = {
			search_var:null
		}
	}

	handleInput = event => this.setState({[event.target.name] : event.target.value})

	render(){
		return (
			<React.Fragment>
				<input type = "text" onChange = {this.handleInput} name = "search_var" value = {this.state.search_var}  placeholder="Enter any digit to search" />
				 <Button variant="primary" onClick = {() => this.props.handleSearch(this.state.search_var)}>Search</Button>
			</React.Fragment>
		);
	}
}




// import React from "react";

// export default class search_company extends React.Component
// {
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			search_var:null
// 		}
// 	}

// 	handleInput = event => this.setState({[event.target.name] : event.target.value})

// 	render(){
// 		return (
// 			<React.Fragment>
// 				<input type = "text" onChange = {this.handleInput} name = "search_var" value = {this.state.search_var}/>
// 				<button 
// 					onClick = {() => this.props.handleSearch(this.state.search_var)}> 
// 					Search
// 				</button> 
// 			</React.Fragment>
// 		);
// 	}
// }