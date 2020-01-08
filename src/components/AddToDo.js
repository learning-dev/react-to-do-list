import React, { Component } from 'react'

export class AddToDo extends Component {
    state = {
      title: ''
    }
  
    onChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit = (event) => {
      event.preventDefault();
      this.props.addToDo(this.state.title)
      this.setState({ title: ''})
    }

  render() {
    return (
      <form  onSubmit={this.onSubmit} style={{ display: 'flex'}}>
        <input type="text" name='title' placeholder='Add Item ...' 
        style={{flex: '10', padding: '5px' }} value={this.state.title} onChange={this.onChange}  />
        <input type="submit" value="Add"  className='btn' style={{flex: '1'}}/>
      </form>
    )
  }
}

export default AddToDo