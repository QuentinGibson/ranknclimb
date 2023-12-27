const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
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
    attack_class: 'melee', //melee or ranged
  },
  {
    id: '410544b2-4101-4371-3118-fec4b6a6442a',
    name: 'Ahri',
    icon: '/champion/Ahri',
    range: '550',
    resource: 'mana', //mana, energy, rage, etc
    attack_class: 'ranged', //melee or ranged
  },
  {
    id: '410544b2-4101-4371-3118-fec4b6a6442a',
    name: 'Akshan',
    icon: '/champion/Akshan',
    range: '525',
    resource: 'mana', //mana, energy, rage, etc
    attack_class: 'ranged', //melee or ranged
  },
  {
    id: '410544b2-4101-4211-3118-fec4b6a6442a',
    name: 'Annie',
    icon: '/champion/Annie',
    range: '550',
    resource: 'mana', //mana, energy, rage, etc
    attack_class: 'ranged', //melee or ranged
  },
];

const roles = [
  {
    id: '410544b2-4101-4371-9118-a4c4caa6442a',
    name: 'Top',
    icon: '/role/Top_icon.webp',
  },
  {
    id: '410544b2-4101-4371-1118-fec4b6a6442a',
    name: 'Jungle',
    icon: '/role/Jungle_icon.webp',
  },
  {
    id: '410544b2-4103-4371-1118-fcc4b6a6442a',
    name: 'Middle',
    icon: '/role/Middle_icon.webp',
  },
  {
    id: '410544b2-4101-4371-1118-fcc4b6a6442a',
    name: 'Bottom',
    icon: '/role/Bottom_icon.webp',
  },
  {
    id: '410544b2-4141-4371-1118-fec4b6a6442a',
    name: 'Support',
    icon: '/role/Support_icon.webp',
  },
];

const championClasses = [
  {
    id: '410544b2-4171-4371-1118-fcc4b6a6442a',
    champion_id: champions[0].id,
    class_id: classes[6].id,
  },
  {
    id: '410544b2-4101-4391-2518-fcc4b6a6442a',
    champion_id: champions[0].id,
    class_id: classes[1].id,
  },
  {
    id: '410544b2-4101-4391-2519-fcc4b6a6442a',
    champion_id: champions[1].id,
    class_id: classes[4].id,
  },
  {
    id: '410544b2-4101-4391-2519-fac4b6a6442a',
    champion_id: champions[1].id,
    class_id: classes[2].id,
  },
  {
    id: '410544b2-4101-4391-2519-fac4b6aa442a',
    champion_id: champions[2].id,
    class_id: classes[3].id,
  },
  {
    id: '410544b2-4101-4371-2118-fbc4b6a6442a',
    champion_id: champions[2].id,
    class_id: classes[4].id,
  },
  {
    id: '410544b2-4101-4371-2118-ffc4b6a6442a',
    champion_id: champions[3].id,
    class_id: classes[2].id,
  },
];

const championRoles = [
  {
    id: '410544b3-4101-4071-2101-ffc4b6a6442a',
    champion_id: champions[0].id,
    role_id: roles[0].id,
  },
  {
    id: '410544b3-4101-4071-2101-fbc4b6a6442a',
    champion_id: champions[1].id,
    role_id: roles[2].id,
  },
  {
    id: '410544b2-4101-4371-2118-fac4b6a6442a',
    champion_id: champions[2].id,
    role_id: roles[2].id,
  },
  {
    id: '420544b2-4201-4371-2118-fdc4b6a6442a',
    champion_id: champions[3].id,
    role_id: roles[2].id,
  },
];

const decks = [
  {
    id: '41054432-1102-1371-9321-fbc4b6a6442a',
    champion_id: champions[0].id,
    keybind: 'p',
    name: 'Deathbringer Stance',
    icon: 'champion/Aatrox/Aatrox_passive.png',
  },
  {
    id: '41054432-1102-1371-1321-fbc3b6a6442a',
    champion_id: champions[0].id,
    keybind: 'q',
    name: 'The Darkin Blade',
    icon: 'champion/Aatrox/AatroxQ.png',
  },
  {
    id: '410544b2-4101-9370-9329-fac4b6a6442a',
    champion_id: champions[0].id,
    keybind: 'w',
    name: 'Infernal Chains',
    icon: 'champion/Aatrox/AatroxW.png',
  },
  {
    id: '210544f2-4101-9370-9329-fbc406a6442a',
    champion_id: champions[0].id,
    keybind: 'e',
    name: 'Umbral Dash',
    icon: 'champion/Aatrox/AatroxE.png',
  },
  {
    id: '210544f2-4101-9370-9329-fbc416a6442a',
    champion_id: champions[0].id,
    keybind: 'r',
    name: 'World Ender',
    icon: 'champion/Aatrox/AatroxR.png',
  },
];

