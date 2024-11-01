import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Yaya Dia',
        bio: 'Développeur passionné par le web et React',
        imgSrc: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Ffr%2Fphotos%2Fdeveloppeur-web&psig=AOvVaw1gLc69haQbFYCrtCpsqDKl&ust=1730548006240000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiO4fGHu4kDFQAAAAAdAAAAABAE', // une image de profil fictive
        profession: 'Développeur Web'
      },
      show: false,
      timeElapsed: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1
      }));
    }, 1000); // incrémente le compteur chaque seconde
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  };

  render() {
    const { person, show, timeElapsed } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? 'Masquer le profil' : 'Afficher le profil'}
        </button>

        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profil" />
            <h2>{person.profession}</h2>
          </div>
        )}

        <p>Temps écoulé depuis le montage : {timeElapsed} secondes</p>
      </div>
    );
  }
}

export default App;
