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
    this.state({

    })

  }
  parseData(object) {
    // make this a parser for json?
  }

  render() {
    return (
      <Segment>
        <div className="graph-class">
          <div name="graph-container" align="center">
          <BarChart width={1000} height={400} data={parseDate().bind(this)}
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
