import React from 'react'

const BASE_URL = 'https://api.opendota.com'

class HeroStatsPro extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          {this.props.heroStats.map(hero => {
            const { id, localized_name, img, icon, pro_win, pro_pick, pro_ban } = hero

            return (
              <tr key={id}>
                <td><img src={BASE_URL + img}></img></td>
                <td>{localized_name}</td>
                <td>{pro_pick}</td>
                <td>{pro_win}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default HeroStatsPro