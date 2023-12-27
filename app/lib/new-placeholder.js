const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
    role: 'user',
    verified: true,
  },
];

const classes = [
  {
    id: '410544b2-4011-3271-3115-fec4b6a6442a',
    name: 'Controller',
    icon: '/class/Controller_icon.webp',
  },
  {
    id: '410544b2-4031-3271-3111-fec4b6a6442a',
    name: 'Fighter',
    icon: '/class/Fighter_icon.webp',
  },
  {
    id: '410544b2-4041-3271-3112-fec4b6a6442a',
    name: 'Mage',
    icon: '/class/Mage_icon.webp',
  },
  {
    id: '410544b2-4061-3271-3113-fec4b6a6442a',
    name: 'Marksman',
    icon: '/class/Marksman_icon.webp',
  },
  {
    id: '410544b2-4071-3271-3115-fec4b6a6442a',
    name: 'Slayer',
    icon: '/class/Slayer_icon.webp',
  },
  {
    id: '410544b2-4081-3271-3115-fec4b6a6442a',
    name: 'Specialist',
    icon: '/class/Specialist_icon.webp',
  },
  {
    id: '410544b2-4091-3271-3115-fec4b6a6442a',
    name: 'Tank',
    icon: '/class/Tank_icon.webp',
  },
];

const champions = [
  {
    id: '410544b2-4101-4371-3118-fec4b6a6442a',
    name: 'Aatrox',
    icon: '/champion/Aatrox',
    range: '175',
    resource: 'Blood Well', //mana, energy, rage, etc
    attackClass: 'melee', //melee or ranged
  },
  {
    id: '410544b2-4101-4371-3118-fec4b6a6442a',
    name: 'Ahri',
    icon: '/champion/Ahri',
    range: '550',
    resource: 'mana', //mana, energy, rage, etc
    attackClass: 'ranged', //melee or ranged
  },
  {
    id: '410544b2-4101-4371-3118-fec4b6a6442a',
    name: 'Akshan',
    icon: '/champion/Akshan',
    range: '525',
    resource: 'mana', //mana, energy, rage, etc
    attackClass: 'ranged', //melee or ranged
  },
  {
    id: '410544b2-4101-4211-3118-fec4b6a6442a',
    name: 'Annie',
    icon: '/champion/Annie',
    range: '550',
    resource: 'mana', //mana, energy, rage, etc
    attackClass: 'ranged', //melee or ranged
  },
];

const roles = [
  {
    id: '410544b2-4101-4371-1118-fwc4b6a6442a',
    name: 'Top',
    icon: '/role/Top_icon.webp',
  },
  {
    id: '410544b2-4101-4371-1118-fwc4b6a6442a',
    name: 'Jungle',
    icon: '/role/Jungle_icon.webp',
  },
  {
    id: '410544b2-4101-4371-1118-fwc4b6a6442a',
    name: 'Middle',
    icon: '/role/Middle_icon.webp',
  },
  {
    id: '410544b2-4101-4371-1118-fwc4b6a6442a',
    name: 'Bottom',
    icon: '/role/Bottom_icon.webp',
  },
  {
    id: '410544b2-4101-4371-1118-fwc4b6a6442a',
    name: 'Support',
    icon: '/role/Support_icon.webp',
  },
];

const championClasses = [
  {
    id: '410544b2-4101-4371-1118-fwc4b6a6442a',
    champion_id: champions[0],
    class_id: classes[6],
  },
  {
    id: '410544b2-4101-4371-2118-fwc4b6a6442a',
    champion_id: champions[0],
    class_id: classes[1],
  },
  {
    id: '410544b2-4101-4371-2118-fwc4b6a6442a',
    champion_id: champions[1],
    class_id: classes[4],
  },
  {
    id: '410544b2-4101-4371-2118-fwc4b6a6442a',
    champion_id: champions[1],
    class_id: classes[2],
  },
  {
    id: '410544b2-4101-4371-2118-fwc4b6a6442a',
    champion_id: champions[2],
    class_id: classes[3],
  },
  {
    id: '410544b2-4101-4371-2118-fwc4b6a6442a',
    champion_id: champions[2],
    class_id: classes[4],
  },
  {
    id: '410544b2-4101-4371-2118-fwc4b6a6442a',
    champion_id: champions[3],
    class_id: classes[2],
  },
];

