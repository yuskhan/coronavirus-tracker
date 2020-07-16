import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

import { getCountries } from "../../api";
import styles from "./CountryBox.module.css"

class CountryBox extends Component {
  state = { countryList: [] };

  async componentDidMount() {
    const countries = await getCountries();
    this.setState({ countryList: countries });
  }

  render() {
    return (
      <Form inline>
        <FormControl
          as="select"
          placeholder="Search for a country"
          className={styles.textBox}
          onChange={(e) => this.props.handleCountryChange(e.target.value)}
        >
          <option value="all">All</option>
          {this.state.countryList.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </FormControl>
      </Form>
    );
  }
}

export default CountryBox;