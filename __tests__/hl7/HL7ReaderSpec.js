import HL7Reader from "../../src/hl7/HL7Reader";
import {sampleHL7v23} from "../../src/hl7/hl7_samples";

describe("HL7Reader", () => {
  describe("v2.3", () => {
    describe("when file is parsed", () => {
      let parsedData;

      beforeEach(() => {
        const reader = new HL7Reader();
        parsedData = reader.read(sampleHL7v23);
      });

      it("should parse first name", () => {
        expect(parsedData.patient.firstName).toEqual("JOHN");
      });

      it("should parse last name", () => {
        expect(parsedData.patient.lastName).toEqual("APPLESEED");
      })

      it("should parse middle name", () => {
        expect(parsedData.patient.middleInitialOrName).toEqual("A");
      });

      it("should parse patient suffix", () => {
        expect(parsedData.patient.suffix).toEqual("III");
      })
    });
  });
});