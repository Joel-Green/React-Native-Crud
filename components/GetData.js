import React, { Component } from 'react'
import { Text, View , FlatList, Button} from 'react-native'

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

    getData()
    {
        fetch('http://192.168.0.107:4000/users')
        .then(res => res.json ())
        .then(users => this.setState({
            users
        }))
    }



    deleteData(_id)
    {
        fetch(`http://192.168.0.107:4000/users/delete/${_id}`,
        {
            method:"GET"
        })
        .then(res => res.json ());
        this.getData();
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
                    <Button 
                    title="Delete"
                    onPress = { () =>{this.deleteData(item._id)}} 
                    />
                </View>
            }
                />
            </View>
        )
    }
}
