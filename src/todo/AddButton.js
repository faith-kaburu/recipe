import React from 'react'
import '../styles/layout.css'

class AddButton extends React.Component {
	render() {
	  return (
		<button className="add-btn" onClick={this.props.toggleHidden}>
		  Add recipe
		</button>
	  );
	}
  }

export default AddButton
