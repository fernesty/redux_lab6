import {AT_DEC, AT_DEL, AT_INC} from "../actions";

const product = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const defState = [
    {id: 1, name: 'Велосипед', count: 5},
    {id: 2, name: 'Самокат', count: 3},
    {id: 3, name: 'Ролики', count: 7}
]

const storemanager = (state = defState, action) => {
    switch (action.type) {
        case AT_INC:
            state[2].count++;
            return state;
        case AT_DEC:
            state[2].count--;
            return state;
        case AT_DEL:
            delete state[2];
            return state;
        default:
            return state;
    }
}


export {product, storemanager}