import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ListItem from './ListItem'

class CardList extends React.Component {
  renderRow({item}) {
    return <ListItem key={item.id} item={item} />
  }

  render() {
    return (
      <FlatList
        data={this.props.list}
        renderItem={this.renderRow}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return { list: state.libraries }
}

export default connect(mapStateToProps)(CardList)
