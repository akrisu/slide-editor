import { Button } from "antd";
import { useRef } from "react";

import { downloadComponentInPDF } from "./download-component-in-pdf";
import { Slide } from "./Slide";

function App() {
  const pdfRef = useRef<HTMLDivElement>(null);

  const generatePDF = () => {
    const content = pdfRef.current;
    content && downloadComponentInPDF(content);
  };

  return (
    <>
      <Slide ref={pdfRef} />
      <Button type="primary" onClick={generatePDF}>
        Download in PDF
      </Button>
    </>
  );
}

export default App;
