// green = #73d958
// red = #f24646
// blue = #66B6EC
// purple = #d12deb
// grey = #dedbd3

let serperiorGridDataNoColor = [
  // Center Grids
  { q: 0, r: 0, data: { name: 'Serperior', cellNum: 0 }, fill: 'white' },
  {
    q: 0,
    r: -1,
    data: { name: 'Speed + 5', description: 'Speed + 5', energy: 0, cellNum: 6 }
  },
  {
    q: 0,
    r: 1,
    data: {
      name: 'Defense + 5',
      description: 'Defense + 5',
      energy: 0,
      cellNum: 3
    }
  },
  {
    q: 1,
    r: -1,
    data: { name: 'HP + 10', description: 'HP + 10', energy: 0, cellNum: 1 }
  },
  {
    q: 1,
    r: 0,
    data: {
      name: 'Sp.Atk + 5',
      description: 'Sp.Atk + 5',
      energy: 0,
      cellNum: 2
    }
  },
  {
    q: -1,
    r: 1,
    data: {
      name: 'Sp.Atk + 5',
      description: 'Sp.Atk + 5',
      energy: 0,
      cellNum: 4
    }
  },
  {
    q: -1,
    r: 0,
    data: {
      name: 'Sp.Def + 5',
      description: 'Sp.Def + 5',
      energy: 0,
      cellNum: 5
    }
  },
  {
    q: 0,
    r: 3,
    data: {
      name: 'Sync + 25',
      description: 'Shoot for the Stars Leaf Storm Power + 25 [Req. Lv3 Sync]',
      energy: 5,
      cellNum: 48
    },
    fill: '#dedbd3'
  },
  {
    q: 0,
    r: -3,
    data: {
      name: 'Sync + 25',
      description: 'Shoot for the Stars Leaf Storm Power + 25 [Req. Lv3 Sync]',
      energy: 5,
      cellNum: 47
    },
    fill: '#dedbd3'
  },

  // Upper Right Grids
  {
    q: 1,
    r: -2,
    data: {
      name: 'Sp.Atk + 5',
      description: 'Sp.Atk + 5',
      energy: 2,
      cellNum: 7
    }
  },
  {
    q: 1,
    r: -3,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4',
      energy: 2,
      cellNum: 9
    }
  },
  {
    q: 1,
    r: -4,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4',
      energy: 3,
      cellNum: 12
    }
  },
  {
    q: 1,
    r: -5,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4 [Req. Lv3 Sync]',
      energy: 3,
      cellNum: 15
    },
    fill: '#dedbd3'
  },
  {
    q: 2,
    r: -3,
    data: {
      name: 'G.D. + 3',
      description: 'Giga Drain Power + 3',
      energy: 2,
      cellNum: 8
    }
  },
  {
    q: 2,
    r: -4,
    data: {
      name: 'Sp.Atk + 10',
      description: 'Sp.Atk + 10',
      energy: 4,
      cellNum: 11
    }
  },
  {
    q: 2,
    r: -5,
    data: {
      name: 'Sp.Def + 10',
      description: 'Sp.Def + 10',
      energy: 6,
      cellNum: 14
    }
  },
  {
    q: 2,
    r: -6,
    data: {
      name: 'E.B. MGR 3',
      description: 'Energy Ball Move Gauge Refresh 3 [Req. Lv3 Sync]',
      energy: 6,
      cellNum: 17
    },
    fill: '#dedbd3'
  },
  {
    q: 3,
    r: -4,
    data: {
      name: 'G.D. + 3',
      description: 'Giga Drain Power + 3',
      energy: 3,
      cellNum: 10
    }
  },
  {
    q: 3,
    r: -5,
    data: {
      name: 'G.D. + 3',
      description: 'Giga Drain Power + 3',
      energy: 3,
      cellNum: 13
    }
  },
  {
    q: 3,
    r: -6,
    data: {
      name: 'G.D. MGR 3',
      description: 'Giga Drain Move Gauge Refresh 3',
      energy: 6,
      cellNum: 16
    }
  },

  // Upper Left
  {
    q: -1,
    r: -1,
    data: {
      name: 'Sp.Def + 5',
      description: 'Sp.Def + 5',
      energy: 2,
      cellNum: 39
    }
  },
  {
    q: -1,
    r: -2,
    data: {
      name: 'Defense + 10',
      description: 'Defense + 10',
      energy: 4,
      cellNum: 42
    }
  },
  {
    q: -1,
    r: -3,
    data: {
      name: 'Speeding Sun 2',
      description: 'Speeding Sun 2 [Req. Lv3 Sync]',
      energy: 10,
      cellNum: 45
    },
    fill: '#dedbd3'
  },
  {
    q: -2,
    r: 0,
    data: {
      name: 'E.B.O.A.R 1',
      description:
        'Energy Ball On a Roll 1 - Raises the chance of lowering stat values with the additional effects',
      energy: 7,
      cellNum: 38
    }
  },
  {
    q: -2,
    r: -1,
    data: {
      name: 'Solar Flare 5',
      description:
        'Solar Flare 5 - Powers up sync moves when the weather is sunny',
      energy: 5,
      cellNum: 41
    }
  },
  {
    q: -2,
    r: -2,
    data: { name: 'HP + 20', description: 'HP + 20', energy: 6, cellNum: 44 }
  },
  {
    q: -3,
    r: 0,
    data: {
      name: 'G.D. + 3',
      description: 'Giga Drain Power + 3',
      energy: 2,
      cellNum: 40
    }
  },
  {
    q: -3,
    r: -1,
    data: {
      name: 'Defense + 10',
      description: 'Defense + 10',
      energy: 4,
      cellNum: 43
    }
  },
  {
    q: -3,
    r: -2,
    data: {
      name: 'Solar Shield',
      description: 'Solar Shield [Req. Lv3 Sync]',
      energy: 7,
      cellNum: 46
    },
    fill: '#dedbd3'
  },

  // Lower Left
  {
    q: -3,
    r: 3,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4',
      energy: 2,
      cellNum: 19
    }
  },
  {
    q: -3,
    r: 4,
    data: {
      name: 'Sp.Def + 10',
      description: 'Sp.Def + 10',
      energy: 4,
      cellNum: 22
    }
  },
  {
    q: -3,
    r: 5,
    data: {
      name: 'G.D. M.H. 2',
      description:
        "Giga Drain Master Healer 2 - increases the amount of HP restored by the user's healing moves [Req. Lv3 Sync]",
      energy: 10,
      cellNum: 25
    },
    fill: '#dedbd3'
  },
  {
    q: -2,
    r: 2,
    data: {
      name: 'Defense + 5',
      description: 'Defense + 5',
      energy: 2,
      cellNum: 18
    }
  },
  {
    q: -2,
    r: 3,
    data: {
      name: 'Power Flux 5',
      description:
        'Power Flux 5 - The fuller the move gauge, the more this powers up moves',
      energy: 10,
      cellNum: 21
    }
  },
  {
    q: -2,
    r: 4,
    data: {
      name: 'Sp.Atk + 20',
      description: 'Sp.Atk + 20',
      energy: 10,
      cellNum: 24
    }
  },
  {
    q: -1,
    r: 2,
    data: {
      name: 'Sp.Def + 5',
      description: 'Sp.Def + 5',
      energy: 2,
      cellNum: 20
    }
  },
  {
    q: -1,
    r: 3,
    data: {
      name: 'Speed + 10',
      description: 'Speed + 10',
      energy: 4,
      cellNum: 23
    }
  },
  {
    q: -1,
    r: 4,
    data: {
      name: 'Solar Flare 5',
      description:
        'Solar Flare 5 - Powers up sync moves when the weather is sunny [Req. Lv3 Sync]',
      energy: 5,
      cellNum: 26
    },
    fill: '#dedbd3'
  },

  // Lower Right
  {
    q: 3,
    r: 1,
    data: {
      name: 'T.T.E. MPR 2',
      description: 'Time to Energize MP Refresh 2',
      energy: 7,
      cellNum: 30
    }
  },
  {
    q: 3,
    r: 2,
    data: {
      name: 'T.T.E. MPR 2',
      description: 'Time to Energize MP Refresh 2',
      energy: 7,
      cellNum: 33
    }
  },
  {
    q: 3,
    r: 3,
    data: {
      name: 'T.T.E. S',
      description:
        'Time to Energize Selfless - Makes opponents target the user for a short time when a move is successful in a pinch',
      energy: 5,
      cellNum: 36
    }
  },
  {
    q: 2,
    r: 1,
    data: {
      name: 'E.B. + 4',
      description: 'Energy Ball Power + 4',
      energy: 3,
      cellNum: 28
    }
  },
  {
    q: 2,
    r: 2,
    data: {
      name: 'Speed + 10',
      description: 'Speed + 10',
      energy: 3,
      cellNum: 31
    }
  },
  {
    q: 2,
    r: 3,
    data: { name: 'HP + 20', description: 'HP + 20', energy: 5, cellNum: 34 }
  },
  {
    q: 2,
    r: 4,
    data: {
      name: 'On the Ropes 3',
      description:
        'On the Ropes 3 - Reduces damage when the Pokemon is in a pinch and is hit by a physical attack move [Req. Lv3 Sync]',
      energy: 10,
      cellNum: 37
    },
    fill: '#dedbd3'
  },
  {
    q: 1,
    r: 1,
    data: {
      name: 'Defense + 5',
      description: 'Defense + 5',
      energy: 2,
      cellNum: 27
    }
  },
  {
    q: 1,
    r: 2,
    data: {
      name: 'G.D. + 3',
      description: 'Giga Drain Power + 3',
      energy: 3,
      cellNum: 29
    }
  },
  {
    q: 1,
    r: 3,
    data: {
      name: 'X Sp.Atk MPR 2',
      description: 'X Sp.Atk All MP Refresh 2',
      energy: 7,
      cellNum: 32
    }
  },
  {
    q: 1,
    r: 4,
    data: {
      name: 'X Sp.Atk MPR 2',
      description: 'X Sp.Atk All MP Refresh 2 [Req. Lv3 Sync]',
      energy: 7,
      cellNum: 35
    },
    fill: '#dedbd3'
  }
];

