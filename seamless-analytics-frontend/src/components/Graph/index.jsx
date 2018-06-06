import React from 'react';
import { LineChart, Line , CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';

class Graph extends React.Component {
    parseData(object){
        // make this a parser for json?
    }
    
    render(){
        return (
        <div className="graph-class">
            <div name ="graph-container" align="center">
            <LineChart width={600} height={300} data={
                [
                {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
                {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
                {name: 'Page C', uv: 2000, pv: 9800, amt: 2290}]
            }
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
            </div>
        </div>
        );

    }
}

export default Graph;