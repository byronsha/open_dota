import React from 'react'
import { Container, Header } from 'semantic-ui-react' 

class CountryMmrs extends React.Component {
  render() {
    const headerStyle = {
      margin: '60px 0px'
    }
    
    return (
      <div>
        <Header inverted as="h2" textAlign="center" style={headerStyle}>
          Average Solo MMR by Country
        </Header>

        todo...
      </div>
    )
  }
}

export default CountryMmrs