const cards = [
  {
    id: '210544a2-4101-9370-9329-fbc416a6442a',
    deckId: decks[0].id,
    question: 'How much does Aatrox passive bonus damage scale per level?',
    correctAnswer: '0.47%',
  },
  {
    id: '210544a2-4101-9370-9329-fdc416a64420',
    deckId: decks[0].id,
    question:
      'How much bonus damge does Aatrox deal with his passive at level 18?',
    correctAnswer: '12%',
  },
  {
    id: '210544a2-4101-9370-9329-fdc216a64420',
    deckId: decks[0].id,
    question:
      'How much bonus damge does Aatrox deal with his passive at level 1?',
    correctAnswer: '4%',
  },
];

const answerBanks = [
  {
    id: '210544a2-4101-9370-0329-fac416a64420',
    cardId: cards[0].id,
    content: '0.30%',
  },
  {
    id: '210544a9-4101-9370-0329-fac416a64420',
    cardId: cards[0].id,
    content: '0.33%',
  },
  {
    id: '410504b0-4101-4371-9325-fac416a64420',
    cardId: cards[0].id,
    content: '0.44%',
  },
  {
    id: '410504bf-4101-4371-9325-ffc416a64420',
    cardId: cards[0].id,
    content: '0.43%',
  },
  {
    id: '410504bf-4101-4371-b32a-ff0417a64420',
    cardId: cards[0].id,
    content: '0.50%',
  },
  {
    id: '410504bf-a101-4371-a32a-ff0417a64420',
    cardId: cards[0].id,
    content: '0.51%',
  },
  {
    id: '410504bf-a101-4371-a32a-ff0d17a64420',
    cardId: cards[0].id,
    content: '0.42%',
  },
  {
    id: '410504b0-a101-4371-a32a-ff0d17a64420',
    cardId: cards[0].id,
    content: '0.49%',
  },
  {
    id: '410504b0-a101-4371-a32a-ff0d17a6442a',
    cardId: cards[0].id,
    content: '0.40%',
  },

  {
    id: '410504b0-a101-4371-a32a-ff0df7a6442f',
    cardId: cards[1].id,
    content: '4%',
  },
  {
    id: '410504b0-a101-4371-a02a-ff0df7a6442f',
    cardId: cards[1].id,
    content: '5%',
  },
  {
    id: '410504b0-a101-4371-a02a-0f0df7a6442f',
    cardId: cards[1].id,
    content: '30%',
  },
  {
    id: '410504f0-a101-4371-a02a-0f0df7a6442f',
    cardId: cards[1].id,
    content: '20%',
  },
  {
    id: '490504f0-a101-4371-a02a-0f0df7f6442f',
    cardId: cards[1].id,
    content: '25%',
  },
  {
    id: '490504f0-a101-4371-a02a-9f0df7f6442f',
    cardId: cards[1].id,
    content: '30%',
  },
  {
    id: '490504f0-a101-4371-a02a-9f00f7f6442f',
    cardId: cards[1].id,
    content: '19%',
  },
  {
    id: '490504f0-a101-4371-a02a-9f0007f6442f',
    cardId: cards[1].id,
    content: '15%',
  },
  {
    id: '490504f0-a101-4371-a02a-9f1007f6442f',
    cardId: cards[1].id,
    content: '10%',
  },

  {
    id: '490504f0-a101-4371-a02a-1f1007f6442f',
    cardId: cards[2].id,
    content: '8%',
  },
  {
    id: '490504f0-a101-4371-a02a-af1007f6442f',
    cardId: cards[2].id,
    content: '1%',
  },
  {
    id: '490504f0-a101-4371-a02a-af1107f6442f',
    cardId: cards[2].id,
    content: '7%',
  },
  {
    id: '490504f0-a101-4371-ab2a-af1107f6442f',
    cardId: cards[2].id,
    content: '10%',
  },
  {
    id: '490504f0-a101-4371-ab2a-af1107f6442a',
    cardId: cards[2].id,
    content: '5%',
  },
  {
    id: '490504f0-a101-4371-ab2a-bf1107f6442f',
    cardId: cards[2].id,
    content: '0%',
  },
  {
    id: '490504f0-a101-4371-ab2a-af9107f6442f',
    cardId: cards[2].id,
    content: '11%',
  },
  {
    id: '490504f0-a101-4371-ab2a-af1107f64429',
    cardId: cards[2].id,
    content: '2%',
  },
  {
    id: '490504f0-a101-4371-ab2a-a31107f6442f',
    cardId: cards[2].id,
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
