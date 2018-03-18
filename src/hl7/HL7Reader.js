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
  const patientNameFields = segmentFields[5].split(intraFieldSeparator);
  const addressFields = segmentFields[11].split(intraFieldSeparator);

  return {
    lastName: patientNameFields[0],
    firstName: patientNameFields[1],
    middleInitialOrName: patientNameFields[2],
    suffix: patientNameFields[3],
    dateOfBirth: segmentFields[7],
    sex: segmentFields[8],
    race: segmentFields[10],
    address: {
      streetAddress: addressFields[0],
      city: addressFields[2],
      state: addressFields[3],
      zipCode: addressFields[4],
    },
    homePhoneNumber: segmentFields[13],
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

