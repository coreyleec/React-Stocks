import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import Stock from '../components/Stock';

let URL = "http://localhost:3000/stocks"

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolioStocks: [],
    toggle: false,
    filter: "all",
    sorted: "none",
  }
  

  buyStock = (stockObj) => {
    // console.log("click")
    // debugger
    this.setState({
      portfolioStocks: [...this.state.portfolioStocks, stockObj]
    })
  }
  //when you only want to get rid of one
  sellStock = (stockObj) => {
    let index = this.state.portfolioStocks.findIndex(stock => stock.id === stockObj.id)
    // console.log("click")
    // debugger
    let resultArray = [...this.state.portfolioStocks]
      resultArray.splice(index,1)
      this.setState({
          portfolioStocks: resultArray
        })
      }
        // portfolioStocks: this.state.portfolioStocks.filter(stock => stock.id !== stockObj.id)
        // stocks: [...this.state.stocks, stockObj]
      // })
      // }

  toggleFilter = (toggle) => {
  console.log("toggle")
  }


  componentDidMount(){

    fetch(URL)
      .then(resp => resp.json())
      .then(stockData => 
        this.setState({stocks: stockData}))
    }
 

    filter = (type) => {
      this.setState({
        filter:type
      })
    }
 sortStocks = (sortType) => {
  //  debugger
   this.setState({
     sorted: sortType,
     stocks: this.state.stocks.sort(
    (a,b) => sortType  === "Price" ? 
     a.price - b.price : 
     a.name.lacaleCompare(b.name))
   })
 }



  render() {
    // if(this.state.filter === "all"){
    //   let displayStocks = this.state.stocks}
    //   else{let displayStocks = 
    //     this.state.stocks.filter(stock => stock.type === this.state.filter)}
    
    let displayStocks = []
        // if(this.state.filter === "all")
        //   {let displayStocks = this.state.stocks}
        //   else{let displayStocks = 
        //     this.state.stocks.filter(stock => stock.type === this.state.filter)}
        
            this.state.filter === "all" ? 
            displayStocks = this.state.stocks :
            displayStocks = this.state.stocks.filter(stock => stock.type === this.state.filter)

        return (
      <div>
        <SearchBar sortedType={this.state.sorted} sortStocks={this.sortStocks} filterStock={this.filter}  toggleFilter={this.toggleFilter} />

          <div className="row">
            <div className="col-8">

               <StockContainer stocks={displayStocks} buyStock={this.buyStock}  />
               
            </div>
            <div className="col-4">

                <PortfolioContainer sellStock={this.sellStock} portfolioStocks={this.state.portfolioStocks}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
