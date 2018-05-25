import React from "react";
import axios from "axios";
import FontAwesome from "react-fontawesome";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      success: false,
      scale: "F"
    }
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( position => {
        var lat = position.coords.latitude;
			  var lon = position.coords.longitude;
        var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=3e7852f4006e3eced1500a5256479cbd`;
        axios.get(url).then(res => {
      
          this.setState({
            temp: (Math.round((((res.data.main.temp)*10) / 10 -273.15) * 1.8 + 32)),
            icon: res.data.weather[0].icon,
            cond: res.data.weather[0].main,
            success: true,
            city: res.data.name
          });
        })
      })
    } else {
      this.setState({
        success: 2
      })
    }
  }

  changeTemperature = () => {
    let current = this.state.scale;

    if (current === "C") {
      let currentTemp = this.state.temp;

      this.setState({
        temp: Math.round(currentTemp * 1.8 + 32),
        scale: "F"
      })
    } else {
      let currentTemp = this.state.temp;

      this.setState({
        temp: Math.round((currentTemp - 32) / 1.8),
        scale: "C"
      })
    }
  }

  render() {
    return (
      <div className="footer">
          <div className="footer-container">
            <div className="footer-main">
            <div className="footer-email">
              <a href="mailto: RyanCRickert@gmail.com">RyanCRickert@gmail.com</a>
            </div>
            <div className="footer-github">
              <a href="https://github.com/RyanCRickert" target="_blank"><FontAwesome name="github" size="2x"/></a>
            </div>
            </div>
          </div>
      </div>
    )
  }
};