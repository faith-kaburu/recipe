import React from "react";
import AddButton from "./AddButton";
import AddRecipe from "./AddRecipe";
import '../styles/layout.css'


class HeaderHeader extends React.Component {
	constructor() {
	  super();
	  this.state = {
		isHidden: true
	  };
	}

	toggleHidden() {
	  if (this.state.isHidden) {
		this.setState({ isHidden: false });
	  } else {
		this.setState({ isHidden: true });
	  }
	}

	render() {
	  return (
		<header className="page__header">
		  <div className="container flex-container">
			<h1>My Recipes</h1>
			<AddButton toggleHidden={this.toggleHidden.bind(this)} />
		  </div>
		  {!this.state.isHidden && (
			<AddRecipe
			  add={this.props.add}
			  toggleHidden={this.toggleHidden.bind(this)}
			/>
		  )}
		</header>
	  );
	}
  }

export default HeaderHeader;
