import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Complete extends Component {

    constructor(props) {
        super(props);
        console.log(props,'hellos');
       this.state = this.props.complete;
    
        console.log('moo', this.state);
    }

    

    render() {
        return (
            <View style={{ flex: 1, margin: 5, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
              
                <Text style={{ color: '#8E24AA', fontSize: 20 }}>{this.state}</Text>
            </View>

        )
    }

}