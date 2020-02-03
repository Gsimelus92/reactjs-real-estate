import React, { Component} from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',
    }
    this.purchase = this.purchase.bind(this)
    this.property = this.property.bind(this)
    this.city = this.city.bind(this)
  }
  componentWillMount(){
    this.props.populateAction()
  }
  purchase() {
    if(this.props.globalState.populateFormsData.purchase !=
    undefined) {
      var { purchase } = this.props.globalState.populateFormsData

      console.log(purchase)
      return purchase.map((item) => {
        return(
        <option key={item} value={item}>{item}</option>
        )
      })
    }

  }
  property(){
    if(this.props.globalState.populateFormsData.property !=
    undefined) {
      var { property } = this.props.globalState.populateFormsData

    console.log(property)
    return property.map((item) => {
      return(
        <option key={item} value={item}>{item}</option>
        )
      })
    }

  }
  city(){
    if(this.props.globalState.populateFormsData.city !=
    undefined) {
      var { city } = this.props.globalState.populateFormsData

    console.log(city)
    return city.map((item) => {
      return(
        <option key={item} value={item}>{item}</option>
        )
      })
    }
  }

  render () {
    return (<section id="filter">
    <div className="inside">
      <h4>Filter</h4>
      <select name="purchase" className="filters purchase" onChange={this.props.change}>
        <option value="All_purchase">Both</option>
          {this.purchase()}
      </select>
      <select name="property" className="filters propertyType" onChange={this.props.change}>
        <option value="All_Property">All Property</option>
          {this.property()}
      </select>
      <select name="city" className="filters city" onChange={this.props.change}>
        <option value="All_city">All City</option>
          {this.city()}
      </select>
      <div className="filters price">
        <span className="title">Price</span>
        <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price}/>
        <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price}/>
      </div>
      <div className="filters bldg-size">
        <span className="title">Bldge Size</span>
        <input type="text" name="min_bldg_size" className="min-bldg-size" onChange={this.props.change} value={this.props.globalState.min_bldg_size}/>
        <input type="text" name="max_bldg_size" className="max-bldg-size" onChange={this.props.change} value={this.props.globalState.max_bldg_size}/>
      </div>
      <div className="filters acre-size">
        <span className="title">Acre Size</span>
        <input type="text" name="min_acre_size" className="min-acre-size" onChange={this.props.change} value={this.props.globalState.min_acre_size}/>
        <input type="text" name="max_acre_size" className="max-acre-size" onChange={this.props.change} value={this.props.globalState.max_acre_size}/>
      </div>
      <div className="filters year-built">
        <span className="title">Year Built</span>
        <input type="text" name="min_year_built" className="min-year-built" onChange={this.props.change} value={this.props.globalState.min_year_built}/>
        <input type="text" name="max_year_built" className="max-year-built" onChange={this.props.change} value={this.props.globalState.max_year_built}/>
      </div>
      <div className="filters extras">
      <span className="title">
        Extras
      </span>
        <label htmlFor="extras">
          <span>Elevators</span>
          <input name ="elevators" value="elevators" type="checkbox" onChange={this.props.change}/>
        </label>
        <label htmlFor="extras">
          <span>Parking Lot</span>
          <input name ="parking_lot" value="parking_lot" type="checkbox" onChange={this.props.change}/>
        </label>
      </div>
    </div>
    </section>)
  }
}
