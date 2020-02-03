import React, { Component} from 'react'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',
    }
  }
  render () {
    return (<header>
      <div className="logo">Logo</div>

        <nav>
          <a href="#">create Ads</a>
          <a href="#">About Us</a>
          <a href="#">Log In</a>
          <a href="#" className="search-btn">Search</a>
        </nav>
          </header>
    )
  }
}
