import React from 'react';
import Next from './Next';


class Pokedex extends React.Component {
  

  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        {}
        <Next pokemons={pokemons} />
      </div>
    );
  }
};

export default Pokedex;