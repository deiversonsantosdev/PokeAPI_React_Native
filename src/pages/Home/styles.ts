import styled from 'styled-components/native'
import Constants from 'expo-constants'

export const Container = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${25 + Constants.statusBarHeight}px;
  padding-bottom: 0;
  background: #fff;
`

export const Pokeball = styled.Image`
  z-index: -1;
  opacity: 0.25;
  width: 400px;
  height: 400px;
  position: absolute;
  align-self: center;
  top: -200px;
`

export const Title = styled.Text`

  margin: 10px
  font-size: 35px;
  font-weight: bold;
  align-self: center;

`

export const Description = styled.Text`
  font-size: 17px;
  align-self: center;
  line-height: 20px;
  margin-top: 10px;
`

export const List = styled.FlatList`
  margin-top: 45px;
`
