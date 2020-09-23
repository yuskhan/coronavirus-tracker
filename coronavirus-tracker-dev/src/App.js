import React, { Component } from "react";
import "./App.css";

import NavBar from "./components/Navbar/Navbar";
import Cards from "./components/Cards/Cards";
import CountryBox from "./components/CountryBox/CountryBox";
import Graph from "./components/Graph/Graph";

import { getCountryData, getHistoricalData } from "./api";

class App extends Component {
  state = {
    countryData: {},
    historicalData: {},
    country: "all",
  };

  async componentDidMount() {
    this.handleCountryChange(this.state.country);
  }

  handleCountryChange = async (country) => {
    const countryData = await getCountryData(country);
    const historicalData = await getHistoricalData(country);

    this.setState({ countryData, historicalData, country });
  };

  render() {
    const { countryData, historicalData, country } = this.state;
    return (
      <div className="App">
        <NavBar>
          <CountryBox handleCountryChange={this.handleCountryChange} />
        </NavBar>
        <Cards data={countryData} country={country}>
          {historicalData ? (
            <Graph historicalData={historicalData} />
          ) : (
            <div className="alert alert-danger">
              Sorry, there is no historical data for this country!
            </div>
          )}
        </Cards>
        <small className="footer">icons provided by icons8.com</small>
      </div>
    );
  }
}

export default App;
