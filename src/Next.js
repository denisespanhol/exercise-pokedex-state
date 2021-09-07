import React, {Component} from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Next extends Component {
  constructor() {
    super()

    this.nextPokemon = this.nextPokemon.bind(this);
    this.comparePokemon = this.comparePokemon.bind(this);
    this.compareByType = this.compareByType.bind(this);

    this.state = {
      thisPokemon: 0,
      typePokemon: "All",
    }
  }

  nextPokemon() {
    this.setState((prevState) => ({
        thisPokemon: prevState.thisPokemon + 1,
      }),
    )}
    
  comparePokemon() {
    if (this.state.thisPokemon < pokemons.length - 1 && this.state.typePokemon === 'All') {
      this.nextPokemon();
    } else if (this.state.thisPokemon < 1 && this.state.typePokemon === 'Fire') {
      this.nextPokemon();
    } else if (this.state.thisPokemon < 1 && this.state.typePokemon === 'Psychic') {
      this.nextPokemon();
    } else {
      this.setState(() => ({
        thisPokemon: 0,
      }),)
    }
  }

  compareByType({ target }) {
    this.setState((_prevState) => ({
      typePokemon: target.value,
      thisPokemon: 0,
    }))
  }

  render() {
    const { pokemons } = this.props;
    const { typePokemon } = this.state;
    const { thisPokemon } = this.state;
    return (
      <div className="pokedex">
        {typePokemon === 'All' ? pokemons.filter((pokemon, index) => pokemons[index] === pokemons[thisPokemon] ).map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />) : pokemons.filter((pokemon) => pokemon.type === typePokemon).filter((pokemon, index) => pokemons[index] === pokemons[thisPokemon] ).map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
        <button value='All' onClick={ this.compareByType }>All</button>
        <button value='Electric' onClick={ this.compareByType }>Electric</button>
        <button value='Fire' onClick={ this.compareByType }>Fire</button>
        <button value='Bug' onClick={ this.compareByType }>Bug</button>
        <button value='Poison' onClick={ this.compareByType }>Poison</button>
        <button value='Psychic' onClick={ this.compareByType }>Psychic</button>
        <button value='Normal' onClick={ this.compareByType }>Normal</button>
        <button value='Dragon' onClick={ this.compareByType } >Dragon</button>
        <button onClick={ this.comparePokemon }>Next!</button>
      </div>
    );
  }
};

export default Next;
