import React, { Component } from 'react';
import { Router, Scene, TabNavigator } from 'react-native-router-flux';
import { Text, View } from 'react-native';
import HomeScene from './homeScene';
import Complete from './Complete';



const TabIcon = ({ selected, title }) => {
    return (
        <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>

    )
}

export default class Navigation extends Component {
    render() {
        return (
            <Router navigationBarStyle={styles.navbar}>
                <Scene key="root">
                    {/* <TabNavigator navTintColor="#8E24AA" backgroundColor="#8E24AA"> */}

                    <Scene key="tabbar"
                        tabs={true}
                        activeTintColor="black"
                        activeBackgroundColor='white'
                        title="TODO"
                        titleStyle={styles.titleStyle}
                        initial
                    >
                        <Scene key="Pending"  title="Pending" icon={TabIcon} >
                            <Scene key="HomeScene"
                                component={HomeScene}
                                initial />
                        </Scene>

                        <Scene key="Complete" title="Complete" icon={TabIcon} >
                            <Scene key="Complete"
                                component={Complete} />
                        </Scene>
                    </Scene>
                    {/* </TabNavigator>  */}
                

                </Scene>
            </Router>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        color: 'white',
        backgroundColor: '#8E24AA'

    },
    navbar: {
        backgroundColor: '#8E24AA'

    }



}