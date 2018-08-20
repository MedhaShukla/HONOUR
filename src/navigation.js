import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Text } from 'react-native';
import CompleteScene from '../src/Scenes/CompleteScene';
import User from '../src/Scenes/user';


const TabIcon = ({ selected, title }) => {
    return (
        <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>

    )
}

export default class Navigator extends Component {
    render() {
        return (
            <Router>
                <Scene key="tabbar"
                    tabs={true}
                    avtiveTintColor="grey"
                    activeBackgroundColor='white'
                >
                    <Scene key="Pending" title="Pending" icon={TabIcon}>
                        <Scene key='USER' component={User} />
                    </Scene>
                    <Scene key="COMPLETED" icon={TabIcon} title="Completed" >
                    <Scene key="COMPLETE" component={CompleteScene} />
                </Scene>
                </Scene>
            </Router>
        )
    }
}
