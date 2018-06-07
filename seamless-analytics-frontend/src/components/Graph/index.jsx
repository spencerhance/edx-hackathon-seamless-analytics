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
      email: '',
      data : []
     };

  }
  parseData(restaurantName) {
    
  }

  setupRestaurants(){
    var data = require('../../processed-data.json'); // forward slashes will depend on the file location
    if(data){
      alert("File success!");
    }
    for(var i = 0; i < data.length; i++) {
        var obj = data[i];
    
        console.log("Name: " + obj.first_name + ", " + obj.last_name);
    }
  }
/*{name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: -3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: -2000, pv: -9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000}]*/
  render() {
    this.parseData.bind(this)
;    return (
      <Segment>
        <div className="graph-class">
          <div name="graph-container" align="center">
          <BarChart width={1000} height={400} data={ this.state.data }
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Tooltip/>
       <Legend />
       <ReferenceLine y={0} stroke='#000'/>
       <Bar dataKey="pv" fill="#8884d8" />
       <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
          </div>
        </div>
      </Segment>
    );
  }
}

export default Graph;
