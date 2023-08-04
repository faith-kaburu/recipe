import React from "react";
import '../styles/layout.css'


class BoxFooter extends React.Component {
	render() {
	  return (
		<footer className="box__footer">
		  <button className="delete-btn-box" onClick={this.props.delete} >Delete
		  </button>
		  <button onClick={this.props.toggleEdit} className="edit-btn-box">
				 Edit
		  </button>
		</footer>
	  );
	}
  }

export default BoxFooter