const championRoles = [
  {
    id: '410544b2-4101-4371-2118-fwc4b6a6442a',
    champion_id: champions[0],
    role_id: roles[0],
  },
  {
    id: '410544b2-4101-4371-2118-fwc4b6a6442a',
    champion_id: champions[1],
    role_id: roles[2],
  },
  {
    id: '410544b2-4101-4371-2118-fwc4b6a6442a',
    champion_id: champions[2],
    role_id: roles[2],
  },
  {
    id: '410544b2-4101-4371-2118-fwc4b6a6442a',
    champion_id: champions[3],
    role_id: roles[2],
  },
  {
    id: '410544b2-4101-4371-2118-fwc4b6a6442a',
    champion_id: champions[4],
    role_id: roles[2],
  },
];

const decks = [
  {
    id: '410544b2-4102-4371-9321-fwc4b6a6442a',
    champion_id: champions[0],
    keybind: 'p',
    name: 'Deathbringer Stance',
    icon: 'champion/Aatrox/Aatrox_passive.png',
  },
  {
    id: '410544b2-4101-4371-9322-fwc4b6a6442a',
    champion_id: champions[0],
    keybind: 'q',
    name: 'The Darkin Blade',
    icon: 'champion/Aatrox/AatroxQ.png',
  },
  {
    id: '410544b2-4101-4371-9323-fwc4b6a6442a',
    champion_id: champions[0],
    keybind: 'w',
    name: 'Infernal Chains',
    icon: 'champion/Aatrox/AatroxW.png',
  },
  {
    id: '410544b2-4101-4371-9324-fwc4b6a6442a',
    champion_id: champions[0],
    keybind: 'e',
    name: 'Umbral Dash',
    icon: 'champion/Aatrox/AatroxE.png',
  },
  {
    id: '410544b2-4101-4371-9325-fwc4b6a6442a',
    champion_id: champions[0],
    keybind: 'r',
    name: 'World Ender',
    icon: 'champion/Aatrox/AatroxR.png',
  },
];

const cards = [
  {
    id: '410544b2-4101-4371-9325-emc4i6a6l42a',
    deckId: decks[0],
    question: 'How much does Aatrox passive bonus damage scale per level?',
    correctAnswer: '0.47%',
  },
  {
    id: '410544b2-4101-4371-9325-emc4i6a6l42a',
    deckId: decks[0],
    question:
      'How much bonus damge does Aatrox deal with his passive at level 18?',
    correctAnswer: '12%',
  },
  {
    id: '410544b2-4101-4371-9325-emc4i6a6l42a',
    deckId: decks[0],
    question:
      'How much bonus damge does Aatrox deal with his passive at level 1?',
    correctAnswer: '4%',
  },
];

const answerBanks = [
  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[0],
    content: '0.30%',
  },
  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[0],
    content: '0.33%',
  },
  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[0],
    content: '0.44%',
  },
  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[0],
    content: '0.43%',
  },
  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[0],
    content: '0.50%',
  },
  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[0],
    content: '0.51%',
  },
  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[0],
    content: '0.42%',
  },
  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[0],
    content: '0.49%',
  },
  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[0],
    content: '0.40%',
  },

  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[1],
    content: '4%',
  },
  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[1],
    content: '5%',
  },
  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[1],
    content: '30%',
  },
  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[1],
    content: '20%',
  },
  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[1],
    content: '25%',
  },
  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[1],
    content: '30%',
  },
  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[1],
    content: '19%',
  },
  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[1],
    content: '15%',
  },
  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[1],
    content: '10%',
  },

  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[2],
    content: '8%',
  },
  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[2],
    content: '1%',
  },
  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[2],
    content: '7%',
  },
  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[2],
    content: '10%',
  },
  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[2],
    content: '5%',
  },
  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[2],
    content: '0%',
  },
  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[2],
    content: '11%',
  },
  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[2],
    content: '2%',
  },
  {
    id: '410544b2-4101-4371-9325-nmc4i6f6i42a',
    cardId: cards[2],
    content: '6%',
  },
];

module.exports = {
  users,
  answerBanks,
  cards,
  championClasses,
  championRoles,
  champions,
  classes,
  decks,
  roles,
};
