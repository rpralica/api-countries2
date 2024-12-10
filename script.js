// Funkcija koja preuzima podatke sa REST Countries API-ja
async function fetchCountryData(countryName) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    const countries = await response.json();

    // Provera da li je država pronađena
    if (countries && countries.length > 0) {
      displayCountryData(countries[0]);
      console.log(countries);
    } else {
      alert('Zemlja nije pronađena!');
    }
  } catch (error) {
    console.error('Došlo je do greške:', error);
  }
}

// // Funkcija koja prikazuje podatke o zemlji u card-u
// function displayCountryData(country) {
//   // Prikazivanje sekcije sa podacima
//   const countryInfoSection = document.getElementById('country-info');
//   countryInfoSection.style.display = 'block';

//   // Postavljanje podataka u card
//   document.getElementById('country-flag').src = country.flags.svg;
//   document.getElementById('country-name').textContent = country.name.common;
//   document.getElementById('country-capital').textContent = `Capital: ${
//     country.capital ? country.capital[0] : 'N/A'
//   }`;
//   document.getElementById(
//     'country-population'
//   ).textContent = `Population: ${country.population.toLocaleString()}`;
//   document.getElementById(
//     'country-region'
//   ).textContent = `Region: ${country.region}`;
//   document.getElementById('country-currency').textContent = `Currency: ${
//     country.currencies ? Object.keys(country.currencies)[0] : 'N/A'
//   }`;
// }

// Funkcija koja prikazuje podatke o zemlji u tabeli
function displayCountryData(country) {
  // Prikazivanje sekcije sa podacima
  const countryInfoSection = document.getElementById('country-info');
  countryInfoSection.style.display = 'block';

  // Postavljanje podataka u tabelu
  document.getElementById('country-flag').src = country.flags.svg;
  document.querySelector('.country-name').textContent = country.name.common;
  document.getElementById('country-capital').textContent = country.capital
    ? country.capital[0]
    : 'N/A';
  document.getElementById('country-population').textContent =
    country.population.toLocaleString();
  document.getElementById('country-region').textContent = country.region;
  document.getElementById('country-currency').textContent = country.currencies ? Object.keys(country.currencies)[0] : 'N/A';
 document.getElementById('country-maps').href =country.maps.googleMaps;
 document.getElementById('drzava').textContent = ' '+country.name.common;


  
}

// Dodavanje event listener-a na dugme za pretragu
document.getElementById('search-button').addEventListener('click', () => {
  const countryName = document.getElementById('country-input').value.trim();
  if (countryName) {
    fetchCountryData(countryName);
  } else {
    alert('Molimo unesite naziv države!');
  }
});


