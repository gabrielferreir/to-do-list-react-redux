import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {clickButton, updateList, updateInput} from './actions';
import './App.css';

class App extends Component {
    render() {
        const {clickButton, updateList, updateInput, lastValue, list, inputValue} = this.props;
        return (
            <div className="App" style={{paddingTop: '10px'}}>
                <input type='text' onChange={updateInput} value={inputValue}/>
                <button onClick={() => {
                    updateList(inputValue);
                    clickButton(inputValue);
                }}>
                    Click me!
                </button>
                <h1>{lastValue}</h1>
                <div>
                    <span>Lista</span>
                    <ul>
                        {list.map(item => {
                            return (<li>{item}</li>);
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    lastValue: store.clickState.lastValue,
    list: store.clickState.list,
    inputValue: store.clickState.inputValue
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({clickButton, updateList, updateInput}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);