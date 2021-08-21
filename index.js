// index.js

// The code below is temporary and can be commented out.
const { fetchISSFlyOverTimes } = require("./iss");

// fetchCoordsByIP("162.245.144.188", (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned coordinates:", coordinates);
// });

const exampleCoords = { latitude: "49.27670", longitude: "-123.13000" };

fetchISSFlyOverTimes(exampleCoords, (error, PassTime) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("It worked! Returned flyover time:", PassTime);
});
