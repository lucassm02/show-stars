import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background: #fff;
`;

export const Header = styled.View`
    align-items: center;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-color: #eee;
`;

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: #eee;
`;
export const Name = styled.Text`
    font-size: 20px;
    color: #333;
    font-weight: bold;
    margin-top: 10px;
    text-align: center;
`;
export const Bio = styled.Text`
    font-size: 14px;
    line-height: 18px;
    color: #999;
    margin-top: 5px;
    text-align: center;
`;

export const Stars = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;

export const Starred = styled.View`
    background-color: #f5f5f5;
    align-items: center;
    padding: 10px 15px;
    border-radius: 4px;
    flex-direction: row;
    margin-bottom: 20px;
`;
export const Title = styled.Text.attrs({
    numberOfLines: 1,
})`
    font-size: 15px;
    font-weight: bold;
`;
export const Author = styled.Text`
    font-size: 13px;
    color: #666;
    margin-top: 2px;
`;
export const Info = styled.View`
    margin-left: 10px;
    flex: 1;
`;
export const OwnerAvatar = styled.Image`
    width: 42px;
    height: 42px;
    border-radius: 21px;
    background-color: #eee;
`;
