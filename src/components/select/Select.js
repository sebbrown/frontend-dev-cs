import React from 'react';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue,
    }
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({value});
  }

  render() {
    const { label } = this.props;
    
    return (
      <label>
        {label}
        <select value={this.state.value} onChange={(e) => this.handleChange(e)}>
          <option value={this.props.defaultValue}>{this.props.defaultValue}</option>
          
        </select>
      </label>
    );
  }
}

export default Select;