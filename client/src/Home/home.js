import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

import styles from './home.css';

class Home extends Component {

  renderPerson(name, photo, url) {
    return <Grid item justify="center">
      <Grid container justify="center" >
        <img src={`img/${photo}`} className={styles.teamPhoto}/>
      </Grid>
      <Grid  container>
        <a href={url}>
          <Button color="primary">
          {name}
          </Button>
        </a>
      </Grid>
    </Grid>
  }

  renderItem(name, text) {
    return <Grid item justify="center">
      <Grid container justify="center">

      </Grid>

      </Grid>
  }

  renderSponsor(name, url) {
    return <Grid item justify="center">
      <Grid container justify="center">
        <a href={`${name}`}>
          <img src={`img/${name}.png`} className={styles.sponsorLogo}/>
        </a>
      </Grid>
    </Grid>
  }
  render() {
    return (
      <Grid item className={styles.root}>
        <Grid container xs={12} className={styles.header} justify="center">

          <Grid item xs={5}>
            <Typography variant="h4">
            Stryve is a social impact Dapp built on Ethereum for creating crowdfunded personal challenges.
            </Typography>
          </Grid>
          <Grid container xs={12} justify="center">
            <Grid item>
              <NavLink to="/deploy">
                <Button variant="contained"  color="secondary" classname={styles.callToActionBtn}>
                Do Something Great
                </Button>
              </NavLink>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
        {/* this is the Team Section */}
        <Grid item xs={12}>
          <Grid container className={styles.itemSection} justify="center" spacing={14}>
            <Grid container className={styles.sectionTitle} justify="center">
              <Typography variant="h4">
                Social Commitment Contract
              </Typography>
            </Grid>
            <Grid container justify="center" xs={2}>
              Create a personal challenge
            </Grid>
            <Grid container justify="center" xs={2}>
              Crowd funded, crowd validated.
            </Grid>
            <Grid container justify="center" xs={2}>
              Funds given to charity
            </Grid>
          </Grid>
        </Grid>
        </Grid>

        {/* this is the Sponsor Section */}
        <Grid item xs={12}>
          <Grid container className={styles.teamSection} justify="center" spacing={14}>
            <Grid container justify="center" xs={12} sm={5} md={4}>
              {this.renderSponsor('omise','https://omisego.network/')}
            </Grid>
            <Grid container justify="center" xs={12} sm={5} md={4}>
              {this.renderSponsor('chicks','https://cryptochicks.ca/')}
            </Grid>
            <Grid container justify="center" xs={12} sm={5} md={4}>
              {this.renderSponsor('enjin','https://enginwallet.io/')}
            </Grid>
          {/* </Grid>
          <Grid container className={styles.teamSection} justify="center" spacing={14}> */}

            <Grid container justify="center" xs={12} sm={5}>
              {this.renderSponsor('bitfwd','http://bitfwd.com/')}
            </Grid>
            <Grid container justify="center" xs={12} sm={5}>
            {this.renderSponsor('nucypher','https://omisego.network/')}
            </Grid>
            <Grid container justify="center" xs={12} sm={5}>
            {this.renderSponsor('ens','https://ens.domains/')}
            </Grid>

          </Grid>
        </Grid>

        {/* this is the Team Section */}
        <Grid item xs={12}>
          <Grid container className={styles.teamSection} justify="center" spacing={14}>
            <Grid container className={styles.sectionTitle} justify="center">
              <Typography variant="h4">
                Team Info
              </Typography>
            </Grid>
            <Grid container justify="center" xs={2}>
              {this.renderPerson('NIKESH NAZARETH', 'nikesh.jpeg', 'https://www.linkedin.com/in/nikeshnazareth/')}
            </Grid>
            <Grid container justify="center" xs={2}>
              {this.renderPerson('SIDNEY AMANI', 'sidney.jpeg', 'https://www.linkedin.com/in/sidney-amani-2213b7183/')}
            </Grid>
            <Grid container justify="center" xs={2}>
              {this.renderPerson('JOSEPH HILSBERG', 'joseph.jpeg', 'https://www.linkedin.com/in/joseph-hilsberg/')}
            </Grid>
            <Grid container justify="center" xs={2}>
              {this.renderPerson('CHAD LYNCH', 'chad.jpeg', 'https://www.linkedin.com/in/chad-lynch-75278928/')}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Home;