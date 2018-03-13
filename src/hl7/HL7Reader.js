const segmentSeparator = '|';
const fieldSeparator = '^';

export default class HL7Reader {
  static read(hl7) {
    const segments = hl7.split('\n');

    const evnSegment = segments.find(s => s.startsWith('EVN'));
    const evnSegmentFields = evnSegment.split(segmentSeparator);
    const eventCode = evnSegmentFields[1];

    const pidSegment = segments.find(s => s.startsWith('PID'));
    const patientName = pidSegment.split(segmentSeparator)[5];
    const patientNameFields = patientName.split(fieldSeparator);

    const patientLastName = patientNameFields[0];
    const patientFirstName = patientNameFields[1];
    const patientMiddleInitialOrName = patientNameFields[2];
    const suffix = patientNameFields[3];

    return {
      event: {
        code: eventCode,
      },
      patient: {
        firstName: patientFirstName,
        lastName: patientLastName,
        middleInitialOrName: patientMiddleInitialOrName,
        suffix,
      },
    };
  }
}
