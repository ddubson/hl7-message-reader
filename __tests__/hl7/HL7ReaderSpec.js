import HL7Reader from '../../src/hl7/HL7Reader';
import { sampleHL7v23 } from '../../src/hl7/hl7_samples';

describe('HL7Reader', () => {
  describe('v2.3', () => {
    describe('when file is parsed', () => {
      let parsedData;

      beforeEach(() => {
        parsedData = HL7Reader.read(sampleHL7v23);
      });

      describe('EVN segment', () => {
        it('should parse event code', () => {
          expect(parsedData.event.code).toEqual('A01');
        });

        it('should parse recorded date time', () => {
          expect(parsedData.event.recordedDateTime).toEqual('201301011223');
        });
      });

      describe('PID segment', () => {
        it('should parse first name', () => {
          expect(parsedData.patient.firstName).toEqual('JOHN');
        });

        it('should parse last name', () => {
          expect(parsedData.patient.lastName).toEqual('APPLESEED');
        });

        it('should parse middle name', () => {
          expect(parsedData.patient.middleInitialOrName).toEqual('A');
        });

        it('should parse patient suffix', () => {
          expect(parsedData.patient.suffix).toEqual('III');
        });

        it('should parse patient sex', () => {
          expect(parsedData.patient.sex).toEqual('M');
        });

        it('should parse date of birth', () => {
          expect(parsedData.patient.dateOfBirth).toEqual('19710101');
        });

        it('should parse patient race', () => {
          expect(parsedData.patient.race).toEqual('2076-8');
        });

        it('should parse patient address', () => {
          const patientAddr = parsedData.patient.address;
          expect(patientAddr.streetAddress).toEqual('1 DATICA STREET');
          expect(patientAddr.city).toEqual('MADISON');
          expect(patientAddr.state).toEqual('WI');
          expect(patientAddr.zipCode).toEqual('53005-1020');
        });

        it('should parse patient home phone number', () => {
          expect(parsedData.patient.homePhoneNumber).toEqual('(414)379-1212');
        });
      });
    });
  });
});
