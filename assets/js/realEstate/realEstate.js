import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './data/listingsData.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',
      listingsData,

      min_price:0,
      max_price:1000000,
      min_bldg_size:0,
      max_bldg_size:50000,
      min_acre_size:0,
      max_acre_size:100000,
      min_year_built:1900,
      max_year_built:2019,
      elevators: false,
      parking_lot: false,
      filteredData: listingsData,
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'box',
      search: ''
    }

    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
    this.changeView = this.changeView.bind(this)
  }
  componentWillMount(){

    var listingsData = this.state.listingsData.sort((a, b) =>{
      return a.price - b.price
    })

    this.setState({
      listingsData
    })
  }
  change(event){
    var name = event.target.name
    var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
      this.filteredData()
    })
  }
  changeView(viewName){
    this.setState({
      view: viewName
    })
  }
  filteredData(){
    var newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price &&
             item.price <= this.state.max_price &&

             item.bldgsize >= this.state.min_bldg_size &&
             item.bldgsize <= this.state.max_bldg_size &&

             item.acresize >= this.state.min_acre_size &&
             item.acresize <= this.state.max_acre_size &&

             item.yearbuilt >= this.state.min_year_built &&
             item.yearbuilt <= this.state.max_year_built
           })

           if(this.state.purchase != "All_purchase") {
             newData = newData.filter((item) => {
               return item.purchase == this.state.purchase
             })
           }

           if(this.state.property != "All_Property") {
             newData = newData.filter((item) => {
               return item.property == this.state.property
             })
           }

           if(this.state.city != "All_city") {
             newData = newData.filter((item) => {
               return item.city == this.state.city
             })
           }

           if(this.state.sortby == 'price-dsc') {
             newData = newData.sort((a,b) => {
               return a.price - b.price
             })
           }

           if(this.state.sortby == 'price-asc') {
             newData = newData.sort((a,b) => {
               return b.price - a.price
             })
           }

           if(this.state.search != ''){
             newData = newData.filter((item) => {
               var city = item.city.toLowerCase()
               var searchText = this.state.search.toLowerCase()
               var n = city.match(searchText)

               if(n != null) {
                 return true
               }

             })
           }

    this.setState({
      filteredData: newData
    })
  }
  populateForms() {
    // property
    var property = this.state.listingsData.map((item) => {
      return item.property
    })
    property = new Set(property)
    property = [...property]

    property = property.sort()

    // city
    var city = this.state.listingsData.map((item) => {
      return item.city
    })
    city = new Set(city)
    city = [...city]

    city = city.sort()

    // purchase
    var purchase = this.state.listingsData.map((item) => {
      return item.purchase
    })
    purchase = new Set(purchase)
    purchase = [...purchase]

    this.setState({
      populateFormsData: {
        property,
        purchase,
        city
      }
    }, () => {
      console.log(this.state)
    })
  }

  render () {
    return (<div>
      <Header />
      <section id="content-area">
        <Filter change={this.change} globalState={this.state} populateAction={this.populateForms} />
        <Listings listingsData={this.state.filteredData} change={this.change} globalState={this.state} changeView={this.changeView}/>
      </section>
      </div>)
    }
  }

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
