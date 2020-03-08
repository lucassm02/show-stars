import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import {
    Container,
    Form,
    Input,
    SubmitButton,
    List,
    User,
    Avatar,
    Name,
    Bio,
    ProfileButton,
    ProfileButtonText,
} from './styles';

export default function Main() {
    const [newUser, setNewUser] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        //UseEffect não pode receber função assíncrona, usando função imediata.
        (async () => {
            const userList = await AsyncStorage.getItem('users');
            if (userList) setUsers(JSON.parse(userList));
        })();
    }, []);

    useEffect(() => {
        AsyncStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    const handlerSubmit = async () => {
        const response = await api.get(`/users/${newUser}`);

        const data = {
            name: response.data.name,
            login: response.data.login,
            bio: response.data.bio,
            avatar: response.data.avatar_url,
        };

        setUsers([...users, data]);
        setNewUser('');

        Keyboard.dismiss();
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
            <List
                data={users}
                keyExtractor={user => user.login}
                renderItem={({ item }) => (
                    <User>
                        <Avatar source={{ uri: item.avatar }} />
                        <Name>{item.name}</Name>
                        <Bio>{item.bio}</Bio>
                        <ProfileButton>
                            <ProfileButtonText>Ver Perfil</ProfileButtonText>
                        </ProfileButton>
                    </User>
                )}
            />
        </Container>
    );
}
