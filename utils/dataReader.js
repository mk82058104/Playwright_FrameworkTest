import fs from 'fs';

export function getTestData(key){
    const data=JSON.parse(fs.readFileSync('./test-data/testdata.json'))
    return data[key]
}

export function getRandomCountry() {
  const countries = [
    "India",
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Netherlands",
    "Ireland",
    "Singapore",
    "Japan",
    "Brazil",
    "South Africa"
  ];

  const randomIndex = Math.floor(Math.random() * countries.length);
  return countries[randomIndex];
}

export function getRandomAddress() {
  const streets = [
    "MG Road",
    "Park Street",
    "Link Road",
    "Ring Road",
    "Main Street",
    "High Street",
    "Station Road"
  ];

  const cities = [
    "Hyderabad",
    "Bangalore",
    "Mumbai",
    "Delhi",
    "Chennai",
    "Pune"
  ];

  const states = [
    "Telangana",
    "Karnataka",
    "Maharashtra",
    "Delhi",
    "Tamil Nadu"
  ];

  const pincodes = ["500081", "560037", "400001", "110001", "600001"];

  const streetNo = Math.floor(Math.random() * 999) + 1;
  const street = streets[Math.floor(Math.random() * streets.length)];
  const city = cities[Math.floor(Math.random() * cities.length)];
  const state = states[Math.floor(Math.random() * states.length)];
  const pincode = pincodes[Math.floor(Math.random() * pincodes.length)];

  return {
    addressLine1: `${streetNo}, ${street}`,
    city,
    state,
    pincode
  };
}

export function getRandomPhoneNumber() {
  const firstDigit = Math.floor(Math.random() * 4) + 6; // 6–9
  let remainingDigits = "";

  for (let i = 0; i < 9; i++) {
    remainingDigits += Math.floor(Math.random() * 10);
  }

  return `${firstDigit}${remainingDigits}`;
}