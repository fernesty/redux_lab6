import React from "react";
import {Text} from "react-native-web";
import {Button} from "react-native";

const handleDoubleClickDelete = (e, del) => {
    if (e.detail === 2) {
        del();
    }
}

class ProductCard extends React.Component {
    render() {
        return (
            <Text>
                <Button title={this.props.name} onPress={(e) => {
                    handleDoubleClickDelete(e, this.props.del)
                }}></Button>
                <Button title="-" onPress={this.props.decrement}></Button>
                {this.props.count}
                <Button title="+" onPress={this.props.increment}></Button>
            </Text>
        )
    }
}

export default ProductCard;