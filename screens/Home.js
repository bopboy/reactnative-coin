import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import styled from 'styled-components/native'
import { BLACK_COLOR } from "../colors";
import auth from '@react-native-firebase/auth'
import { coins } from '../api';
import { ActivityIndicator, View } from 'react-native';
import Coin from "../components/Coin";

const Container = styled.View`
  background-color: ${BLACK_COLOR};
  flex: 1;
  color: white;
  padding: 60px 20px;
`
const Text = styled.Text``
const Btn = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
    padding: 10px 20px;
    border-width: 1px;
    border-radius: 20px;
    border-color: rgba(255, 255, 255, 0.5);
    margin-top: 20px;
`
const BtnText = styled.Text`
    color: white;
    font-size: 16px;
`
const List = styled.FlatList`
    padding: 20px 10px;
    width: 100%;
`
const Loader = styled.View`
    flex: 1;
    background-color: ${BLACK_COLOR};
    justify-content: center;
    align-items: center;
`

const onSubmitEditing = async () => {
    await auth().signOut()
}
const Home = () => {
    const { isLoading, data } = useQuery("coins", coins)
    const [cleanData, setCleanData] = useState([])
    useEffect(() => {
        if (data)
            setCleanData(data.filter(coin => coin.rank != 0 && coin.is_active && !coin.is_new))
    }, [data])
    if (isLoading) {
        return (<Loader><ActivityIndicator color="white" size="large" /></Loader>)
    }
    return (
        <Container>
            <List
                data={cleanData}
                numColumns={3}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                columnWrapperStyle={{
                    justifyContent: "space-between",
                }}
                renderItem={({ item, index }) => (
                    <Coin index={index} id={item.id} symbol={item.symbol} />
                )}
            />
            <Btn onPress={onSubmitEditing}>
                <BtnText>Sign Out</BtnText>
            </Btn>
        </Container>
    )
}
export default Home