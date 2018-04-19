import React from "react";
import axios from "axios";
import FontAwesome from "react-fontawesome";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tempC: null,
      icon: null,
      cond: null,
      success: false
    }
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( position => {
        var lat = position.coords.latitude;
			  var lon = position.coords.longitude;
        var url = `https://api.darksky.net/forecast/e5130c574b38588fe5614b60df9b8014/${lat},${lon}`;
        axios.get(url).then(res => {
      
          console.log(url)
          this.setState({
            temp: (Math.round((res.data.currently.temperature)*10) / 10),
            icon: res.data.currently.icon,
            cond: res.data.currently.summary,
            success: true
          });
        })
      })
    } else {
      this.setState({
        success: 2
      })
    }
  }

  render() {
    return (
      <div className="footer">
          <div className="footer-container">
            <div className="footer-main">
            <div className="footer-email">
              Email: <a href="mailto: RyanCRickert@gmail.com">RyanCRickert@gmail.com</a>
            </div>
              {this.state.success ?
              <div className="footer-weather">It is currently {this.state.temp}°F.  Condition: {this.state.cond}</div> :
              <div className="footer-weather">To enable local weather, please allow for geolocation.</div> }
            <div className="footer-github">
              <a href="https://github.com/RyanCRickert" target="_blank"><FontAwesome name="github" size="2x"/></a>
            </div>
            </div>
          </div>
      </div>
    )
  }
};