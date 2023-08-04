import React from 'react'
import BoxesContainer from './BoxesContainer';
import '../styles/layout.css'


class Layout extends React.Component {
	constructor() {
	  super();
	  this.state = {
		data: []
	  };
	}

	render() {
	  return <BoxesContainer />;
	}
  }

export default Layout;
