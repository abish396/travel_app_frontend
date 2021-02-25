import React, { useState, useEffect } from "react";

export default function TrekCustomization(props) {
  let [userTrekCustomization, setUserTrekCustomizaion] = useState({trek_preferences:[]});
  let [customizationData, setCustomizationData] = useState([]);
  let [totalAmount, setTotalAmount] = useState(0);
  let trekCustomizationData = [];
  //const [customizationData, setCustomizationData] = useState([]);

  function handleUserTrekDetails(key, value) {
    userTrekCustomization[key] = value;
    setUserTrekCustomizaion(userTrekCustomization);
  }

  function handleUserTrekPreferences(checked, index) {
    customizationData[index].checked = checked;
    if(customizationData[index].checked) {
       totalAmount += customizationData[index].price;
    } else {
      totalAmount -= customizationData[index].price
    }
    userTrekCustomization["trek_preferences"] = customizationData;
    setUserTrekCustomizaion(userTrekCustomization);
    setCustomizationData(customizationData);
    setTotalAmount(totalAmount);
  }

  function fetchTrekCustomizationOptions() {
    customizationData = [
      {
        type: "Transportation",
        price: 1200,
      },
      {
        type: "Food",
        price: 3000,
      },
      {
        type: "Tent",
        price: 2000,
      },
      {
        type: "Guide",
        price: 1800,
      },
    ];
    trekCustomizationData = [...customizationData];
    customizationData.forEach((custData) => {
      custData.checked = true;
      totalAmount += custData.price;
    });
    //debugger;
    setTotalAmount(totalAmount);
    setCustomizationData(customizationData);
  }

  useEffect(() => {
    fetchTrekCustomizationOptions();
  }, []);

  return (
    <React.Fragment>
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-lg-5">
          <div className="mt-5">
            <h2>Price Breakup</h2>
          </div>
          <div className="col-lg-12 mt-5">
            <div
              style={{
                border: "1px solid rgb(221, 221, 221)",
                borderRadius: "12px",
                padding: "24px",
              }}
            >
              <div className="row">
                <table style={{ width: "100%", fontSize: "1.2em" }}>
                  <tbody>
                    {customizationData.map((custData) => {
                      let tdStyle = {};
                      if(!custData.checked) {
                        tdStyle["textDecoration"] = "line-through";
                      }
                      return (
                        <tr>
                          <td style={tdStyle}>{custData.type}</td>
                          <td style={tdStyle}>{custData.price}</td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td>Total</td>
                      <td style={{ color: "green" }}>
                        <strong>{totalAmount}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="offset-lg-4 mt-5">
            <form className="form-inline">
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="Have Friends? Mention no. of persons"
                  onChange={(event) => {
                    handleUserTrekDetails("no_of_persons", event.target.value);
                  }}
                />
              </div>
              {/* <button type="submit" class="btn btn-primary">
                Confirm identity
              </button> */}
            </form>
          </div>
          <div className="mt-5">
            {customizationData.map((custData, index) => {
              return (
                <div className="form-check form-check-inline">
                  <label className="form-check-label">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      checked={custData.checked}
                      onChange={(event) => {
                        custData.checked = event.target.checked;
                        handleUserTrekPreferences(custData.checked, index);
                      }}
                    />
                    {custData.type}
                    <span className="form-check-sign">
                      <span className="check"></span>
                    </span>
                  </label>
                </div>
              );
            })}
          </div>
          <div className="mt-5">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
