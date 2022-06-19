import {connect} from "react-redux";
import React from "react";
import {increment, decrement, reset} from "../actions";
import {View} from "react-native-web";
import Productcard from "./productcard";

class Counter extends React.Component {
    render() {
        const {counter, increment, decrement, reset} = this.props;
        return (
            <View>
                {counter.map(p => <Productcard key={p.id} name={p.name} count={p.count}/>)}
            </View>
        )
    }
}

const mapstate = (state) => {
    return {
        counter: state
    }
}
const mapdispatch = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        },
        reset: () => {
            dispatch(reset())
        },
    }
}
export default connect(mapstate, mapdispatch)(Counter);