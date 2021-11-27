export const fetchVaccinationData = (stateCode, districtCode) => {
  let currentDate = new Date();
  const offset = currentDate.getTimezoneOffset();
  currentDate = new Date(currentDate.getTime() - offset * 60 * 1000);
  const data = fetch(
    `https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=${stateCode}&district_id=${districtCode}&date=${
      currentDate.toISOString().split('T')[0]
    }`,
  )
    .then(response => response.json())
    .then(vaccineData => vaccineData.topBlock);
  return data;
};
