import React, { Component } from "react";
import { Segment, Grid, Checkbox, Image } from "semantic-ui-react";
class Restaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants : []
     };
    var data = require('../../processed-data.json'); 
    if(data){
      alert("File success!");
    }
    console.log("Made it here");
    for(var i = 0; i < data.length; i++) {
        var obj = data[i];
    
        console.log("Key: "+ obj.name);
    }

    //const checkItems = res.map((number) =>
    //<li>{number}</li>

  }
  setupRestaurants(){
    
  }
  render() {
    return (
      <Segment textAlign="center">
        <Grid centered columns={3}>
          <Grid.Row centered>
            <Grid.Column>
              <Checkbox label="Restaurant 1" />
              
            </Grid.Column>
            <Grid.Column>
              <Checkbox label="Restaurant 4" />
              
            </Grid.Column>
            <Grid.Column>
              <Checkbox label="Restaurant 7" />
              
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column>
              <Checkbox label="Restaurant 1" />
              
            </Grid.Column>
            <Grid.Column>
              <Checkbox label="Restaurant 4" />
              
            </Grid.Column>
            <Grid.Column>
              <Checkbox label="Restaurant 7" />
              
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column>
              <Checkbox label="Restaurant 1" />
              
            </Grid.Column>
            <Grid.Column>
              <Checkbox label="Restaurant 4" />
              
            </Grid.Column>
            <Grid.Column>
              <Checkbox label="Restaurant 7" />
              
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
