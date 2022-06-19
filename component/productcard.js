import React from "react";
import {Text} from "react-native-web";
import {Button} from "react-native";
import {decrement, increment} from "../actions";

class ProductCard extends React.Component {
    render() {
        return (
            <Text>
                <Button title={this.props.name}></Button>
                <Button title="-" onPress={decrement}></Button>
                {this.props.count}
                <Button title="+" onPress={increment}></Button>
            </Text>
        )
    }
}

export default ProductCard;