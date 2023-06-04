const loadCountry = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountry(data));
};
const displayCountry = (countries) => {
  const container = document.getElementById("container");
  countries.forEach((country) => {
    // console.log(country);
    const CountriesSection = document.createElement("section");
    CountriesSection.classList.add("box-2");
    CountriesSection.innerHTML = `
    <img src="${country.flags.png}">
    <h3>Country Name: ${
      country.name.common ? country.name.common : "No Country Name "
    } </h3>
    <h3> Capital: ${country.capital ? country.capital[0] : `No Capital `} </h3>
    <button onclick="displayCountryDetails('${
      country.cca2
    }')"> Details </button>
    
    
    `;
    container.appendChild(CountriesSection);
  });
};
const displayCountryDetails = (code) => {
  const urlLink = `https://restcountries.com/v3.1/alpha/${code} `;
  console.log(urlLink);
  fetch(urlLink)
    .then((res) => res.json())
    .then((data) => setInnerText(data[0]));
  // console.log(data[0]);
};

const setInnerText = (country) => {
  console.log(country);
  const innerDiv = document.getElementById("inner-container");
  innerDiv.innerHTML = `
  <img src="${country.flags.png}">
  <h3>country Name: ${country.name.common} </h3>
  <h3>country Short Form: ${country.cca2} </h3>
  <h3>country Capital: ${
    country.capital ? country.capital[0] : "NO Capital"
  } </h3>
  <h3>country Population: ${country.population} </h3>
  `;
  innerDiv.appendChild(box1);
};

const searchMeals = () => {
  const searchField = document.getElementById("search-input").value;
  searchField.setInnerText = "";
  console.log(searchField);
  displayCountryDetails(searchField);
};
loadCountry();
displayCountryDetails();
