import React from "react";
import Card from './Card'
import '../styles/layout.css'


class Index extends React.Component {
	render() {
	  const data = this.props.data,
		tileNodes = data.map((data) => {
		  return <Card show={this.props.show} data={data} />;
		});
	  return (
		<div className="container">
		  <main className="card-container">{tileNodes}</main>
		</div>
	  );
	}
  }

export default Index
