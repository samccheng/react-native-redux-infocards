import React from 'react'
import { View,
         Text,
         StyleSheet,
         TouchableWithoutFeedback,
         LayoutAnimation } from 'react-native'
import { CardItem } from './common'
import { connect } from 'react-redux'
import { selectCard } from '../actions'

class ListItem extends React.Component {
  componentWillUpdate() {
    LayoutAnimation.spring()
  }

  renderContent() {
    const { expandCard, item } = this.props

    if(expandCard) {
      return (
        <CardItem>
          <Text style={{ flex: 1, paddingLeft: 15 }}>{item.description}</Text>
        </CardItem>
      )
    }
  }

  render() {
    const { id, title } = this.props.item

    return (
      <TouchableWithoutFeedback onPress={() => this.props.card(id)}>
        <View>
          <CardItem>
            <Text style={styles.titleStyle}>{title}</Text>
          </CardItem>
          {this.renderContent()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
})

const mapStateToProps = (state, ownProps) => {
  const expandCard = state.selectedCard === ownProps.item.id
  return { expandCard }
}


const mapDispatchToProps = dispatch => {
  return { card: id => dispatch(selectCard(id)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
