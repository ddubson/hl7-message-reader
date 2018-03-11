import React, { PureComponent } from "react";
import { Col, Grid, Panel } from "react-bootstrap";

const fieldSeparator = "|";

const sampleHL7 = "MSH|^~\\&|EPICADT|DH|LABADT|DH|201301011226||ADT^A01|HL7MSG00001|P|2.3||\n" +
  "EVN|A01|201301011223||\n" +
  "PID|||MRN12345^5^M11||APPLESEED^JOHN^A^III||19710101|M||2076-8|1 DATICA STREET^^MADISON^WI^53005-1020|GL|(414)379-1212|(414)271-3434||S||MRN12345001^2^M10|123456789|987654^NC|\n" +
  "NK1|1|APPLESEED^BARBARA^J|WIFE|||||||NK^NEXT OF KIN\n" +
  "PV1|1|I|2000^2012^01||||004777^GOOD^SIDNEY^J.|||SUR||||ADM|A0|";

const readHL7 = (hl7) => {
  const segments = hl7.split("\n");

  const pidSegment = segments.find(s => (s.startsWith("PID")));
  const patientName = pidSegment.split(fieldSeparator)[5];
  const patientFirstName = patientName.split("^")[1];
  const patientLastName = patientName.split("^")[0];

  return {
    patient: {
      firstName: patientFirstName,
      lastName: patientLastName,
    }
  }
};

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = readHL7(sampleHL7);
  }

  render() {
    return (
      <Grid>
        <h1>Sample HL7 Parse</h1>
        <Col xs={12} md={8}>
          <Panel>
            <Panel.Heading>Patient Information</Panel.Heading>
            <Panel.Body>
              <div data-test="first-name">{this.state.patient.firstName}</div>
              <div data-test="last-name">{this.state.patient.lastName}</div>
            </Panel.Body>
          </Panel>
        </Col>
      </Grid>
    )
  }
}