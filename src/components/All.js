import React from "react";
import { Button, Row, Col, Container, Card } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from "axios";
export default class All extends React.Component
{
	constructor(props){
		super(props)
		this.state=({
			itm:[],
			clicked:false,
			ind:Math.random()
		});
	}
	componentDidMount()
	{
		axios({
			method: 'get',
    		url: 'https://raw.githubusercontent.com/masai-school/assignments-data/master/data/dummy/json/company_valuations.json',
		})
		.then((response) =>{
			this.setState({
				itm:response.data
			});	
		})
		.catch((err) => alert(err))
	}
	componentDidUpdate(prevProps)
	{
		if(this.props.search_var !== prevProps.search_var)
		{
			axios({
			method: 'get',
    		url: 'https://raw.githubusercontent.com/masai-school/assignments-data/master/data/dummy/json/company_valuations.json',
			})
			.then((response) =>{
				this.setState({
					itm:response.data
			});	
			})
			.catch((err) => alert(err))
		}
	}

	isClicked=()=>{
		this.setState({

		clicked:!this.state.clicked
		});

		if (this.state.clicked) 
		{
				
			this.state.output.map((itm)=>
			{
				console.table(itm)
			return(
				<React.Fragment key={itm.id}>
				<Card className="text-center" border="danger" style={{ width: '18rem' }}>
				<Card.Header as="h5">Company Details</Card.Header>
				<Card.Body>
				<Card.Title >{itm.title} </Card.Title>
				<Card.Text >
				<p classNamme="leads">Stock Symbol : {itm.stock_symbol}</p>
				<p classNamme="leads">Stock Price : {itm.stock_price}</p>
				<p classNamme="leads">Market Cap : {itm.market_cap}</p>
				</Card.Text>
				</Card.Body>
				</Card>
				</React.Fragment>
				);
			})
			
		}
	}
	render()
	{
		return(<Button variant="primary"  onClick = {this.isClicked}>All</Button>);
	}
}