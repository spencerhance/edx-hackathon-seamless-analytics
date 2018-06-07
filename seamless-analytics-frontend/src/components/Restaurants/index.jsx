import React, { Component } from "react";
import { Segment, Grid, Checkbox, Image } from "semantic-ui-react";
class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants : [],
      checkList : []
     };
  this.onChange = this.onChange.bind(this);
   
   
}

onChange(e) {
  console.log(e.target);
  console.log(e);
}

  render() {
    var data = require('../../processed-data.json'); 

    var myJSON = JSON.stringify(data);
    var json_obj = JSON.parse(myJSON);
    var temp =[];
    var count =0;
    for(var i in json_obj) {
      for(var restaurant in i) {
        this.state.restaurants.push(json_obj[i][restaurant].name);
        this.state.checkList.push(          
        <Checkbox label ={json_obj[i][restaurant].name}  value = {json_obj[i][restaurant].name} onChange={(e) => {this.onChange(e)}}/>
        );
      }
    }
    return (
      <Segment textAlign="center">
        <Grid centered columns={3}>
          <Grid.Row centered>
            <Grid.Column>
              {this.state.checkList}
            </Grid.Column>
          </Grid.Row>

          {/* <Grid.Row>
      <Grid.Column>
        <Image src='/assets/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/assets/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row> */}
        </Grid>
      </Segment>
    );
  }
}

export default Restaurants;
