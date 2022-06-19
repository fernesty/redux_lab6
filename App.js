import React from "react";
import {Text, View} from "react-native-web";
import {Provider} from "react-redux";
import {createStore} from "@reduxjs/toolkit";
import {storemanager} from "./reducer";
import Counter from "./component/counter";



export default function App() {
    return (<View>
        <Provider store={store}>
            <Text>Здравствуйте, Тигран</Text>
            <Counter/>
        </Provider>
    </View>)
}

const store = createStore(storemanager)
