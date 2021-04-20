import React from 'react';


class ScheduleControl extends React.Component {

  marketSchedule = [
    {
      day: "Sunday",
      location: "Lents International",
      hours: "9:00am - 2:00pm",
      booth: "4A"
    },
    {
      day: "Monday",
      location: "Pioneer Courthouse Square",
      hours: "10:00am - 2:00pm",
      booth: "7C"
    },
    {
      day: "Tuesday",
      location: "Hillsboro",
      hours: "5:00pm - 8:30pm",
      booth: "1F"
    },
    {
      day: "Wednesday",
      location: "Shemanski Park",
      hours: "10:00am - 2:00pm",
      booth: "3E"
    },
    {
      day: "Thursday",
      location: "Northwest Portland",
      hours: "2:00pm - 6:00pm",
      booth: "6D"
    },
    {
      day: "Saturday",
      location: "Beaverton",
      hours: "10:00am - 1:30pm",
      booth: "9G"
    }
  ];

  constructor(props) {
    super(props);
    this.state = {
      today: 0,
      tomorrow: 1
    };
  }

  dayIncrementer = (day) => {
      if (day < 5) {
        day++;
      } else {
        day = 0;
      }
      return day;
    }

  handleClick = () => {
    this.setState(prevState => ({
      today: this.dayIncrementer(prevState.today),
      tomorrow: this.dayIncrementer(prevState.tomorrow)
    }));
  }

  render(){
    let today = this.marketSchedule[this.state.today];
    let tomorrow = this.marketSchedule[this.state.tomorrow]

    return (
      <React.Fragment>
        <div class='Schedule'>
          <h2>Schedule</h2>
          <button class="btn btn-outline-danger" onClick={this.handleClick}>Next Day</button>
          <h3>Where we're at today:</h3>
          <h4>{today.location}, Booth {today.booth}</h4>
          <h5>When: {today.day}, {today.hours}</h5>
          <br/>
          <h3>Where we're at next:</h3>
          <h4>{tomorrow.location}, Booth {tomorrow.booth}</h4>
          <h5>When: {tomorrow.day}, {tomorrow.hours}</h5>
        </div>
      </React.Fragment>
    );
  }

}

export default ScheduleControl;