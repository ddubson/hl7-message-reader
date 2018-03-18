import React, { PureComponent } from 'react';
import { Col, Grid, Panel, Row } from 'react-bootstrap';
import HL7Reader from '../hl7/HL7Reader';
import { sampleHL7v23 } from '../hl7/hl7_samples';
import Field from './Field';
import { Race } from '../hl7/HL7Codes';

const formatName = patient => `${patient.lastName} ${patient.suffix}, ${patient.firstName} ${patient.middleInitialOrName}`;

const formatAddress = addr => `${addr.streetAddress}, ${addr.city}, ${addr.state}, ${addr.zipCode}`;

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = HL7Reader.read(sampleHL7v23);
  }

  render() {
    const { patient, event } = this.state;
    return (
      <div className="container">
        <h1>HL7 Message</h1>
        <Grid>
          <Row>
            <Col xs={12} md={8}>
              <Panel>
                <Panel.Heading>Event Information</Panel.Heading>
                <Panel.Body>
                  <Field
                    title="Event Code"
                    value={event.code}
                  />
                  <Field
                    title="Recorded Date/Time"
                    value={event.recordedDateTime}
                  />
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8}>
              <Panel>
                <Panel.Heading>Patient Information</Panel.Heading>
                <Panel.Body>
                  <Field
                    title="Patient Name"
                    value={formatName(patient)}
                  />
                  <Field title="Patient Sex" value={patient.sex} />
                  <Field title="Date of Birth" value={patient.dateOfBirth} />
                  <Field title="Race" value={`${Race[patient.race]} (${patient.race})`} />
                  <Field
                    title="Patient Address"
                    value={formatAddress(patient.address)}
                  />
                  <Field
                    title="Home Phone Number"
                    value={patient.homePhoneNumber}
                  />
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
