import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class GetData extends Component {
    state ={
        users: []
    }

    componentDidMount() {
        fetch('http://192.168.0.107:4000/users')
        .then(res => res.json ())
        .then(users => this.setState({
            users
        }))
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                {
                    this.state.users.map(user=> 
                            <Text> {user._id}: {user.username}</Text>
                        )
                }
            </View>
        )
    }
}