export default serperiorGridDataNoColor.map((obj, index) => {
  if (!('fill' in obj)) {
    let blueGrids = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      11,
      14,
      18,
      20,
      22,
      23,
      24,
      27,
      31,
      34,
      39,
      42,
      43,
      44
    ];
    let greenGrids = [8, 9, 10, 12, 13, 15, 19, 28, 29, 40];
    let yellowGrids = [21, 26, 37, 41, 45, 46];
    let redGrids = [16, 17, 25, 30, 32, 33, 35, 36, 38];
    let purpleGrids = [47, 48];
    if (blueGrids.indexOf(obj.data.cellNum) > -1) {
      // 66B6EC - blue
      obj['fill'] = '#66B6EC';
      return obj;
    }
    // green = #73d958
    if (greenGrids.indexOf(obj.data.cellNum) > -1) {
      obj['fill'] = '#73d958';
      return obj;
    }
    if (yellowGrids.indexOf(obj.data.cellNum) > -1) {
      obj['fill'] = 'yellow';
      return obj;
    }
    // red = #f24646
    if (redGrids.indexOf(obj.data.cellNum) > -1) {
      obj['fill'] = '#f24646';
      return obj;
    }
    if (purpleGrids.indexOf(obj.data.cellNum) > -1) {
      obj['fill'] = 'purple';
      return obj;
    }
  } else {
    return obj;
  }
  return { ...obj };
});
