import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      currentCharCount: 0,
      currentText: ''
    };
  }

  handleChange = event => {
    this.setState({
      currentText: event.target.value,
      currentCharCount: event.target.value.length,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.currentText} onChange={this.handleChange} />
        <strong>{this.props.maxChars - this.state.currentCharCount} characters left</strong>
      </div>
    );
  }
}

export default TwitterMessage;
