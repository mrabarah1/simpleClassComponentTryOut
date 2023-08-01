import React, { Component } from 'react';


class App extends Component {
  state = {
    person: {
      fullName: "Emeka Abarah",
      bio: "Passionate to learn new things and write clean codes",
      imgSrc:
        "https://media.licdn.com/dms/image/D4D03AQEbZafNPR2rPg/profile-displayphoto-shrink_800_800/0/1666481161004?e=1696464000&v=beta&t=0otbYURDhqQDJ9RL61EDfuaoWfYU_A2Kt5GE5gzjbnQ",
      profession: "Software Engineer",
    },
    show: false,
    mounTime: Date.now(),
  };

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          mounTime: new Date(),
        }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleToggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountTime } = this.state;

    return (
      <div className='arrange'>
        <button onClick={this.handleToggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <img src={imgSrc} alt="Profile"  className='img'/>
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
        {/* <p>
          Component mounted since: {Math.floor((new Date() - mountTime) / 1000)}
          seconds ago.
        </p> */}
      </div>
    );
  }
}
export default App;

// function App() {
//   return (
//     <div>
//       <h1>Emeka World</h1>
//     </div>
//   );
// }

// export default App;

