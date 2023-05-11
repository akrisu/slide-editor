import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const downloadComponentInPDF = async (component: HTMLElement) => {
  const componentWidth = component.offsetWidth;
  const componentHeight = component.offsetHeight;
  const orientation = componentWidth >= componentHeight ? "l" : "p";

  const canvas = await html2canvas(component);
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF({
    orientation,
    unit: "px",
    format: [componentWidth, componentHeight],
  });

  pdf.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
  pdf.save("slide.pdf");
};
