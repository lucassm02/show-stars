import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import {
    Container,
    Header,
    Avatar,
    Bio,
    Name,
    Stars,
    Starred,
    Title,
    Author,
    Info,
    OwnerAvatar,
} from './styles';

export default function Main({ route }) {
    const { data } = route.params;

    const [stars, setStarts] = useState([]);

    //Buscando repositórios da perfil do usuário
    useEffect(() => {
        (async () => {
            const response = await api.get(`/users/${data.login}/starred`);
            setStarts(response.data);
        })();
    }, []);

    return (
        <Container>
            <Header>
                <Avatar source={{ uri: data.avatar }} />
                <Name>{data.name}</Name>
                <Bio>{data.bio}</Bio>
            </Header>
            <Stars
                data={stars}
                keyExtractor={star => String(star.id)}
                renderItem={({ item }) => (
                    <Starred>
                        <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                        <Info>
                            <Title>{item.name}</Title>
                            <Author>{item.owner.login}</Author>
                        </Info>
                    </Starred>
                )}
            />
        </Container>
    );
}
