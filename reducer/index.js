import {AT_ADD, AT_DEC, AT_DEL, AT_INC} from "../actions";


const product = (state, action) => {
    let newState;
    switch (action.type) {
        case AT_INC:
            newState = Object.assign({}, state);
            newState.count++;

            return newState;
        case AT_DEC:
            newState = Object.assign({}, state);
            newState.count--;
            if (newState.count < 0) {
                newState.count = 0;
            }
            return newState;
        default:
            return state;
    }
}

const defState = [
    {id: 1, name: 'Велосипед', count: 5},
    {id: 2, name: 'Самокат', count: 3},
    {id: 3, name: 'Ролики', count: 7}
]

const storemanager = (state = defState, action) => {
    let productIndex;
    let changedProduct;
    let newState;
    let newStateArray = [];

    switch (action.type) {
        case AT_INC:
            productIndex = getStateIndexByID(state, action.id);
            changedProduct = product(state[productIndex], action);
            newState = Object.assign({}, state);
            newStateArray = [];
            for (let i = 0; i < state.length; i++) {
                newStateArray.push(newState[i])
            }
            newStateArray[productIndex] = changedProduct;
            return newStateArray;
        case AT_DEC:
            productIndex = getStateIndexByID(state, action.id);
            changedProduct = product(state[productIndex], action);
            newState = Object.assign({}, state);
            newStateArray = [];
            for (let i = 0; i < state.length; i++) {
                newStateArray.push(newState[i])
            }
            newStateArray[productIndex] = changedProduct;
            return newStateArray;
        case AT_DEL:
            newState = Object.assign({}, state);
            newStateArray = [];
            for (let i = 0; i < state.length; i++) {
                if (i === getStateIndexByID(state, action.id)) {
                    continue;
                }
                newStateArray.push(newState[i])
            }
            return newStateArray;
        case AT_ADD:
            newState = Object.assign({}, state);
            newStateArray = [];
            for (let i = 0; i < state.length; i++) {
                newStateArray.push(newState[i])
            }
            newStateArray.push({id:Date.now(), name:action.text, count:1});
            return newStateArray;
        default:
            return state;
    }
}
const getStateIndexByID = (state, id) => {
    for (let i = 0; i < state.length; i++) {
        if (state[i].id === id) {
            return i;
        }
    }
    return -1;
}


export {product, storemanager}