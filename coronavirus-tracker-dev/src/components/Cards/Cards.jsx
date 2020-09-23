import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";

import globe from "../../images/globe.png";
import styles from "./Cards.module.css";

const Cards = ({
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
  country,
  children,
}) => {
  if (!cases) {
    return "Website is loading";
  }

  return (
    <Container>
      <Row>
        <Col>
          <Card className={styles.card} bg="dark" text="light">
            <Card.Body>
              <Card.Header className={styles.cardHeader}>
                Coronavirus Statistics for {country ? country : "all"} as of{" "}
                {new Date(updated).toDateString()}
              </Card.Header>
              <img
                src={countryInfo ? countryInfo.flag : globe}
                width={countryInfo ? 100 : 50}
                height="50"
                alt="flag"
                className={styles.flag}
              />
              <Card.Text>Total Cases</Card.Text>
              <Card.Text>{cases}</Card.Text>
              <Card.Text className="text-warning">{`+${todayCases}`}</Card.Text>
              <Card.Footer>
                <small className="text-muted">
                  Last updated {new Date(updated).toLocaleTimeString()}
                </small>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <CardDeck className={styles.deck}>
        <Card className={styles.card} bg="dark" border="warning" text="light">
          <Card.Header>Active Cases</Card.Header>
          <Card.Body>{active}</Card.Body>
        </Card>

        <Card className={styles.card} bg="dark" border="success" text="light">
          <Card.Header>Recoveries</Card.Header>
          <Card.Body>{recovered}</Card.Body>
          <Card.Text className="text-warning p-2">{`+${todayRecovered}`}</Card.Text>
        </Card>

        <Card className={styles.card} bg="dark" border="danger" text="light">
          <Card.Header>Deaths</Card.Header>
          <Card.Body>{deaths}</Card.Body>
          <Card.Text className="text-warning p-2">{`+${todayDeaths}`}</Card.Text>
        </Card>
      </CardDeck>
      <Row>
        <Col>
          <Card className="m-2" bg="dark" text="light">
            <Card.Header>Historical Data</Card.Header>
            <Card.Body>{children}</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cards;
