import React, { Component } from 'react';
import { Text,View } from 'react-native';

export default class CompleteScene extends Component {

    constructor(props) {
        super(props);
        console.log(props, 'state');
        this.state= this.props.complete;
        //['medha','shukla', 'sbhjhcj']
        console.log('med', this.state)
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems:'center', justifyContent:'center' }}>
                        <Text style={{ color: 'blue', fontSize: 20}}>{this.state}</Text>
                        </View>
        )
    }

}