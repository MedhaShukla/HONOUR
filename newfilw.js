import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

export default class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: ['data1', 'data2', 'data3']
        }
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.state.todo}
                    renderItem={(item,index) => 
                    <View style={{ flex: .05, borderRadius: 25 , padding: 20, borderWidth: 2 }}>
                        <View style={{ flex: .03, borderBottomWidth: 1 }}>
                            <Text>focus on work</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                        <View style={{flex:1,alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                            <TouchableOpacity style={{ width: 60, height: 30 }}>
                                <Text style={{ color: 'red' }}>delete</Text>
                            </TouchableOpacity>
                            </View>
                            <View style={{flex:1, flexDirection: 'row'}}>
                            <View style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                            <TouchableOpacity style={{ width: 60, height: 30 }}>
                                <Text style={{ color: 'brown' }}>edit</Text>
                            </TouchableOpacity></View>
                            <View style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                            <TouchableOpacity style={{ width: 60, height: 30 }}>
                                <Text style={{ color: '#1E88E5' }}>complete</Text>
                            </TouchableOpacity></View>
                            </View>
                        </View>
                    </View>
                    }
                />
            </View>
         )
    }

}