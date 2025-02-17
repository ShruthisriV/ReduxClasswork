//This compo discussed the multiple ways using which w can implement memoization in class
//based components in comparision to useMemo hook in function based components
import React, { Component, PureComponent } from 'react'
import memoize from "lodash/memoize";

export default class Extras extends Component {
    //first way to memoize the function
    computeExpensiveValue = memoize((value) => {
        console.log("Computing...");
        let compu = value*100;
        return compu;
    })

    //second way to memoize the function
    shouldComponentUpdate(nextProps){
        return this.props.value!==nextProps.value;
        //if true is returned then UI is going to be rendered, if false is returned UI is not re-rendered
    }

    //thirdway here we can have our own caching
    computeExpensiveValue2 = memoize((value) => {
        if(this.cache[value]!=undefined){
            return this.cache[value]
        }
        console.log("Computing...");
        let compu = value*100;
        this.cache[value] = compu;
        return compu;
    })

    //fourthway pure comp performs a shallow comparision of props and states to prevent unnecessary renders
    // class Extras extends PureComponent{
    //     render(){

    //     }
    // }

  render() {
    return (
      <div>
        <h2>Memoized value: {this.computeExpensiveValue(this.props.value)}</h2>
      </div>
    )
  }
}
