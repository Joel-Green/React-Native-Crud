import React, { Component } from 'react'
import { Text, View, FlatList, TextInput, Button } from 'react-native'

export default class CreateData extends Component {
    state = {
        username: ''
    }


    AddData() {

        if(this.state.username!='')
        {
        fetch('http://192.168.0.107:4000/users/add', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username
            }),
        });
        this.setState({
            username:''
        })
    }
    }



    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>
                    Input New Values:
                </Text>
                <TextInput
                    style={{ backgroundColor: "#f2f2f2" }}
                    onChangeText={(username) => this.setState({ username })}
                />
                <Button
                    title="click me to send data"
                    onPress={() => { this.AddData() }}
                />
                <Text>
                    {this.state.username}
                </Text>
            </View>
        )
    }
}
