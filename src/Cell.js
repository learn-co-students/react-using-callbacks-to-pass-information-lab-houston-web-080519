import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  setCellColor = (hexColor) => {
    this.setState({
      color: hexColor
    })
  }
  
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={(e) => this.setCellColor(this.props.selectedColor, e)}>
      </div>
    )
  }
  
}
