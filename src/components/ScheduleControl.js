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
          <h3>{today.day}</h3>
          <h4>{today.location}</h4>
          <p>{today.hours}</p>
          <p>{today.booth}</p>
          <h3>{tomorrow.day}</h3>
          <h4>{tomorrow.location}</h4>
          <p>{tomorrow.hours}</p>
          <p>{tomorrow.booth}</p>
        </div>
        <button onClick={this.handleClick}>Next Day</button>
      </React.Fragment>
    );
  }

}

export default ScheduleControl;