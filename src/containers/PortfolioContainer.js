import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
          }
          {this.props.portfolioStocks.map(stock => 
          <Stock  key={stock.id} stock={stock}  sellStock={this.props.sellStock}  tradeStock={this.props.sellStock}  />)}
      </div>
    );
  }

}

export default PortfolioContainer;
