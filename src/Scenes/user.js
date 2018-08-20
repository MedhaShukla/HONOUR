import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import PopupDialog from 'react-native-popup-dialog';
import {Actions} from 'react-native-router-flux';


export default class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: [],
            text: '',
            editable: false,
            edit: '',
            complete: [],
            index:-1

        }
    }
    addItem() {
        const { todo, text } = this.state;
        let todos = todo;
        todos.push(text);
        console.log('medha', todos)
        this.setState({ todo: todos, text: '' });
        this.popupDialog.dismiss();
    }
    deleteItem(index) {
        let todos = this.state.todo;
        this.state.complete.push(todos[index]);
        todos.splice(index, 1);
        console.log('', this.state.complete);
        setTimeout(() => {
            Actions.COMPLETE(this.state);
        }, 200)
        this.setState({ todo: todos});

    }
    editItem() {
        let todos = this.state.todo;
        todos[this.state.index] = this.state.edit;
        setTimeout(() => {
            this.setState({ todo: todos, editable: false });
        }, 200)
        console.log('medha', todos)
        this.setState({ edit: '' });
        this.popupDialog.dismiss();
    }

    onPressEdit = () => {
        this.setState({ editable: true });
    }

    render() {
        const { todo } = this.state;

        return (
            <View style={{ flex: 1 }}>

                <View style={{ height: 40, backgroundColor: 'blue' }}><Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>TODO</Text></View>
                {todo.length == 0 ?

                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <Text style={{ color: 'black', fontSize: 20 }}> No Todo</Text>
                    </View>
                    :

                    <View style={{ flex: 1, padding: 10 }}>
                        <FlatList
                            data={this.state.todo}
                            renderItem={({ item, index }) =>

                                <View style={{ borderRadius: 25, padding: 20, borderBottomWidth: 3, borderBottomColor: '#979797', backgroundColor: '#DEDEDE', margin: 3 }}>
                                    <View style={{ flex: .03, borderBottomWidth: 1, borderBottomColor: '#C2C2C2' }}>
                                        <Text>{item}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                                            <TouchableOpacity style={{ width: 60, height: 30 }} onPress={() => this.deleteItem(index)}>
                                                <Text style={{ color: 'red', fontWeight: 'bold' }}> Delete</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                                <TouchableOpacity onPress={() => { this.popupDialog.show(), this.setState({ editable: true, index:index }) }} style={{ width: 60, height: 30 }}>
                                                    <Text style={{ color: 'brown' }}>Edit</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                                                <TouchableOpacity style={{ width: 70, height: 30 }}>
                                                    <Text style={{ color: '#1E88E5', fontWeight: 'bold' }}>Complete</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            } />
                    </View>
                }

                <View style={{ alignitems: 'flex-end', justifyContent: 'flex-end', posititon: 'absolute', bottom: 20, right: 0, left: 300}}>
                    <TouchableOpacity onPress={() => this.popupDialog.show()} style={{ borderRadius: 25, width: 50, height: 50, backgroundColor: 'blue' }} >
                        <Text style={{ alignSelf: 'center', fontSize: 35, color: 'white' }}>+</Text>
                    </TouchableOpacity>
                </View>



                {this.state.editable ?

                    <PopupDialog ref={(popupDialog) => this.popupDialog = popupDialog}>
                        <View style={styles.box}>
                            <View style={{ flex: 1, margin: 3, alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: 'white' }}>
                                <Text style={{ fontSize: 20 }}>Edit Item</Text>

                                <TextInput style={{ width: 250, height: 100, borderWidth: 1, borderColor: '#979797', fontSize: 20, margin: 10 }}
                                    placeholder="edit here"
                                    onChangeText={(text) => this.setState({ edit: text })}
                                    value={this.state.edit} />

                                <View style={{ margin: 5, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                    <TouchableOpacity onPress={() => this.editItem()} style={{ width: 250, height: 40, backgroundColor: 'blue', borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: 'white', fontSize: 20 }}>SUBMIT</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </PopupDialog>
                    :
                    <PopupDialog ref={(popupDialog) => this.popupDialog = popupDialog}>
                        <View style={styles.box}>
                            <View style={{ flex: 1, margin: 3, alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: 'white' }}>
                                <Text style={{ fontSize: 20 }}>Create a new todo</Text>

                                <TextInput style={{ width: 250, height: 100, borderWidth: 1, borderColor: '#979797', fontSize: 20, margin: 10, alignItems:'flex-start' }}
                                    placeholder="Write here"
                                    onChangeText={(text) => this.setState({ text: text })}
                                    value={this.state.text} />

                                <View style={{ margin: 5, alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                                    <TouchableOpacity onPress={() => this.addItem()} style={{ width: 250, height: 40, backgroundColor: 'blue', borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: 'white', fontSize: 20 }}>SUBMIT</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </PopupDialog>
                }

            </View>
        )
    }

}
const styles = StyleSheet.create({
    box: {
        backgroundColor: 'white',
        width: 280,
        height: 200,
        position: 'absolute',
        top: 20,
        left: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    }
})
