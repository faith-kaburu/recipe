import React from 'react'

class CardHeader extends React.Component {

	render() {
		return (
			<header
				className="card__header">
				{this.props.title}
			</header>
		);
	}

}

export default CardHeader