import axios from "axios";

const url = "https://disease.sh/v3/covid-19/";

export const getCountryData = async (country) => {
  let modifiedUrl =
    country !== "all" && country ? `${url}countries/${country}` : `${url}all`;

  try {
    const {
      data: {
        cases,
        active,
        deaths,
        recovered,
        todayCases,
        todayDeaths,
        todayRecovered,
        countryInfo,
        updated,
      },
    } = await axios.get(modifiedUrl);

    return {
      cases,
      active,
      deaths,
      recovered,
      todayCases,
      todayDeaths,
      todayRecovered,
      countryInfo,
      updated,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getCountries = async () => {
  try {
    const { data } = await axios.get(`${url}countries`);

    return data.map((data) => data.country);
  } catch (error) {
    console.log(error);
  }
};

export const getHistoricalData = async (country) => {
  let historicalUrl = `${url}historical/${country}?lastdays=all`;

  try {
    if (country !== "all" && country) {
      const {
        data: {
          timeline: { cases, deaths, recovered },
        },
      } = await axios.get(historicalUrl);
      return { cases, deaths, recovered };
    } else {
      const {
        data: { cases, deaths, recovered },
      } = await axios.get(historicalUrl);
      return { cases, deaths, recovered };
    }
  } catch (error) {
    console.log(error);
  }
};
