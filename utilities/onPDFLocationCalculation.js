import { rgb } from "pdf-lib";
const onPDFLcationCalculation = async (xCoord, yCoord, radious, page) => {
  if (xCoord === "") return;

  xCoord = xCoord.split(",");
  yCoord = yCoord.split(",");
  const pdfXCoordStartPostion = 300;
  const pdfYCoordStartPostion = 643;
  const pdfXCoordRatio = 1.58;
  const pdfYCoordRatio = 1.7;

  xCoord = xCoord.map((value) => {
    return (pdfXCoordStartPostion + parseInt(value) / pdfXCoordRatio).toFixed(
      2
    );
  });

  yCoord = yCoord.map((value) => {
    return (pdfYCoordStartPostion - parseInt(value) / pdfYCoordRatio).toFixed(
      2
    );
  });

  for (let i = 0; i < xCoord.length; i++) {
    page.drawCircle({
      x: parseInt(xCoord[i]),
      y: parseInt(yCoord[i]),
      size: radious,
      borderColor: rgb(1, 0, 0),
      borderWidth: 2,
      opacity: 1,
      borderOpacity: 1,
    });
  }
};
export default onPDFLcationCalculation;
