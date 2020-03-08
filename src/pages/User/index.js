import React from 'react';
import { View, Text } from 'react-native';

export default function Main({ route }) {
    const user = route.params.data;
    // console.log(navigation.getParam('Usuários'));

    return (
        <View>
            <Text>{user.name}</Text>
        </View>
    );
}
