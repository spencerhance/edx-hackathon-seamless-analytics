import React from "react";

import {
  BarChart, 
  Bar, 
  ReferenceLine, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend
} from "recharts";
import { Segment } from "semantic-ui-react";

class Graph extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data : [
      {name: 'India Palace', delta : 11, amt: 100},
      {name: 'Pavia', delta: -5.10,amt: 100},
      {name: 'Falafel Place', delta: -0.18, amt: 2290},
      {name: 'Monkfish', delta: -6,amt: 2000},
      {name: 'Royal East Restaurant', delta: 8.5,amt: 2000},
      {name: 'Alfredos', delta: -12.25,amt: 2000},
      {name: 'Veggie Crust', delta: -.69,amt: 2000},
      {name: 'Bailey and Sage', delta: 1.7,amt: 2000},
      {name: 'Tossed', delta: -25,amt: 2000},
      {name: 'Sugar and Spice', delta: 15,amt: 2000},
      {name: 'Viva Burrito', delta: 10.38,amt: 2000},
      {name: 'Beantown Taqueria', delta: 2.23,amt: 2000},
      {name: 'Cafe 472', delta: 3.58,amt: 2000},
      {name: 'Beijing Tokyo', delta: 10.875,amt: 2000}
      ]
     };

  }
  parseData(restaurantName) {
    
  }


  render() {
    this.parseData.bind(this)
;    return (
      <Segment>
        <div className="graph-class">
          <div name="graph-container" align="center">
          <BarChart width={900} height={400} data={ this.state.data }
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="1 1"/>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       <ReferenceLine y={0} stroke='#000'/>
       <Bar dataKey="delta" fill="#82ca9d" />
      </BarChart>
          </div>
        </div>
      </Segment>
    );
  }
}

export default Graph;
