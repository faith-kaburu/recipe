import React from 'react'
import '../styles/layout.css'


class CardMain extends React.Component {
	render() {
	  var heroDiv;
	  if (this.props.img) {
		heroDiv = (
		  <div
			className="card__hero"
			style={{
			  background: "url(" + this.props.img + ")",
			  backgroundSize: "100% auto",
			  backgroundPosition: "center center"
			}}
		  />
		);
	  } else {
		heroDiv = <div className="card__hero" />;
	  }
	  return (
		<main className="card__main">
		  {heroDiv}
		  <header className="card__header">
			<h2 className="card__title"> {this.props.title} </h2>
		  </header>
		</main>
	  );
	}
  }
export default CardMain
