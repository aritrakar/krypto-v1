import React from "react";
import cx from "classnames";
//import styles from "./DisplayItem.module.css";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

/*Need the following:
name, currency, price, price_timestamp, symbol, logo_url, rank,
*/
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  bold: {
    fontWeight: 900,
    textDecorationColor: "#ff0000",
    textEmphasisColor: "#ff0000",
  },
});

function createData(name, price, price_change_pct, volume) {
  return { name, price, price_change_pct, volume };
}

const rows = [
  createData("BTC", 2000, 0.2, 47854385),
  createData("ETH", 1234, -0.6, 948572495),
  createData("DGC", 5678, 1.6, 7512323),
];

export default function DisplayItem({ data }) {
  const classes = useStyles();

  return (
    /*
    <div className={styles.container}>
      <h2>DisplayItem</h2>
      {data != null ? (
        <div>
          <h3>{data.name}</h3>
          <h3>{data.price}</h3>{" "}
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
    */
    <TableContainer component={Paper}>
      <Table
        stickyHeader
        className={cx(classes.table, classes.bold)}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Currency Name</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Daily Change</TableCell>
            <TableCell align="center">Volume</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => {
            return (
              <TableRow key={i}>
                <TableCell scope="row">{row.name}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row.price_change_pct}%</TableCell>
                <TableCell align="center">{row.volume}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
/*
[
  {
    id: "BTC",
    currency: "BTC",
    symbol: "BTC",
    name: "Bitcoin",
    logo_url:
      "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg",
    price: "11485.77724098",
    price_date: "2020-08-29T00:00:00Z",
    price_timestamp: "2020-08-29T12:21:00Z",
    circulating_supply: "18474068",
    max_supply: "21000000",
    market_cap: "212189029783",
    rank: "1",
    high: "19337.69352527",
    high_timestamp: "2017-12-16T00:00:00Z",
    "1d": {
      volume: "17719654581.85",
      price_change: "45.47588611",
      price_change_pct: "0.0040",
      volume_change: "-4603779001.36",
      volume_change_pct: "-0.2062",
      market_cap_change: "851702197.35",
      market_cap_change_pct: "0.0040",
    },
  },
];
*/
