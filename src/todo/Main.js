import React from "react";
import {toMarkdown} from "markdown-it"
import {marked} from "marked";


class Main extends React.Component {
	handleChangeImg(e) {
	  this.props.update({ img: e.target.value });
	}

	handleChangeInstructions(e) {
	  // Change ingredients to html of editable elements
	  const re = /(?:\r\n|\r|\n)/g;
	  const str = toMarkdown(e.target.innerHTML);
	  this.props.update({ instructions: str });
	}

	handleChangeIngredients(e) {
	  // Change ingredients to html of editable elements
	  const re = /(?:\r\n|\r|\n)/g;
	  const str = e.target.innerText.replace(re, "\n\n");
	  this.props.update({ ingredients: str });
	}

	rawMarkup(text) {
	  var rawMarkup = marked(text);
	  return { __html: rawMarkup };
	}

	render() {
	  const editable = this.props.editable;
	  const editImg = (
		<input
		  type="text"
		  onChange={this.handleChangeImg.bind(this)}
		  value={this.props.img}
		/>
	  );
	  return (
		<main className="box__main">
		  <div className="row">
		  <div className="column six">
			  <img src={this.props.img} className="box__img"   />
			  {editable && editImg}
			</div>
			<div className="column six">
			  <h3 className="box__subheading">Ingredients</h3>
			  <p
				className="box__ingredients"
				contentEditable={editable ? true : false}
				onBlur={this.handleChangeIngredients.bind(this)}
				dangerouslySetInnerHTML={this.rawMarkup(this.props.ingredients)}
			  />
			</div>

		  </div>
		  <h3 className="box__subheading">Instructions</h3>
		  <p
			className="box__instructions"
			contentEditable={editable ? true : false}
			onBlur={this.handleChangeInstructions.bind(this)}
			dangerouslySetInnerHTML={this.rawMarkup(this.props.instructions)}
		  />
		</main>
	  );
	}
  }

  export default Main
