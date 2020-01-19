import * as counterTypes from './constants/CounterTypes';

export const addCounter = () => ({ type: counterTypes.ADD_COUNTER });
export const decreaseCounter = () => ({ type: counterTypes.DECREASE_COUNTER });
export const redoCounter = () => ({ type: counterTypes.REDO_COUNTER });
export const undoCounter = () => ({ type: counterTypes.UNDO_COUNTER });