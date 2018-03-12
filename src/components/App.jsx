import React, {PureComponent} from "react";
import {
  Col, ControlLabel, FormGroup,
  FormControl, Grid, Label, Panel
} from "react-bootstrap";
import HL7Reader from "../hl7/HL7Reader";
import {sampleHL7v23} from "../hl7/hl7_samples";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.reader = new HL7Reader();
    this.state = this.reader.read(sampleHL7v23);
  }

  render() {
    const { patient } = this.state;
    return (
      <Grid>
        <h1>Sample HL7 Parse</h1>
        <Col xs={12} md={8}>
          <Panel>
            <Panel.Heading>Patient Information</Panel.Heading>
            <Panel.Body>
              <FormGroup>
                <ControlLabel>Patient Name</ControlLabel>
                <FormControl.Static>
                  <span data-test="full-name">
                  {`${patient.lastName} ${patient.suffix}, ${patient.firstName} ${patient.middleInitialOrName}`}
                  </span>
                </FormControl.Static>
              </FormGroup>
            </Panel.Body>
          </Panel>
        </Col>
      </Grid>
    )
  }
}