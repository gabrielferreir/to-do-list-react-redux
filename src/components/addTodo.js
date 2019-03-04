import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateList, updateInput } from '../actions';

class AddTodo extends Component {

  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.pressEnter = this.pressEnter.bind(this);
  }

  componentDidMount() {
    document.querySelector('input')
      .focus();
  }

  pressEnter(event) {
    if (event.keyCode === 13) {
      this.submit();
    }
  }

  submit = () => {
    this.props.updateList(this.props.inputValue);
    document.querySelector('input')
      .focus();
  };

  render() {
    const { updateInput, inputValue } = this.props;
    return (
      <div className="content-field">
        <input type='text' placeholder="Digite e aperte enter para adicionar a lista"
               onKeyDown={this.pressEnter}
               className="ui-text-field" onChange={event => {
          updateInput(event.target.value);
        }} value={inputValue || ''}/>

        <i className="material-icons icon-add" onClick={this.submit}>add</i>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  inputValue: store.clickState.inputValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    updateList,
    updateInput
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
