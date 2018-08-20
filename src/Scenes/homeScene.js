import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';



export default class HomeScene extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            edit: '',
            todolist: [],
            modalVisible: false,
            editable: false,
            index: '',
            complete: [],
            modalOpacity: 1,
        }
    }
    //add item

    addItem = () => {
        const { todolist, text } = this.state;
        let newlist = todolist;
        newlist.push(text);
        this.setState({ text: '' });
        this.setState({ todolist: newlist, modalVisible: false });
    }
    //delete item

    delete(index) {
        let arr = this.state.todolist;
        this.state.complete.push(arr[index]);
        arr.splice(index, 1)
        console.log('array', this.state.complete);
        Actions.Complete(this.state);
        this.setState({ todolist: arr });
    }

    //editItem   

    editItem = () => {
        let list = this.state.todolist;
        list[this.state.index] = this.state.edit;
        setTimeout(() => {
            this.setState({ todolist: list, editable: false });
        }, 200)
        console.log('medha', list)
        this.setState({ edit: '' })
    }

    render() {

        const { todolist } = this.state;
        return (

            <View style={{ flex: 1, activeBackgroundColor: 'grey' }}>

                {/* to show whether list is empty or not*/}

                {todolist.length == 0 ?
                    <View style={{ alignItems: 'center', justifyContent: 'center', padding: 25 }}>
                        <Text style={{ fontSize: 25, color: '#8E24AA' }}> No Todo Found</Text>
                    </View>
                    :

                    <View style={{ flex: 1, padding: 30 }}>

                        <FlatList
                            data={this.state.todolist}
                            renderItem={({ item, index }) =>

                                <View style={styles.cardstyle}>
                                    <View style={{ flex: .05, borderBottomWidth: 1, borderBottomColor: '#C2C2C2' }}>
                                        <Text>{item}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', flex: .04, padding: 5 }}>
                                        <View style={{ flex: .6, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                                            <TouchableOpacity onPress={() => this.delete(index)} style={{ width: 60, height: 20 }}>
                                                <Text style={{ color: 'red', fontWeight: 'bold' }}>Delete</Text>
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{ flex: .4, flexDirection: 'row' }}>
                                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                <TouchableOpacity style={{ width: 60, height: 20 }} onPress={() => { this.setState({ editable: true, index: index }) }}>
                                                    <Text style={{ color: 'brown' }}>Edit</Text>
                                                </TouchableOpacity>
                                            </View>

                                            <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                                                <TouchableOpacity onPress={() => Actions.Complete()} style={{ width: 70, height: 20 }}>
                                                    <Text style={{ color: '#2193F6', fontWeight: 'bold' }}>Complete</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            }
                        />
                    </View>
                }

                {/* add touchable button for adding an item in flatlist*/}

                <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: '#8E24AA', right: 20, bottom: 20, position: 'absolute', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => this.setState({ modalVisible: true })}>
                        <Text style={{ color: 'white', fontSize: 30, alignSelf: 'center' }}>+</Text>
                    </TouchableOpacity>
                </View>

                {/*  modal scene or popup for add an item */}

                {this.state.modalVisible ?
                    <View style={styles.box}>
                        <View style={{ flex: .6, margin: 5, height: 100, width: 300, alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: 'white' }}>
                            <Text style={{ fontSize: 20 }}>Create a new todo</Text>

                            <TextInput style={{ width: 250, height: 150, borderWidth: 1, borderColor: '#979797', fontSize: 20, margin: 10 }}
                                placeholder="Write here"
                                onChangeText={(text) => this.setState({ text: text })}
                                value={this.state.text} />

                            <View style={{ margin: 10, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                <TouchableOpacity onPress={() => this.addItem()} style={{ width: 250, height: 40, backgroundColor: '#8E24AA', borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: 'white', fontSize: 20 }}>SUBMIT</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    : null}

                {/* popup for edit*/}

                {this.state.editable ?
                    <View style={styles.box}>
                        <View style={{ flex: .6, margin: 5, height: 100, width: 300, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
                            <Text style={{ fontSize: 20 }}>Edit todo</Text>

                            <TextInput style={{ width: 250, height: 150, borderWidth: 1, borderColor: '#979797', fontSize: 20 }}
                                placeholder="update here"
                                onChangeText={(text) => this.setState({ edit: text })}
                                value={this.state.edit} />

                            <View style={{ padding: 15 }}>
                                <TouchableOpacity onPress={() => this.editItem()} style={{ width: 250, height: 40, backgroundColor: '#8E24AA', borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: 'white', fontSize: 20 }}>SUBMIT</Text>
                                </TouchableOpacity>
                            </View>
                        </View></View>
                    : null}
            </View>

        )
    }
}

const styles = StyleSheet.create({
    header: {
        padding: 10,
        height: 80,
        backgroundColor: '#8E24AA'

    },
    text: {
        fontSize: 30,
        color: 'white'
    },
    cardstyle: {
        flex: .01,
        borderRadius: 25,
        padding: 30,
        width: 350,
        borderBottomColor: '#979797',
        borderBottomWidth: 4,
        backgroundColor: '#DEDEDE',
        margin: 5

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 15,
        left: 20,
        backgroundColor: '#8E24AA'

    },
    box: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',

    }

})









