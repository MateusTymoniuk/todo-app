import React, { Component } from 'react'
import IconButton from '../../template/iconButton'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, changeDescription, clear, search } from './todoActions'

class TodoForm extends Component {

  componentDidMount() {
    this.props.search();
  }

  keyHandler = (e) => {

    const { add, clear, description, search } = this.props

    if(e.key === 'Enter') {
      e.shiftKey ? search() : add(description)
    } else if (e.key === 'Escape') {
      clear()
    }
  }

  render() {

    const { add, clear, description, search } = this.props

    return (
      <div role='form' className='todoForm'>
        <div className="col-xs-12 col-sm-9 col-md-10">
          <input type="text" className='form-control' placeholder='Adicione uma tarefa'
          onChange={this.props.changeDescription} value={description} onKeyUp={this.keyHandler} />
        </div>
        <div className="col-xs-12 col-sm-3 col-md-2">
          <IconButton btnStyle='primary' icon='plus' onClick={() => add(description)} />
          <IconButton btnStyle='info' icon='search' onClick={search} />
          <IconButton btnStyle='secondary' icon='close' onClick={clear} />
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => ({ description: state.todo.description })

const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, clear, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)