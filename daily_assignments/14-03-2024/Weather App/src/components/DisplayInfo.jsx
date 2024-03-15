import React from "react";
import {
  IoMdThermometer,
  IoIosSpeedometer,
  IoIosCloud,
  IoIosTime,
} from "react-icons/io"; //react icons

const DisplayInfo = (props) => {
  const info = props.info;
  const iconUrl = props.iconUrl;

  // Func to format time
  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString();
  };

  return (
    <>
      <div
        style={{
          background: "#113946",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          margin: "auto",
          color: "#59D5E0",
        }}
      >
        <div className="weather-card">
          <h2>{info.name}</h2>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            <p>Weather: {info.weather[0].description}</p>
            <img
              src={iconUrl}
              alt="Weather Icon"
              style={{ width: "50px", height: "50px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              borderBottom: "1px solid #FAA300",
            }}
          >
            <p>
              <IoIosTime style={{ color: "#F5DD61" }} /> Sunrise:{" "}
              {formatTime(info.sys.sunrise)}
            </p>
            <p>
              <IoIosTime style={{ color: "#F5DD61" }} /> Sunset:{" "}
              {formatTime(info.sys.sunset)}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              borderBottom: "1px solid #FAA300",
            }}
          >
            <div>
              <p>
                <IoMdThermometer style={{ color: "#F5DD61" }} /> Temp:{" "}
                {info.main.temp} °C
              </p>
              <p>
                <IoMdThermometer style={{ color: "#F5DD61" }} /> Feels Like:{" "}
                {info.main.feels_like} °C
              </p>
            </div>
            <div>
              <p>
                <IoMdThermometer style={{ color: "#FAA300" }} /> Min Temp:{" "}
                {info.main.temp_min} °C
              </p>
              <p>
                <IoMdThermometer style={{ color: "#FAA300" }} /> Max Temp:{" "}
                {info.main.temp_max} °C
              </p>
            </div>
          </div>

          <div id="card-conditions">
            <p>
              <IoIosSpeedometer style={{ color: "#FAA300" }} /> Wind:{" "}
              {info.wind.speed} m/s, Direction: {info.wind.deg}°
            </p>

            <p>
              <IoIosCloud style={{ color: "#F5DD61" }} /> Pressure:{" "}
              {info.main.pressure} hPa
            </p>
            <p>
              <IoIosCloud style={{ color: "#F5DD61" }} /> Humidity:{" "}
              {info.main.humidity}%
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayInfo;
