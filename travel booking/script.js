// Validation for airport selection
function validateForm(event) {
  const airportList = [
    "Kempegowda International Airport (BLR)", // Bangalore
    "Chhatrapati Shivaji International Airport (BOM)", // Mumbai
    "Indira Gandhi International Airport (DEL)", // Delhi
    "Goa International Airport (GOI)", // Goa
    "Dubai International Airport (DXB)" // Dubai
];


  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  if (!airportList.includes(from) || !airportList.includes(to)) {
      alert("Please select valid airports from the list.");
      event.preventDefault();
  }
}
