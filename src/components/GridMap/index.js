import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import { HexGrid, Layout, Hexagon, Text } from '../Hexagon';
import {
  pikachuGridData,
  torkoalGridData,
  infernapeGridData,
  dewgongGridData,
  haxorusGridData,
  kingdraGridData,
  serperiorGridData,
  vileplumeGridData,
  mewGridData,
  metagrossGridData,
  shortenedMoveNameByCellId
} from '../../data';
import {
  selectGrid,
  deselectGrid,
  addToGridList,
  removeFromGridList,
  subtractFromRemainingEnergy,
  addBackToRemainingEnergy,
  resetGrids
} from '../../actions/actionCreators';
import styles from './styles';

const allSyncGrids = {
  pikachuGridData,
  torkoalGridData,
  infernapeGridData,
  dewgongGridData,
  haxorusGridData,
  kingdraGridData,
  serperiorGridData,
  vileplumeGridData,
  mewGridData,
  metagrossGridData
};

class GridMap extends Component {
  state = {
    initialRender: true,
    mapSizeBoundaries: {
      width: '100vw',
      height: 440,
      viewbox: '-35 -35 70 70'
    },
    screenWidth: document.body.clientWidth
  };

  componentDidMount() {
    setTimeout(() => this.fitMapToScreen(), 1000);
    window.addEventListener('resize', this.fitMapToScreen);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.fitMapToScreen);
  }

  fitMapToScreen = () => {
    const clientWrappingBoundaries = {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    };
    let updatedMapSizeBoundaries = {
      ...this.state.mapSizeBoundaries
    };

    if (clientWrappingBoundaries.width > 1200) {
      updatedMapSizeBoundaries = {
        width: 800,
        height: 768,
        viewbox: '-50 -50 100 100'
      };
    }

    if (
      clientWrappingBoundaries.width > 960 &&
      clientWrappingBoundaries.width < 1200
    ) {
      updatedMapSizeBoundaries = {
        width: '100vw',
        height: 768,
        viewbox: '-15 -50 100 100'
      };
    }

    if (clientWrappingBoundaries.width <= 960) {
      updatedMapSizeBoundaries = {
        width: '100vw',
        height: 768,
        viewbox: '-50 -50 100 100'
      };
    }

    if (clientWrappingBoundaries.width < 768) {
      updatedMapSizeBoundaries = {
        width: '100vw',
        height: (
          ((clientWrappingBoundaries.width / 100) * 73.28) / 2 +
          clientWrappingBoundaries.width
        ).toFixed(),
        viewbox: '-35 -35 70 70'
      };
    }

    this.setState(prevState => ({
      ...prevState,
      initialRender: false,
      mapSizeBoundaries: {
        ...prevState.mapSizeBoundaries,
        ...updatedMapSizeBoundaries
      }
    }));
  };

  handleClick(e, index, data) {
    e.stopPropagation();

    if (!this.props.grid.selectedCellsById[data.cellId]) {
      this.props.selectGrid(data.cellId);
      this.props.addToGridList(data);
      this.props.subtractFromRemainingEnergy(data);
    } else {
      this.props.deselectGrid(data.cellId);
      this.props.removeFromGridList(data);
      this.props.addBackToRemainingEnergy(data);
    }
  }

  getFillColorByMoveType = ({type, group}) => {
    let colorsByTypeDef = {
      statsBoost: "#66b6ec", // blue
      passive: "#ffff00", // yellow
      moveEffect: "#f24646", // red
      movePowerBoost: "#73d958", // green
      moveAccuracyBoost: "#73d958", // green
      syncBoost: "#d12deb" // purple
    };
    let colorsByTypeId = {
      1: colorsByTypeDef.statsBoost,
      2: colorsByTypeDef.statsBoost,
      3: colorsByTypeDef.statsBoost,
      4: colorsByTypeDef.statsBoost,
      5: colorsByTypeDef.statsBoost,
      6: colorsByTypeDef.statsBoost,
      7: colorsByTypeDef.passive,
      8: colorsByTypeDef.moveEffect,
      9: colorsByTypeDef.movePowerBoost,
      10: colorsByTypeDef.moveAccuracyBoost,
    };
    let cellColor = colorsByTypeDef.syncBoost;

    if (group !== 3) {
      cellColor = colorsByTypeId[type];
    }

    return cellColor;
  };

  renderMoveName = (moveName, abilityId) => {
    let renderedMoveName = moveName;

    if (moveName.length > 11) {
      // TODO: Maybe add logic to render the shortened `moveName` here
      if (shortenedMoveNameByCellId[abilityId]) {
        renderedMoveName = shortenedMoveNameByCellId[abilityId];
      }
    }

    return renderedMoveName;
  };

  renderHexagonCells = () =>
    allSyncGrids[`${this.props.pokemon}GridData`].map((cell, index) => {
      let hexagonProps = {
        key: this.props.pokemon,
        data: {
          cellId: cell.cellId,
          name: cell.move.name,
          description: cell.move.description,
          energy: cell.move.energyCost
        },
        q: 0,
        r: 0,
        s: 0,
        fill: "#fff",
        onMouseEnter: this.mouseEnter,
        onMouseLeave: this.mouseLeave
      };

      if (index !== 0) {
        hexagonProps = {
          ...hexagonProps,
          key: cell.cellId,
          q: cell.coords.q,
          r: cell.coords.r,
          fill: this.getFillColorByMoveType({type: cell.ability.type, group: cell.move.group}),
          onClickHandler: (e, data) => this.handleClick(e, index, data),
          className: this.props.grid.selectedCellsById[cell.cellId]
            ? "selected"
            : null
        };
      }

      return (
        <Hexagon {...hexagonProps}>
          <Text>{this.renderMoveName(cell.move.name, cell.ability.abilityId)}</Text>
          {this.state.screenWidth < 960 && cell.move.energyCost !== undefined ? (
            <text
              className="energy-inside-grid"
              textAnchor="middle"
              x="0"
              y="1.6em"
            >
              ({cell.move.energyCost})
            </text>
          ) : null}
        </Hexagon>
      );
    });

  render() {
    const { mapSizeBoundaries, initialRender } = this.state;
    const { classes } = this.props;

    return initialRender ? (
      <div className={classes.progressWrapper}>
        <CircularProgress color="secondary" />
      </div>
    ) : (
      <HexGrid
        width={mapSizeBoundaries.width}
        height={mapSizeBoundaries.height}
        viewBox={mapSizeBoundaries.viewbox}
      >
        <Layout
          size={{ x: 4.5, y: 4.5 }}
          flat={true}
          spacing={1.1}
          origin={{ x: 0, y: 0 }}
        >
          {this.renderHexagonCells()}
        </Layout>
      </HexGrid>
    );
  }
}

const mapStateToProps = state => ({
  pokemon: state.pokemon.selectedPokemon.toLowerCase(),
  grid: state.grid
});

export default connect(mapStateToProps, {
  selectGrid,
  deselectGrid,
  addToGridList,
  removeFromGridList,
  subtractFromRemainingEnergy,
  addBackToRemainingEnergy,
  resetGrids
})(withStyles(styles)(GridMap));
