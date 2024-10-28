import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListScreen = () => {
  return (
    <View>
      <Text styles ={styles.textStyle}>ListScreen</Text>
    </View>
  )
}

export default ListScreen

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})