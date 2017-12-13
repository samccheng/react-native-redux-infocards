import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { CardItem } from './common'

class ListItem extends React.Component {
  render() {
    return (
      <CardItem>
        <Text style={styles.titleStyle}>{this.props.item.title}</Text>
      </CardItem>
    )
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
})

export default ListItem
