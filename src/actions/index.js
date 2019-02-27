import {CLICK_UPDATE_VALUE, UPDATE_INPUT, UPDATE_LIST} from './actionTypes';

export const clickButton = value => ({
    type: CLICK_UPDATE_VALUE,
    lastValue: value
});

export const updateList = value => ({
    type: UPDATE_LIST,
    value: value
});

export const updateInput = value => ({
    type: UPDATE_INPUT,
    value: value
});