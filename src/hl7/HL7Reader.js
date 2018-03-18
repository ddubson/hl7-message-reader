const segmentSeparator = '\n';
const fieldSeparator = '|';
const intraFieldSeparator = '^';

const readEVNSegment = (segment) => {
  const evnSegmentFields = segment.split(fieldSeparator);
  return {
    code: evnSegmentFields[1],
    recordedDateTime: evnSegmentFields[2],
  };
};

const readPIDSegment = (segment) => {
  const segmentFields = segment.split(fieldSeparator);
  const patientName = segmentFields[5];
  const patientNameFields = patientName.split(intraFieldSeparator);

  return {
    firstName: patientNameFields[1],
    lastName: patientNameFields[0],
    middleInitialOrName: patientNameFields[2],
    suffix: patientNameFields[3],
    sex: segmentFields[8],
  };
};

export default class HL7Reader {
  static read(hl7) {
    const segments = hl7.split(segmentSeparator);

    const evnSegment = segments.find(s => s.startsWith('EVN'));
    const pidSegment = segments.find(s => s.startsWith('PID'));

    return {
      event: readEVNSegment(evnSegment),
      patient: readPIDSegment(pidSegment),
    };
  }
}

