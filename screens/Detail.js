import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import styled from 'styled-components/native'
import { info, history } from '../api'
import { Icon } from '../components/Coin'

const Container = styled.ScrollView``

const Detail = ({ navigation, route: { params: { symbol, id } } }) => {
    const { isLoading: infoLoading, data: infoData } = useQuery(["coinInfo", id], info)
    const { isLoading: historyLoading, data: historyData } = useQuery(["coinHistory", id], history)
    console.log(infoData)
    useEffect(() => {
        navigation.setOptions({
            title: symbol, headerLargeTitle: () => <Icon
                source={{ uri: `https://cryptoicon-api.vercel.app/api/icon/${symbol.toLowerCase()}` }}
            />
        })
    }, [])
    return (<Container />)
}
export default Detail