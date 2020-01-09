import React, { Component } from 'react'

export class AddToDo extends Component {
   
   
   

  render() {
    return (
      <form  onSubmit={this.props.onSubmit} style={{ display: 'flex'}}>
        <input type="text" name='title' placeholder='Add Item ...' 
        value={this.props.newItem}
        style={{flex: '10', padding: '5px' }}  onChange={this.props.onChange}  />

        <input type="submit" value="Add"  className='btn' style={{flex: '1'}}/>
      </form>
    )
  }
}

export default AddToDo