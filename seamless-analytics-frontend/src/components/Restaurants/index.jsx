import React, { Component } from "react";
import { Segment, Grid, Checkbox, Image } from "semantic-ui-react";
class Restaurants extends Component {
  constructor(props) {
    super(props);
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
