import React from 'react';
import {connect} from 'react-redux';
import {compare,getCurrency,removeCompare,addSelect} from '../actions';
class CurrencyList extends React.Component{

  componentDidMount(){
      this.props.getCurrency();
  }

 numberWithCommas=(x)=> {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  currencyName = (currency)=>{
    switch (currency) {
      case "IDR" : return "Indonesian Rupiah";
      case "CAD" : return "Canadian Dollar";
      case "GBP" : return "British Pound";
      case "CHF" : return "Swiss Franc";
      case "SGD" : return "Singapore Dollar";
      case "INR" : return "Indian Rupee ";
      case "MYR" : return "Malaysian Ringgit";
      case "JPY" : return "Japanese Yen";
      case "KRW" : return "South Korean won";
      break;
      default:return currency;
    }
  }

  removeList = (current) =>{
    this.props.removeCompare(current);
    this.props.addSelect(current);

  }

  renderList(){
    const rates = this.props.currency;
    const as ="IDR";
    if(!rates){
      return (
        <div >
          <div className="ui active dimmer">
            <div className="ui text loader">Loading</div>
          </div>
          <p></p>
        </div>
      )
    }
    if((this.props.currency.currencylist).length<1){
      return <div className="center aligned">please add currency</div>
    }

    return this.props.currency.currencylist.map(currency=>{
        return (
          <div className="m15" key={currency}>
            <div className="ui card">
              <div className="content">
                <div className="ui grid">
                  <div className="twelve wide column">
                    <div className="ui grid bolder">
                      <div className="four wide column">
                      {currency}
                      </div>
                      <div className="twelve wide  column right aligned">
                      {this.numberWithCommas((rates.val* rates.currencies.rates[currency]).toFixed(2))}
                      {console.log(rates.currencies.rates.$as)}
                      </div>
                    </div>
                    <div className="description">
                      <div className="bolder">{currency} - {this.currencyName(currency)}</div>
                      <div>1 USD = {currency} {this.numberWithCommas((rates.currencies.rates[currency]).toFixed(2))}</div>
                    </div>
                  </div>
                  <div className="four wide column">
                    <button onClick={e=>this.removeList(currency)} className="ui red button remove">X</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    });
  }

  render(){
    return (
      <div>{this.renderList()}</div>
    )
  }

}

const mapStateToProps = (state)=>{
  return state;
}

export default connect(mapStateToProps,{compare,getCurrency,removeCompare,addSelect})(CurrencyList);
