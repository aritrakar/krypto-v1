import React from "react";
import {
  DisplayItem,
  DisplayItem2,
  DisplayItem3,
  SearchBar,
} from "./components";
import { fetchData } from "./api";

function createData(name, symbol, price, price_change_pct, volume) {
  return { name, symbol, price, price_change_pct, volume };
}

export default class App extends React.Component {
  intervalID;

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      specific: false,
      search: "",
      sorted: false,
    };
    this.getData = this.getData.bind(this);
    this.sortBy = this.sortBy.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getSpecificRequest = this.getSpecificRequest.bind(this);
  }

  componentDidMount() {
    this.getData();
    this.intervalID = setInterval(this.getData, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  async getData() {
    const url =
      "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false";
    const fetchedData = await fetchData(url);
    //console.log("fetchedData: ", fetchedData);
    console.log("Updating");
    this.setState({ data: fetchedData });
  }

  getSpecificRequest() {
    const { data, specific, search } = this.state;
    console.log("search: ", search);
    //this.setState({ specific: true });
    let i = 0;
    console.log("data.data[0].id: ", data.data[0].id);

    while (specific === true && data.data.length > 0) {
      if (data.data[i].id !== search.toLowerCase()) {
        /*const url = `https://api.coingecko.com/api/v3/coins/${request}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`;
        const fetchedSpecificData = await fetchData(url);
        console.log("fetchedSpecificData: ", fetchedSpecificData);*/
        i++;
        data.data.shift();
        console.log("data.data.length: ", data.data.length);
      } else {
        console.log(`FOUND. data.data[i].id: ${data.data[i].id} i: ${i}`);
        this.setState({ specific: false, search: "" });
      }
    }
    console.log("EXITED");
    return "No such record found!";
  }

  handleChange(e) {
    console.log("handleChange: ", e);
    this.setState({ search: e });
  }

  sortBy(e) {
    //Resets on auto-refresh.
    console.log("Sorting by", e);
    const { data } = this.state;
    let temp = data.data; //Don't touch

    if (e === "current_price") {
      temp.sort((item1, item2) => item2.current_price - item1.current_price);
    } else if (e === "price_percentage_change_24h") {
      temp.sort(
        (item1, item2) =>
          item2.price_change_percentage_24h - item1.price_change_percentage_24h
      );
    } else if (e === "total_volume") {
      temp.sort((item1, item2) => item2.total_volume - item1.total_volume);
    } else if (e === "market_cap_rank") {
      temp.sort(
        (item1, item2) => item1.market_cap_rank - item2.market_cap_rank //Odd
      );
    }
    this.setState({ data: data });
  }

  render() {
    const { data } = this.state;

    return (
      <div style={{ position: "absolute", textAlign: "center" }}>
        <h1>Krypto v1</h1>
        <SearchBar
          getSpecificRequest={this.getSpecificRequest}
          handleChange={this.handleChange}
        />
        <DisplayItem3 data={data} sortBy={this.sortBy} />
      </div>
    );
  }
}
