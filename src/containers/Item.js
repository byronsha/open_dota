import React from 'react'
import {connect} from 'react-redux'
import Loader from '../components/Loader'

const IMAGE_URL = 'https://api.opendota.com/apps/dota2/images/items/'

class Item extends React.Component {
  render() {
    const {
      itemId,
      items,
      itemsLoading
    } = this.props

    if (itemsLoading) {return <Loader />} 
    
    if (itemId === 0) {
      return null
    } else {
      const item = items.filter(item => item.id === itemId)[0]  
      const itemName = item.name.replace('item_', '')

      return <img src={`${IMAGE_URL}${itemName}_lg.png`} width="100%" height="100%" />
    }
  }
}

function mapStateToProps(state) {
  const {
    items,
    itemsLoading
  } = state.api
  
  return {
    items,
    itemsLoading
  }
}

export default connect(
  mapStateToProps
)(Item)