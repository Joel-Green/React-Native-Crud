import React, { Component } from 'react'
import { Text, View , FlatList} from 'react-native'

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
            <View style={{flex:1}}>
                <Text> GET Value: </Text>
                <FlatList
                data = {this.state.users}
                keyExtractor ={(item,index)=>index.toString()}// this is for removing unique key warning
                renderItem= { ({item})=>    
                <View>
                    <Text> {item.username}</Text>
                </View>
            }
                />
            </View>
        )
    }
}
