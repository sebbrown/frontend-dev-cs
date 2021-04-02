import React from 'react';
import './App.css';
import ActionButton from './components/actionButton/ActionButton';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      isLoaded: false,
      error: null
    }
  }

  fetchCountriesData = () => {
    const { isLoaded } = this.state;

    if (!isLoaded) {
      fetch('http://api.geonames.org/countryInfoJSON?formatted=true&username=hydrane')
        .then(response => response.json())
        .then(
          (result) => {
            const countriesData = result.geonames;
            const countries = countriesData.map(country => {
              return {
                continentName: country.continentName,
                countryName: country.countryName,
                areaInSqKm: country.areaInSqKm,
                population: country.population
              }
            });

            this.setState({
              isLoaded: true,
              countries
            });
          },
          (error) => {
            this.setState({
              isLoaded: false,
              error
            });
          }
        )
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Frontend Dev CS</h1>
          <ActionButton handleClick={this.fetchCountriesData} />
        </header>
      </div>
    );
  }
}

export default App;
