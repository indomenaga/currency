import React from 'react';
import BaseCurrency from './BaseCurrency';
import {connect} from 'react-redux';
import {getCurrency} from '../actions';


class App extends React.Component{
  componentDidMount(){
    this.props.getCurrency();
  }

  render(){
    return (
      <div className="ui center aligned  grid">
          <BaseCurrency/>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{

  return state;
}

export default connect(mapStateToProps,{getCurrency})(App);
