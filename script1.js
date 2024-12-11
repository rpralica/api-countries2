//Return res return data - Promise

 // Funkcija koja preuzima podatke sa REST Countries API-ja
        async function fetchCountryData(countryName) {
            const apiLink = `https://restcountries.com/v3.1/name/${countryName}`;


            await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
                .then(res => res.json())
                .then(([country]) => {
                    console.log(country);
                    return displayCountryData(country);
                });



        }

        // &Funkcija koja prikazuje podatke o zemlji u tabeli

        function displayCountryData(country) {

            // Prikazivanje sekcije sa podacima
            document.getElementById('country-info').style.display = 'block';

            // Postavljanje podataka u tabelu
            document.getElementById('country-flag').src = country.flags.svg;
            document.querySelector('.country-name').textContent = country.name.common;
            document.getElementById('country-capital').textContent = country.capital
                ? country.capital[0]
                : 'N/A';
            document.getElementById('country-population').textContent =
                country.population.toLocaleString();
            document.getElementById('country-region').textContent = country.region;
            document.getElementById('country-currency').textContent = country.currencies
                ? Object.keys(country.currencies)[0]
                : 'N/A';
            document.getElementById('country-maps').href = country.maps.openStreetMaps;
            document.getElementById('drzava').textContent = ' ' + country.name.common;
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

        fetchCountryData('serbia');