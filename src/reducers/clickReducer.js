import {CLICK_UPDATE_VALUE, UPDATE_LIST, UPDATE_INPUT} from '../actions/actionTypes';

const initialState = {
    inpuValue: '',
    lastValue: '',
    list: []
};
export const clickReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case CLICK_UPDATE_VALUE:
            return {
                ...state,
                lastValue: action.lastValue
            };
        case UPDATE_LIST:
            return {
                ...state,
                list: [
                    ...state.list,
                    action.value
                ]
            };
        case UPDATE_INPUT:
            return {
                ...state,
                inputValue: action.value.target.value
            };
        default:
            return state;
    }
};