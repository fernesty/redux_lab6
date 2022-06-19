import {connect} from "react-redux";
import React from "react";
import {increment, decrement, reset, addProduct} from "../actions";
import {View} from "react-native-web";
import Productcard from "./productcard";

class Counter extends React.Component {
    render() {
        const {counter, increment, decrement, del} = this.props;
        return (
            <View>
                <input type="text" onKeyPress={(e)=>{if(e.key==='Enter'){this.props.add(e.target.value)}}}/>
                {counter.map(p => <Productcard key={p.id} name={p.name} count={p.count}
                                               increment={() => increment(p.id)} decrement={() => decrement(p.id)}
                                               del={() => del(p.id)}/>)}
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
        increment: (id) => {
            dispatch(increment(id))
        },
        decrement: (id) => {
            dispatch(decrement(id))
        },
        del: (id) => {
            dispatch(reset(id))
        },
        add: (text) => {
            dispatch(addProduct(text))
        }
    }
}
export default connect(mapstate, mapdispatch)(Counter);