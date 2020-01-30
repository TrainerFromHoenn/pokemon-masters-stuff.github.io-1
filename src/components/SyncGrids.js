import React, { Component } from 'react';
import { connect } from 'react-redux';

import SelectPokemonDropdown from "./SelectPokemonDropdown";
import PikachuGrids from './GridMaps/PikachuGrids';
import TorkoalGrids from './GridMaps/TorkoalGrids';
import InfernapeGrids from './GridMaps/InfernapeGrids';
import DewgongGrids from './GridMaps/DewgongGrids';
import HaxorusGrids from './GridMaps/HaxorusGrids';
import KingdraGrids from './GridMaps/KingdraGrids';
import SerperiorGrids from './GridMaps/SerperiorGrids';
import VileplumeGrids from './GridMaps/VileplumeGrids';
import { selectPokemon, resetGrids } from '../actions/actionCreators';

class SyncGrids extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.selectPokemon = this.selectPokemon.bind(this);
  }

  renderContent() {
    switch (this.props.pokemon.selectedPokemon) {
      case 'Pikachu':
        return <PikachuGrids />;
      case 'Torkoal':
        return <TorkoalGrids />;
      case 'Infernape':
        return <InfernapeGrids />;
      case 'Dewgong':
        return <DewgongGrids />;
      case 'Haxorus':
        return <HaxorusGrids />;
      case 'Kingdra':
        return <KingdraGrids />;
      case 'Serperior':
        return <SerperiorGrids />;
      case 'Vileplume':
        return <VileplumeGrids />;
      default:
        return <PikachuGrids />;
    }
  }

  selectPokemon(value) {
    this.props.selectPokemon(value);
    this.props.resetGrids();
  }

  render() {
    return (
      <div>
        <SelectPokemonDropdown onChangeHandler={this.selectPokemon} />
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemon: state.pokemon,
  grid: state.grid
});

export default connect(mapStateToProps, {
  selectPokemon,
  resetGrids
})(SyncGrids);
