import React from 'react'
import IconButton from '../../template/iconButton'

export default props => {

  const keyHandler = (e) => {
    if(e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if (e.key === 'Escape') {
      props.handleClear()
    }
  }

  return (
    <div role='form' className='todoForm'>
      <div className="col-xs-12 col-sm-9 col-md-10">
        <input type="text" className='form-control' placeholder='Adicione uma tarefa'
        onChange={props.handleChange} value={props.description} onKeyUp={keyHandler} />
      </div>
      <div className="col-xs-12 col-sm-3 col-md-2">
        <IconButton btnStyle='primary' icon='plus' onClick={props.handleAdd} />
        <IconButton btnStyle='info' icon='search' onClick={props.handleSearch} />
        <IconButton btnStyle='secondary' icon='close' onClick={props.handleClear} />
      </div>
    </div>
  )
}