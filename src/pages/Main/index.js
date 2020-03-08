import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, SubmitButton } from './styles';

export default function Main() {
    const [newUser, setNewUser] = useState(null);
    const [users, setUsers] = useState(null);

    const handlerSubmit = () => {
        console.tron.log(newUser);
    };

    return (
        <Container>
            <Form>
                <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Adicionar usuário"
                    value={newUser}
                    onChangeText={text => setNewUser(text)}
                    returnKeyType="send"
                    onSubmitEditing={handlerSubmit}
                />
                <SubmitButton onPress={handlerSubmit}>
                    <Icon name="add" size={20} color="#fff"></Icon>
                </SubmitButton>
            </Form>
        </Container>
    );
}
