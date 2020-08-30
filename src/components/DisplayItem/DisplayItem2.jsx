import React from "react";
import styles from "./DisplayItem.module.css";

export default function DisplayItem2(props) {
  if (props.data.status !== 200) {
    return <h3>Loading...</h3>;
  }

  const actualData = props.data.data;
  //console.log("actualData: ", actualData);

  return (
    <div className={styles.tableContainer}>
      <table
        style={{
          width: window.innerWidth,
          paddingBottom: 20,
          paddingRight: 20,
        }}
      >
        <thead className={styles.header}>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>
              Price
              <button
                //onClick={props.sortByPriceChange} //sortByPrice
                onClick={() => props.sortBy("price")}
                style={{
                  backgroundColor: "#ffffff",
                  border: "#ffffff",
                }}
              >
                .
              </button>
            </th>
            <th>
              Price Change
              <button
                //onClick={props.sortByPriceChange} //sortByPriceChange
                style={{ backgroundColor: "#ffffff", border: "#ffffff" }}
              >
                .
              </button>
            </th>
            <th>
              Volume
              <button
                //onClick={props.sortByPriceChange} //sortByVolume
                style={{ backgroundColor: "#ffffff", border: "#ffffff" }}
              >
                .
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {actualData.map((row, i) => {
            return (
              <tr key={i} className={styles.row} style={{ fontSize: 20 }}>
                <td>{i + 1}</td>
                <td>
                  <div className={styles.nameContainer}>
                    <img
                      id="logo"
                      src={row.image}
                      width="30"
                      height="30"
                      alt="logo"
                    />
                    <strong>{row.name}</strong>
                    <div id={styles.symbol}>({row.symbol.toUpperCase()})</div>
                  </div>
                </td>
                <td>{Number.parseFloat(row.current_price).toFixed(2)}</td>
                {row.price_change_percentage_24h > 0 ? (
                  <td style={{ color: "#00dd00" }}>
                    {Number.parseFloat(row.price_change_percentage_24h).toFixed(
                      3
                    )}
                    %
                  </td>
                ) : (
                  <td style={{ color: "#ff0000" }}>
                    {Number.parseFloat(row.price_change_percentage_24h).toFixed(
                      3
                    )}
                    %
                  </td>
                )}
                {/*<td style={{ marginRight: 0 }}>{row.total_volume}</td> */}
                <td style={{ marginRight: 0 }}>
                  {row.total_volume !== null
                    ? row.total_volume
                    : row.market_data.total_volume.usd}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
