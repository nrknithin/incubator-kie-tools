import { DmnMarshaller, ParsedDmnDefinition } from "@kie-tools/dmn-marshaller";
import jsPDF from "jspdf";
// import html2canvas from "html2canvas"; // Commented out as its necessity is still TBD

export async function generateDocument({
  data,
  isParsed,
  env,
}: {
  data: ParsedDmnDefinition | string;
  isParsed: boolean;
  env: "browser" | "node";
}): Promise<Blob | Uint8Array> {
  let parsedData: ParsedDmnDefinition;

  if (!isParsed) {
    if (typeof data !== "string") {
      // This case should ideally not happen if isParsed is false
      throw new Error("Invalid data: Expected raw XML string when isParsed is false.");
    }
    try {
      const marshaller = new DmnMarshaller([data]); // Assuming DmnMarshaller can take an array of strings
      parsedData = marshaller.parser.parse(); 
    } catch (error) {
      console.error("Error parsing DMN XML:", error);
      throw new Error("Failed to parse DMN XML string.");
    }
  } else {
    if (typeof data === "string") {
      // This case should ideally not happen if isParsed is true
      throw new Error("Invalid data: Expected ParsedDmnDefinition object when isParsed is true.");
    }
    parsedData = data as ParsedDmnDefinition;
  }

  // Placeholder for actual PDF generation logic using parsedData
  console.log("DMN Data for PDF generation:", parsedData);

  if (env === "browser") {
    const pdf = new jsPDF();
    pdf.text("Hello browser! (DMN Doc Placeholder)", 10, 10);
    // Example: Add some content from parsedData if available
    if (parsedData.definitions.name) {
      pdf.text(`Model Name: ${parsedData.definitions.name}`, 10, 20);
    }
    return pdf.output("blob");
  } else { // env === "node"
    const pdf = new jsPDF();
    pdf.text("Hello node! (DMN Doc Placeholder)", 10, 10);
    if (parsedData.definitions.name) {
      pdf.text(`Model Name: ${parsedData.definitions.name}`, 10, 20);
    }
    // jsPDF's output("arraybuffer") is suitable for Node.js and can be wrapped in Uint8Array
    const arrayBuffer = pdf.output("arraybuffer");
    return new Uint8Array(arrayBuffer);
  }
}
