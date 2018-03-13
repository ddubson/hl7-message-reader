import React, { PureComponent } from 'react';
import { Col, Grid, Panel } from 'react-bootstrap';
import HL7Reader from '../hl7/HL7Reader';
import { sampleHL7v23 } from '../hl7/hl7_samples';
import Field from './Field';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = HL7Reader.read(sampleHL7v23);
  }

  render() {
    const { patient, event } = this.state;
    return (
      <Grid>
        <h1>HL7 Message</h1>
        <Col xs={12} md={8}>
          <Panel>
            <Panel.Heading>Event Information</Panel.Heading>
            <Panel.Body>
              <Field title="Event Code" value={event.code} />
            </Panel.Body>
          </Panel>
          <Panel>
            <Panel.Heading>Patient Information</Panel.Heading>
            <Panel.Body>
              <Field
                title="Patient Name"
                value={`${patient.lastName} ${patient.suffix}, ${patient.firstName} ${patient.middleInitialOrName}`}
              />
            </Panel.Body>
          </Panel>
        </Col>
      </Grid>
    );
  }
}
