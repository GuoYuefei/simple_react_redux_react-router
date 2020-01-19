import * as counterTypes from '../actions/constants/CounterTypes';

const initialState = {
    pre: [],
    current: 0,
    next: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case counterTypes.ADD_COUNTER: {
            let pre = state.pre;
            pre.push(state.current);
            let current = state.current + 1;
            let next = [];
            return ({
                ...state,
                ...{
                    pre,
                    current,
                    next,
                }
            });
        }
        case counterTypes.DECREASE_COUNTER: {
            let pre = state.pre;
            pre.push(state.current);
            let current = state.current - 1;
            let next = [];
            return ({
                ...state,
                ...{
                    pre,
                    current,
                    next,
                }
            });
        }
        case counterTypes.REDO_COUNTER: {
            let pre = state.pre;
            let next = state.next;
            pre.push(state.current);
            let current = next.pop();
            return ({
                ...state,
                ...{
                    pre,
                    current,
                    next
                }
            });
        }
        case counterTypes.UNDO_COUNTER: {
            let pre = state.pre;
            let next = state.next;
            next.push(state.current);
            let current = pre.pop();
            return ({
                ...state,
                ...{
                    pre,
                    current,
                    next
                }
            });
        }
        default:
            return state;
    }
};