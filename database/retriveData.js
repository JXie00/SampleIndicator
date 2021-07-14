const sql = require("mssql");

const retrivePetInfo = async (requestCode) => {
  const petInformation = await sql.query(
    `SELECT PatFirstName, PatDOB, PatSex From DBO.PathologyOrdering where RequestCode ='${requestCode}' `
  );
  return petInformation;
};

const retriveClinicInfo = async (requestCode) => {
  const ClinicInformation = await sql.query(
    `SELECT Surname,[First Name] as FirstName,[Address Line 1] as Address1, [Address Line 2] as Address2, Suburb, State, Postcode From DBO.Addresses as A, DBO.pathologyOrdering as P where A.ID = P.P2kAddressId and P.RequestCode = '${requestCode}'`
  );
  return ClinicInformation;
};

const retriveOwnerInfo = async (requestCode) => {
  let ownerInformation = await sql.query(
    `SELECT Owner, Species, Breed, Desexed FROM DBO.Patients,DBO.PathologyOrdering where Patient# = P2kPatientID and  RequestCode = '${requestCode}'`
  );
  return ownerInformation;
};
const checkPdfStatus = async (requestCode) => {
  const checkPdfstatus = await sql.query(
    `SELECT ID FROM dbo.sampleindicator where requestCode ='${requestCode}' `
  );
  return checkPdfstatus;
};

const insertRequestCode = async (requestCode) => {
  const insertRequestCode = await sql.query(
    `INSERT INTO dbo.Sampleindicator(Requestcode) VALUES ('${requestCode}')`
  );
  return insertRequestCode;
};

const retriveCurrentPDFData = async (requestCode) => {
  const retriveDBInfo = await sql.query(
    `SELECT * FROM dbo.sampleIndicator WHERE RequestCode = '${requestCode}'`
  );
  return retriveDBInfo;
};

const updateDBTable = async (
  XCoord,
  YCoord,
  Radious,
  ClinicalHistory,
  Desciption,
  CytologyFindings,
  DifferentialDiag,
  requestCode
) => {
  const updateDBTable = await sql.query(
    `UPDATE dbo.sampleindicator SET X_COORD = ${XCoord}, Y_COORD = ${YCoord}, Radious = ${Radious}, ClinicalHisotry = '${ClinicalHistory}',  Desciption = '${Desciption}', CytologyFidngs = '${CytologyFindings}',  DifferntialDiagonlse = '${DifferentialDiag}'   WHERE RequestCode = '${requestCode}';`
  );
  return updateDBTable;
};

module.exports = {
  retrivePetInfo,
  retriveClinicInfo,
  retriveOwnerInfo,
  checkPdfStatus,
  insertRequestCode,
  retriveCurrentPDFData,
  updateDBTable,
};