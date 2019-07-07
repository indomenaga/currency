import React from 'react';
import {connect} from 'react-redux';
import {compare,addCompare,removeSelect,on} from '../actions';
import CurrencyList from './CurrencyList';

import './style.css';


class BaseCurrency extends React.Component{

  onInputChange=(e)=>{
    this.props.compare(e.target.value);
  }

  onSubmitCurr=(e)=>{
      this.props.addCompare(this.refs.currSelect.value);
      this.props.removeSelect(this.refs.currSelect.value);
      this.props.on(false);
  }

  showForm=()=>{
    this.props.on(true);
  }


  renderSelect(){
    return this.props.currency.selectoption.map(option=>{
        return (
            <option key={option} value={option}>{option}</option>
        );
    });
  }

  renderButton(){
     if(this.props.currency.on){
       return(
         <div className="ui grid m15">
             <div className="ui form ten wide column">
                 <div className="field">
                   <select ref="currSelect"  >
                     {this.renderSelect()}
                   </select>
                 </div>
             </div>
             <div className="six wide column">
               <button type="submit" onClick={this.onSubmitCurr} className="ui blue button">submit</button>
             </div>
         </div>
       )
     }else{
       return(
         <div className="ui center aligned m15 grid">
           <button onClick={this.showForm} className="ui orange button  ">Add more currency</button>
         </div>
       )
     }
  }

  render(){
    return (
      <div className="middle">
          <div className="ui card ">
            <div className="content">
              <div className="ui sub header">
                USD - United Stated Dolar
              </div>
              <div className="header m15">
                <div className="ui two column grid">
                    <div className="four wide column">USD</div>
                    <div className="twelve wide column right aligned">
                    <form className="ui form">
                      <div className="field ">
                        <input className="right aligned inputbottom" type="number"  value={this.props.currency.val} onChange={this.onInputChange}   name="currency-value"  placeholder="currency value"/>
                      </div>
                    </form>
                    </div>
                </div>
              </div>
            </div>
            <div className="content h350">
              <div><CurrencyList/></div>
            </div>
            <div className="extra content hauto">
              {this.renderButton()}
            </div>
          </div>
      </div>
    )
  }

}

const mapStateToProps = (state)=>{
  console.log(state.currency);
  return state;
}


export default connect(mapStateToProps,{compare,addCompare,removeSelect,on})(BaseCurrency);
