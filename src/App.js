import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {checkItem, updateList, updateInput, deleteItem} from './actions';
import './App.css';
import AddTodo from './components/addTodo';

class App extends Component {

    render() {
        const {list, checkItem, deleteItem} = this.props;
        return (
            <div className="App">

                <header className="ui-toolbar">
                    <div className="ui-header">
                        <h1 className="ui-toolbar__title">TO DO LIST</h1>
                    </div>
                    <div className="header-space"></div>
                </header>

                <section className="ui-content">

                    <section className="ui-card">

                        <div className="card__toolbar">
                            Checklist
                        </div>

                        <AddTodo/>

                        <div>
                            <ul>
                                {list.map((item, index) => {
                                    return (<li className="ui-list-item" key={'item' + index}>
                                        <div>
                                            <input type="checkbox" checked={item.checked} onChange={() => {
                                                checkItem(index);
                                            }}/>
                                            <span className="ui-list-item-title">{item.name}</span>
                                        </div>
                                        <i className="material-icons pointer" onClick={() => {
                                            deleteItem(index);
                                        }}>clear</i>
                                    </li>);
                                })}

                                {(!list || !list.length) && <li className="ui-list-item ui-list-without-item">
                                    Nenhum item na lista
                                </li>}
                            </ul>
                        </div>

                    </section>

                </section>

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
    bindActionCreators({checkItem, updateList, updateInput, deleteItem}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);