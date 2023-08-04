import React from 'react'
import CardMain from './CardMain'
import CardFooter from './CardFooter';

class Card extends React.Component {
	handleClick() {
	  console.log(this.props.data.key);
	  this.props.show(this.props.data.key);
	}

	render() {
	  return (
		<div className="recipe-card" onClick={this.handleClick.bind(this)}>
		  <CardMain title={this.props.data.title} img={this.props.data.img} />
		  <CardFooter />
		</div>
	  );
	}
  }
export default Card
