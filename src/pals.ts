import { IPal, SuitabilitiesEnum, TypesEnum } from "./interfaces";

export const pals: IPal[] = [
  {
    id: 1,
    key: "001",
    image: "/public/images/001.png",
    name: "Lamball",
    wiki: "https://palworld.fandom.com/wiki/Lamball",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Wool", "Lamball Mutton"],
    aura: {
      name: "Fluffy Shield",
      description:
        "When activated, equips to the player and becomes a shield.\nSometimes drops Wool when assigned to Ranch.",
    },
    description:
      "A walk up a hill tends to end with this Pal tumbling back down. This causes it to become dizzy and unable to move, making it easy to capture and kill. As a result, this pal has tumbled down to the very bottom of the food chain itself.",
  },
  {
    id: 2,
    key: "002",
    image: "/public/images/002.png",
    name: "Cattiva",
    wiki: "https://palworld.fandom.com/wiki/Cattiva",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 1,
      },
    ],
    drops: ["Red Berries"],
    aura: {
      name: "Cat Helper",
      description:
        "While in team, Cattiva helps carry supplies, increasing the player's max carrying capacity.",
    },
    description:
      "At a glance it appears full of confidence, but it is in fact weak and cowardly.\nBeing toyed with by a Cattiva is in many ways the greatest of disgraces.",
  },
  {
    id: 3,
    key: "003",
    image: "/public/images/003.png",
    name: "Chikipi",
    wiki: "https://palworld.fandom.com/wiki/Chikipi",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Egg", "Chikipi Poultry"],
    aura: {
      name: "Egg Layer",
      description: "Sometimes lays an Egg when assigned to Ranch.",
    },
    description:
      "Extremely weak and far too delicious. It is one of the weakest Pal alongside Lamball. No matter how many are hunted, they just keep appearing.",
  },
  {
    id: 4,
    key: "004",
    image: "/public/images/004.png",
    name: "Lifmunk",
    wiki: "https://palworld.fandom.com/wiki/Lifmunk",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
    ],
    drops: ["Berry Seeds", "Low Grade Medical Supplies"],
    aura: {
      name: "Lifmunk Recoil",
      description:
        "When activated, leaps into the player's head and uses a submachine gun to follows up player attacks.",
    },
    description:
      "Intelligent as a five to sever-year-old human child. It makes a wonderful partner, but there have been more than a few cases where they've killed their master after learning to use weapons.",
  },
  {
    id: 5,
    key: "005",
    image: "/public/images/005.png",
    name: "Foxparks",
    wiki: "https://palworld.fandom.com/wiki/Foxparks",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 1,
      },
    ],
    drops: ["Leather", "Flame Organ"],
    aura: {
      name: "Huggy Fire",
      description:
        "When activated, equips to the player and transforms into a flamethrower.",
    },
    description:
      "It is unskilled at controlling fire from the moment it is born and tends to choke on the flames it breathes unintentionally. Foxparks sneezes are one of the leading causes of forest fires.",
  },
  {
    id: 6,
    key: "006",
    image: "/public/images/006.png",
    name: "Fuack",
    wiki: "https://palworld.fandom.com/wiki/Fuack",
    types: [TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.WATERING,
        level: 1,
      },
    ],
    drops: ["Leather", "Pal Fluids"],
    aura: {
      name: "Surfing Slam",
      description:
        "When activated, Fuack body surfs towards an enemy and slams into them.",
    },
    description:
      "Using its own body water, this Pal can create waves anywhere. It body surfs when in a hurry, but the resulting speed often ends in a fatal collision.",
  },
  {
    id: 7,
    key: "007",
    image: "/public/images/007.png",
    name: "Sparkit",
    wiki: "https://palworld.fandom.com/wiki/Sparkit",
    types: [TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 1,
      },
    ],
    drops: ["Electric Organ"],
    aura: {
      name: "Static Electricity",
      description: "While in team, increases attack power of Electric Pals.",
    },
    description:
      "During the dry season, this Pal is always on the verge of blowing a fuse, Sparks can fly with even the slightest provocation even amongst allies.",
  },
  {
    id: 8,
    key: "008",
    image: "/public/images/008.png",
    name: "Tanzee",
    wiki: "https://palworld.fandom.com/wiki/Tanzee",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
    ],
    drops: ["Mushroom"],
    aura: {
      name: "Cheery Rifle",
      description:
        "When activated, Tanzee will mercilessly fire an assault rifle at nearby enemies.",
    },
    description:
      "Long ago, this Pal used long objects like tree branches as weapons. After coming into contact with humans, however, it found something much more effective: guns.",
  },
  {
    id: 9,
    key: "009",
    image: "/public/images/009.png",
    name: "Rooby",
    wiki: "https://palworld.fandom.com/wiki/Rooby",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 1,
      },
    ],
    drops: ["Flame Organ", "Leather"],
    aura: {
      name: "Tiny Spark",
      description: "While in team, increases attack power of Fire Pals.",
    },
    description:
      "Wild Rooby surprisingly never get sick. Eating one piece of charcoal a day, made by burning a branch, is the secret to its eternal health.",
  },
  {
    id: 10,
    key: "010",
    image: "/public/images/010.png",
    name: "Pengullet",
    wiki: "https://palworld.fandom.com/wiki/Pengullet",
    types: [TypesEnum.WATER, TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.WATERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 1,
      },
    ],
    drops: ["Ice Organ", "Pal Fluids"],
    aura: {
      name: "Pengullet Cannon",
      description:
        "When activated, the player equips a Rocket Launcher and fires Pengullet as ammunition. Pengullet explodes on contact and is incapacitated.",
    },
    description:
      "The feathers of this Pal have all but disappeared, but sadly, its desire to fly has remained as strong as ever. Even now, it tries to fly again in any way it can.",
  },
  {
    id: 11,
    key: "011",
    image: "/public/images/011.png",
    name: "Penking",
    wiki: "https://palworld.fandom.com/wiki/Penking",
    types: [TypesEnum.WATER, TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.WATERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 2,
      },
    ],
    drops: ["Ice Organ", "Penking Plume"],
    aura: {
      name: "Brave Sailor",
      description:
        "When fighting together, Fire Pals drop more items when defeated.",
    },
    description:
      "Surprisingly, it is unrelated to Pengullet. Ever wanting to be the center of attention, this Pal will strut its stuff for any onlookers.",
  },
  {
    id: 12,
    key: "012",
    image: "/public/images/012.png",
    name: "Jolthog",
    wiki: "https://palworld.fandom.com/wiki/Jolthog",
    types: [TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 1,
      },
    ],
    drops: ["Electric Organ"],
    aura: {
      name: "Jolt Bomb",
      description:
        "When activated, equips Jolthog to the player's hand. When thrown at an enemy, causes an electrical explosion upon impact.",
    },
    description:
      "Releases the electricity stored in it's body when under attack, producing a shock that can be over 10 million volts. If thrown, it can even be more lethal than any conventional heavy weaponry.",
  },
  {
    id: 13,
    key: "013",
    image: "/public/images/013.png",
    name: "Gumoss",
    wiki: "https://palworld.fandom.com/wiki/Gumoss",
    types: [TypesEnum.GRASS, TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 1,
      },
    ],
    drops: ["Berry Seeds", "Gumoss Leaf"],
    aura: {
      name: "Logging Assistance",
      description: "While in team, improves efficiency of cutting trees.",
    },
    description:
      "A strange Pal with a body resembling tree sap. It gradually loses strength if it has nothing to cover its body with, eventually rotting away.",
  },
  {
    id: 14,
    key: "014",
    image: "/public/images/014.png",
    name: "Vixy",
    wiki: "https://palworld.fandom.com/wiki/Vixy",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Leather", "Bone"],
    aura: {
      name: "Dig Here!",
      description:
        "Sometimes digs up items from the ground when assigned to ranch.",
    },
    description:
      "The idol of Palpagos Island. If you bully a Vixy, you best be prepared to become enemies with the whole world.",
  },
  {
    id: 15,
    key: "015",
    image: "/public/images/015.png",
    name: "Hoocrates",
    wiki: "https://palworld.fandom.com/wiki/Hoocrates",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
    ],
    drops: ["Fiber", "High Grade Technical Manual"],
    aura: {
      name: "Dark Knowledge",
      description: "While in team, increases attack power of Dark Pals.",
    },
    description:
      'Often lost in thought, it sometimes finds it difficult to sleep. "I think, therefore I am."',
  },
  {
    id: 16,
    key: "016",
    image: "/public/images/016.png",
    name: "Teafant",
    wiki: "https://palworld.fandom.com/wiki/Teafant",
    types: [TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 1,
      },
    ],
    drops: ["Pal Fluids"],
    aura: {
      name: "Soothing Shower",
      description:
        "When activated, spouts mysterious water that soothes wounds and restores the player's HP.",
    },
    description:
      "Large amounts of water pour from what is thought to be its nose, though some say that it is, in fact, just snot. This  has sparked a fierce debate among Pal scholars.",
  },
  {
    id: 17,
    key: "017",
    image: "/public/images/017.png",
    name: "Depresso",
    wiki: "https://palworld.fandom.com/wiki/Depresso",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 1,
      },
    ],
    drops: ["Venom Gland"],
    aura: {
      name: "Caffeine Inoculation",
      description:
        "When activated, Depresso drinks a massive amount of energy drinks, causing its movement speed to increase.",
    },
    description:
      "It has few friends because of the perpetually grouchy look on its face, but it is in fact kindhearted. Some have seen it feeding Vixy who have strayed from their pack.",
  },
  {
    id: 18,
    key: "018",
    image: "/public/images/018.png",
    name: "Cremis",
    wiki: "https://palworld.fandom.com/wiki/Cremis",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Wool"],
    aura: {
      name: "Fluffy Wool",
      description:
        "While in team, increases attack power of Neutral Pals. Sometimes drops Wool when assigned to Ranch.",
    },
    description:
      "Compared to Lamball, it has finer wool and a temperament more suited for domestication. However, it has historically been kept as a pet. Cuteness is considered a virtue.",
  },
  {
    id: 19,
    key: "019",
    image: "/public/images/019.png",
    name: "Daedream",
    wiki: "https://palworld.fandom.com/wiki/Daedream",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
    ],
    drops: ["Venom Gland", "Small Pal Soul"],
    aura: {
      name: "Dream Chaser",
      description:
        "While in team, appears near the player. Follows up player attacks with magic bullets.",
    },
    description:
      "It puts those it is interested in to sleep and shows them an endless stream of happy dreams. Those who fall under its spell are never to wake until death takes them.",
  },
  {
    id: 20,
    key: "020",
    image: "/public/images/020.png",
    name: "Rushoar",
    wiki: "https://palworld.fandom.com/wiki/Rushoar",
    types: [TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.MINING,
        level: 1,
      },
    ],
    drops: ["Rushoar Pork", "Leather", "Bone"],
    aura: {
      name: "Hard Head",
      description:
        "Can be ridden. Increases efficiency of destroying boulders while mounted.",
    },
    description:
      "Being extremely aggressive Pal, it often picks fights before gauging its opponent's strength. Though small, its powerful charge can even send boulders flying.",
  },
  {
    id: 21,
    key: "021",
    image: "/public/images/021.png",
    name: "Nox",
    wiki: "https://palworld.fandom.com/wiki/Nox",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
    ],
    drops: ["Leather", "Small Pal Soul"],
    aura: {
      name: "Kuudere",
      description:
        "When fighting together, applies Dark damage to the player's attacks.",
    },
    description:
      "If you find Nox hair in your bedding, you should leave it where it lays and leave immediately. Picking it up is a one-way-ticket to a never ending night.",
  },
  {
    id: 22,
    key: "022",
    image: "/public/images/022.png",
    name: "Fuddler",
    wiki: "https://palworld.fandom.com/wiki/Fuddler",
    types: [TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 1,
      },
    ],
    drops: ["Leather"],
    aura: {
      name: "Ore Detector",
      description:
        "When activated, generates subtle vibrations to detect nearby ore.",
    },
    description:
      "Its large claws boast of diamond-like hardness. However, sharpening these claws consumes most of its energy, leading it to sometimes spending entire days doing nothing else.",
  },
  {
    id: 23,
    key: "023",
    image: "/public/images/023.png",
    name: "Killamari",
    wiki: "https://palworld.fandom.com/wiki/Killamari",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
    ],
    drops: ["Venom Gland"],
    aura: {
      name: "Fried Squid",
      description:
        "While in team, can be summoned and used instead of a glider.\nCan float for long periods of time while gliding.",
    },
    description:
      "It wraps itself around an enemy's head, sucking out their insides. Pal mummies are occasionally found, but these are in fact Killamari victims.",
  },
  {
    id: 24,
    key: "024",
    image: "/public/images/024.png",
    name: "Mau",
    wiki: "https://palworld.fandom.com/wiki/Mau",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Gold Coin"],
    aura: {
      name: "Gold Digger",
      description: "Sometimes digs up Gold Coin when assigned to Ranch.",
    },
    description:
      "Its hard tail does not deteriorate even when cut off. Some believed these severed tails to be good luck, but for the innumerable Mau who were poached as a result, they were anything but.",
  },
  {
    id: 25,
    key: "025",
    image: "/public/images/025.png",
    name: "Celaray",
    wiki: "https://palworld.fandom.com/wiki/Celaray",
    types: [TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.WATERING,
        level: 1,
      },
    ],
    drops: ["Pal Fluids"],
    aura: {
      name: "Zephyr Glider",
      description:
        "While in team, can be summoned and used instead of a glider.\nAllows you to move quickly for long periods of time while gliding with this pal.",
    },
    description:
      "Riding the wind, this Pal travels where it pleases. Should it find a partner along the way, the encounter will mark its journey's end.",
  },
  {
    id: 26,
    key: "026",
    image: "/public/images/026.png",
    name: "Direhowl",
    wiki: "https://palworld.fandom.com/wiki/Direhowl",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
    ],
    drops: ["Leather", "Ruby", "Gold Coin"],
    aura: {
      name: "Direhowl Rider",
      description: "Can be ridden.\nMoves slightly faster than most mounts.",
    },
    description:
      "Long ago Direhowl would hunt alongside humans but over the years this bond faded.",
  },
  {
    id: 27,
    key: "027",
    image: "/public/images/027.png",
    name: "Tocotoco",
    wiki: "https://palworld.fandom.com/wiki/Tocotoco",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
    ],
    drops: ["Gunpowder", "Tocotoco Feather"],
    aura: {
      name: "Eggbomb Launcher",
      description:
        "When activated, equips to the player and transforms into an egg launcher.",
    },
    description:
      "A frightening Pal that produces exploding eggs. It often fires these eggs from its rear end as a weapon, but when spent the Pal itself explodes.",
  },
  {
    id: 28,
    key: "028",
    image: "/public/images/028.png",
    name: "Flopie",
    wiki: "https://palworld.fandom.com/wiki/Flopie",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Low Grade Medical Supplies", "Wheat Seeds"],
    aura: {
      name: "Helper Bunny",
      description:
        "While in team, appears near the player.Automatically picks up nearby items.",
    },
    description:
      "It prefers places that have an abundance of vegetation, but hay fever has apparently become a problem for Flopie as of late.",
  },
  {
    id: 29,
    key: "029",
    image: "/public/images/029.png",
    name: "Mozzarina",
    wiki: "https://palworld.fandom.com/wiki/Mozzarina",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Mozzarina Meat", "Milk"],
    aura: {
      name: "Milk Maker",
      description: "Sometimes produces milk when assigned to Ranch.",
    },
    description:
      "Milk pours from this Pal like water from an open faucet, regardless of its gender. It's truly a mystery of life, although this mystery may be better left unsolved.",
  },
  {
    id: 30,
    key: "030",
    image: "/public/images/030.png",
    name: "Bristla",
    wiki: "https://palworld.fandom.com/wiki/Bristla",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
    ],
    drops: ["Wheat Seeds", "Lettuce Seeds"],
    aura: {
      name: "Princess Gaze",
      description: "While in team, increases attack power of Grass Pals.",
    },
    description:
      "This prickly Pal's thorns are highly poisonous. It is friendly with Cinnamoth and only smiles when Cinnamoth is drinking its nectar.",
  },
  {
    id: 31,
    key: "031",
    image: "/public/images/031.png",
    name: "Gobfin",
    wiki: "https://palworld.fandom.com/wiki/Gobfin",
    types: [TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.WATERING,
        level: 2,
      },
    ],
    drops: ["Pal Fluids"],
    aura: {
      name: "Angry Shark",
      description:
        "When activated, attacks targeted enemy with a powerful Aqua Gun. While in team, increases player's attack power.",
    },
    description:
      "Long ago, it was a large and powerful aquatic Pal.\nAs food became scarce it evolved to live on land.\nSince walking requires much energy, it gradually became smaller and is now a small and puny Pal.",
  },
  {
    id: 32,
    key: "032",
    image: "/public/images/032.png",
    name: "Hangyu",
    wiki: "https://palworld.fandom.com/wiki/Hangyu",
    types: [TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
    ],
    drops: ["Fiber"],
    aura: {
      name: "Flying Trapeze",
      description:
        "While in team, can be summoned and used instead of a glider. Carries the player up high while gliding.",
    },
    description:
      "Its gigantic arms can rip apart even iron.\nAs a particularly cruel form of execution, serious criminals would be strung up in a public square, and a Hangyu would rip off the skin from their bones.",
  },
  {
    id: 33,
    key: "033",
    image: "/public/images/033.png",
    name: "Mossanda",
    wiki: "https://palworld.fandom.com/wiki/Mossanda",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["Mushroom", "Leather", "Tomato Seeds"],
    aura: {
      name: "Grenadier Panda",
      description:
        "Can be ridden. Can rapidly fire a grenade launcher while mounted.",
    },
    description:
      "A Pal so powerful it's hard to believe. In one experiment, this Pal tore through 3,000 sheets of paper at once! It's only by some miracle that this Pal isn't a meat-eater.",
  },
  {
    id: 34,
    key: "034",
    image: "/public/images/034.png",
    name: "Woolipop",
    wiki: "https://palworld.fandom.com/wiki/Woolipop",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Cotton Candy", "High Quality Pal Oil"],
    aura: {
      name: "Candy Pop",
      description: "Sometimes drops Cotton Candy when assigned to Ranch.",
    },
    description:
      "Its entire body is 18,000 times sweeter than sugar.\nCarnivorous Pals lured by its scent will find themselves overwhelmed by sweetness and even pass out should they take a bite of this Pal.",
  },
  {
    id: 35,
    key: "035",
    image: "/public/images/035.png",
    name: "Caprity",
    wiki: "https://palworld.fandom.com/wiki/Caprity",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Caprity Meat", "Red Berries", "Horn"],
    aura: {
      name: "Berry Picker",
      description:
        "Sometimes drops Red Berries from its back when assigned to Ranch.",
    },
    description:
      "The shrub on this pal's back produces berries as long as it is properly fed. It offers these berries to potential mates, and if the flavor is to their liking, romance blossoms.",
  },
  {
    id: 36,
    key: "036",
    image: "/public/images/036.png",
    name: "Melpaca",
    wiki: "https://palworld.fandom.com/wiki/Melpaca",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Wool", "Leather"],
    aura: {
      name: "Pacapaca Wool",
      description: "Can be ridden.Sometimes drops Wool when assigned to Ranch.",
    },
    description:
      "Don't be fooled by its fluffy appearance. A hypersonic kick from one of its long legs may send you flying to the other side of the world.",
  },
  {
    id: 37,
    key: "037",
    image: "/public/images/037.png",
    name: "Eikthyrdeer",
    wiki: "https://palworld.fandom.com/wiki/Eikthyrdeer",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
    ],
    drops: ["Eikthyrdeer Venison", "Leather", "Horn"],
    aura: {
      name: "Guardian of the Forest",
      description:
        "Can be ridden.\nCan perform a double jump while mounted.\nIncreases efficiency of cutting trees.",
    },
    description:
      "The one who possesses the most impressive antlers becomes the leader of the herd. If their antlers are broken, they become depressed and leave the herd never to be seen again.",
  },
  {
    id: 38,
    key: "038",
    image: "/public/images/038.png",
    name: "Nitewing",
    wiki: "https://palworld.fandom.com/wiki/Nitewing",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
    ],
    drops: ["Leather"],
    aura: {
      name: "Travel Companion",
      description: "Can be ridden as a flying mount.",
    },
    description:
      "It carries newborn Pals to its nest and raises them as a surrogate parent. \nOnce the baby Pal has fattened up, it hunts them.",
  },
  {
    id: 39,
    key: "039",
    image: "/public/images/039.png",
    name: "Ribbuny",
    wiki: "https://palworld.fandom.com/wiki/Ribbuny",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
    ],
    drops: ["Leather", "Beautiful Flower"],
    aura: {
      name: "Skilled Fingers",
      description:
        "While in team, increases attack power of Neutral Pals.\nWhile at a base, increases work efficiency if working at Weapon Workbench.",
    },
    description:
      "A Pal who's never without a bright smile. Occasionally, it gets its tentacles tied up in knots by Cattiva's pranks. During those moments, its expression changes into something altogether demonic.",
  },
  {
    id: 40,
    key: "040",
    image: "/public/images/040.png",
    name: "Incineram",
    wiki: "https://palworld.fandom.com/wiki/Incineram",
    types: [TypesEnum.FIRE, TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 1,
      },
    ],
    drops: ["Horn", "Leather"],
    aura: {
      name: "Flameclaw Hunter",
      description:
        "When activated, attacks targeted enemy with a powerful Hellfire Claw",
    },
    description:
      "In the dark of night, this Pal snatches prey to bring back ot its territory.\nWhat happens to those poor souls afterwards isn't too hard to imagine.",
  },
  {
    id: 41,
    key: "041",
    image: "/public/images/041.png",
    name: "Cinnamoth",
    wiki: "https://palworld.fandom.com/wiki/Cinnamoth",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 1,
      },
    ],
    drops: ["Honey", "Lettuce Seeds", "Wheat Seeds"],
    aura: {
      name: "Mysterious Scales",
      description: "When activated, attacks targeted enemy with Poison Fog",
    },
    description:
      "Sniffing its scales produces a feeling of unparalleled euphoria.\nThere was some effort to further regulate this byproduct, but the Free Pal Alliance have vehemently opposed these measures, putting a stop to them.",
  },
  {
    id: 42,
    key: "042",
    image: "/public/images/042.png",
    name: "Arsox",
    wiki: "https://palworld.fandom.com/wiki/Arsox",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 1,
      },
    ],
    drops: ["Horn", "Flame Organ"],
    aura: {
      name: "Warm Body",
      description: "Can be ridden.\nKeeps the rider warm in cold environments.",
    },
    description:
      "In ancient times, carnivorous Pals pursued them relentlessly.\nThe Arsox's irrational rage transformed into a raging inferno, which has been passed on to this day.",
  },
  {
    id: 43,
    key: "043",
    image: "/public/images/043.png",
    name: "Dumud",
    wiki: "https://palworld.fandom.com/wiki/Dumud",
    types: [TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Raw Dumud", "High Quality Pal Oil"],
    aura: {
      name: "Soil Improver",
      description: "While in team, increases attack power of Ground Pals.",
    },
    description:
      "When too relaxed, its reaction time drastically declines.\nEven if it were sliced from head to tail, it probably wouldn't even realize that it should be dead until the next morning.",
  },
  {
    id: 44,
    key: "044",
    image: "/public/images/044.png",
    name: "Cawgnito",
    wiki: "https://palworld.fandom.com/wiki/Cawgnito",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 1,
      },
    ],
    drops: ["Bone", "Venom Gland", "Small Pal Soul"],
    aura: {
      name: "Telepeck",
      description:
        "When activated, attacks targeted enemy with a powerful Phantom Peck.",
    },
    description:
      "Long ago it freely soared the skies. After losing a contest with Galeclaw, it abandoned the skies and now lives a quiet nocturnal life.",
  },
  {
    id: 45,
    key: "045",
    image: "/public/images/045.png",
    name: "Leezpunk",
    wiki: "https://palworld.fandom.com/wiki/Leezpunk",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Copper Key", "Silver Key"],
    aura: {
      name: "Sixth Snse",
      description:
        "When activated, utilizes its sixth sense to detect nearby dungeons.",
    },
    description:
      "A Pal that always takes great care to maintain a stylish stance. Always on the hunt for the coolest poses, if given a mirror it will spend all day posing in front of it.",
  },
  {
    id: 46,
    key: "046",
    image: "/public/images/046.png",
    name: "Loupmoon",
    wiki: "https://palworld.fandom.com/wiki/Loupmoon",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
    ],
    drops: ["Bone"],
    aura: {
      name: "Claws Glistening in the Dark",
      description:
        "When activated, attacks targeted enemy with a powerful Jumping Claw",
    },
    description:
      "The horns on its head grow under the moonlight. It doesn't hate the sun, but its horns itch when sunlight hits them.",
  },
  {
    id: 47,
    key: "047",
    image: "/public/images/047.png",
    name: "Galeclaw",
    wiki: "https://palworld.fandom.com/wiki/Galeclaw",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
    ],
    drops: ["Galeclaw Poultry", "Leather"],
    aura: {
      name: "Galeclaw Rider",
      description:
        "While in team, can be summoned and used instead of a glider.\nAllows you to fire a gun while gliding with this Pal.",
    },
    description:
      "A Pal that can easily take flight even while grasping a human.\n It is, however, prone to letting go when tired, which has led to the sudden demise of more than a few souls.",
  },
  {
    id: 48,
    key: "048",
    image: "/public/images/048.png",
    name: "Robinquill",
    wiki: "https://palworld.fandom.com/wiki/Robinquill",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
    ],
    drops: ["Wheat Seeds", "Arrow"],
    aura: {
      name: "Hawk Eye",
      description:
        "While fighting together, allows you to deal more damage to weak points.",
    },
    description:
      "A pal that is very similar to humans who hunt and live in the forests. It may prove to be a key for understanding what Pals are and how they diverged from humans so long ago.",
  },
  {
    id: 49,
    key: "049",
    image: "/public/images/049.png",
    name: "Gorirat",
    wiki: "https://palworld.fandom.com/wiki/Gorirat",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["Leather", "Bone"],
    aura: {
      name: "Full-power Gorilla Mode",
      description:
        "When activated, unleashes a primal fury that increases Gorirat's attack power.",
    },
    description:
      "It beats the ground rhythmically to communicate with its comrades. The meaning of each rhythm differs by troop, but the distinction between them is still largely unknown.",
  },
  {
    id: 50,
    key: "050",
    image: "/public/images/050.png",
    name: "Beegarde",
    wiki: "https://palworld.fandom.com/wiki/Beegarde",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Honey"],
    aura: {
      name: "Worker Bee",
      description:
        "Sometimes drops Honey when assigned to Ranch.\nWhile in team, Elizabee's stats will be increased.",
    },
    description:
      "A servant that pledges loyalty to Elizabee.\nAny that cause harm to the queen are immediately expelled from the hive.\nIt will gladly give its life to protect its queen.",
  },
  {
    id: 51,
    key: "051",
    image: "/public/images/051.png",
    name: "Elizabee",
    wiki: "https://palworld.fandom.com/wiki/Elizabee",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
    ],
    drops: ["Honey", "Elizabees staff"],
    aura: {
      name: "Queen Bee Command",
      description:
        "While fighting together, stats will increase the more Beegarde are in your team.",
    },
    description:
      "A chosen queen to rule over Beegardes.\nThere is a never ending stream of servants willing to work themselves to death for the pleasure of serving their queen.",
  },
  {
    id: 52,
    key: "052",
    image: "/public/images/052.png",
    name: "Grintale",
    wiki: "https://palworld.fandom.com/wiki/Grintale",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
    ],
    drops: ["High Quality Pal Oil"],
    aura: {
      name: "Plump Body",
      description: "Can be ridden.Enhances Neutral attacks while mounted.",
    },
    description:
      "Grintale's eyes light up the moment anyone enters its territory.\nThis is no figure of speech-its eyes literally light up.",
  },
  {
    id: 53,
    key: "053",
    image: "/public/images/053.png",
    name: "Swee",
    wiki: "https://palworld.fandom.com/wiki/Swee",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 1,
      },
    ],
    drops: ["Wool"],
    aura: {
      name: "Fluffy",
      description: "While in team, Sweepa's stats will be increased.",
    },
    description:
      "Crawling along the ground, it eats microscopic organic matter.\nAfter a while, it discharges any substances that provide no nutrition.\nBy using it as a mop for cleaning, everyone wins!",
  },
  {
    id: 54,
    key: "054",
    image: "/public/images/054.png",
    name: "Sweepa",
    wiki: "https://palworld.fandom.com/wiki/Sweepa",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 2,
      },
    ],
    drops: ["Wool"],
    aura: {
      name: "King of Fluff",
      description:
        "Can be ridden.\nWhile fighting together, stats will increase the more Swee are on your team.",
    },
    description:
      "While hibernating, a large number of Swee hide within its voluminous body hair.\nThe most ever recorded is 101.",
  },
  {
    id: 55,
    key: "055",
    image: "/public/images/055.png",
    name: "Chillet",
    wiki: "https://palworld.fandom.com/wiki/Chillet",
    types: [TypesEnum.ICE, TypesEnum.DRAGON],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 1,
      },
    ],
    drops: ["Leather"],
    aura: {
      name: "Wriggling Weasel",
      description:
        "Can be ridden.\nApplies Dragon damage to the player's attacks while mounted.",
    },
    description:
      "It can curl up its body and roll around at extremely high speeds.\nLong ago, people would tie bags of milk to domesticated Chillet as they grazed to produce butter using this spinning force.",
  },
  {
    id: 56,
    key: "056",
    image: "/public/images/056.png",
    name: "Univolt",
    wiki: "https://palworld.fandom.com/wiki/Univolt",
    types: [TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 1,
      },
    ],
    drops: ["Leather", "Electric Organ", "Horn"],
    aura: {
      name: "Swift Deity",
      description:
        "Can be ridden.Applies Electric damage to the player's attacks while mounted.",
    },
    description:
      "It used to be considered an emissary of the Thunder God, and thus was not hunted by people.\nHowever, after witnesses osberved one die from a lightning strike, its reverence faded, and it quite literally fell into the role of a workhorse.",
  },
  {
    id: 57,
    key: "057",
    image: "/public/images/057.png",
    name: "Foxcicle",
    wiki: "https://palworld.fandom.com/wiki/Foxcicle",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.COOLING,
        level: 2,
      },
    ],
    drops: ["Leather", "Ice Organ"],
    aura: {
      name: "Aurora Guide",
      description: "While in team, increases attack power of Ice Pals.",
    },
    description:
      "On nights when the aurora is visible, it looks up towards the sky and begins to howl a beautiful song. This does, however, leave it vulnerable to attacks from enemies.",
  },
  {
    id: 58,
    key: "058",
    image: "/public/images/058.png",
    name: "Pyrin",
    wiki: "https://palworld.fandom.com/wiki/Pyrin",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 1,
      },
    ],
    drops: ["Flame Organ", "Leather"],
    aura: {
      name: "Red Hare",
      description:
        "Can be ridden.\nApplies Fire damage to the player's attacks while mounted.",
    },
    description:
      "It's entire body has evolved into a highly efficient radiator, gifting it with astounding stamina.\nWhen someone has mounted it, this Pal takes caution not to burn them.",
  },
  {
    id: 59,
    key: "059",
    image: "/public/images/059.png",
    name: "Reindrix",
    wiki: "https://palworld.fandom.com/wiki/Reindrix",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 2,
      },
    ],
    drops: ["Reindrix Venison", "Leather", "Horn", "Ice Organ"],
    aura: {
      name: "Cool Body",
      description: "Can be ridden.\nKeeps the rider cool in hot environments.",
    },
    description:
      "Its transparent cerulean antlers glow with the cold of absolute zero. Any who touch them with their bare hands are instantly frozen over and smashed into pieces.",
  },
  {
    id: 60,
    key: "060",
    image: "/public/images/060.png",
    name: "Rayhound",
    wiki: "https://palworld.fandom.com/wiki/Rayhound",
    types: [TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 2,
      },
    ],
    drops: ["Electric Organ"],
    aura: {
      name: "Jumping Force",
      description: "Can be ridden. Can double jump while mounted.",
    },
    description:
      "At full speed, it could be mistaken for a bolt of lightning. If two Rayhounds collide, the sound is like that of a powerful thunderclap.",
  },
  {
    id: 61,
    key: "061",
    image: "/public/images/061.png",
    name: "Kitsun",
    wiki: "https://palworld.fandom.com/wiki/Kitsun",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 2,
      },
    ],
    drops: ["Flame Organ", "Leather"],
    aura: {
      name: "Clear Mind",
      description:
        "Can be ridden. Unaffected by the cold or heat while riding this Pal.",
    },
    description:
      "Despite its appearance, Kitsun is extremely sensitive and will flee into a cave when spooked. Long ago, it was considered and ill omen if one were found nearby.",
  },
  {
    id: 62,
    key: "062",
    image: "/public/images/062.png",
    name: "Dazzi",
    wiki: "https://palworld.fandom.com/wiki/Dazzi",
    types: [TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Electric Organ"],
    aura: {
      name: "Lady of Lightning",
      description:
        "While in team, appears near the player.Follows up player attacks with lightning bolts.",
    },
    description:
      "Often kind to lonely pals.\nHowever, the moment a Pal mistakes this for actual companionship, it seizes the opportunity to blast them with a thunderbolt.",
  },
  {
    id: 63,
    key: "063",
    image: "/public/images/063.png",
    name: "Lunaris",
    wiki: "https://palworld.fandom.com/wiki/Lunaris",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
    ],
    drops: ["Paldium Fragment"],
    aura: {
      name: "Antigravity",
      description:
        "While in team, Lunaris manipulates gravity, increasing the player's max carrying capacity.",
    },
    description:
      "It can control those who carelessly stare into its eyes. Those seen with a Lunaris are in its mind, simply under its control.",
  },
  {
    id: 64,
    key: "064",
    image: "/public/images/064.png",
    name: "Dinossom",
    wiki: "https://palworld.fandom.com/wiki/Dinossom",
    types: [TypesEnum.GRASS, TypesEnum.DRAGON],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
    ],
    drops: ["Wheat Seeds"],
    aura: {
      name: "Fragrant Dragon",
      description: "Can be ridden.Enhances Grass attacks while mounted.",
    },
    description:
      'A Pal who once angered cannot be pacified. It rages on and on like an inferno. The prahse "step on a Dinossom\'s tail" has come to mean enraging someone.',
  },
  {
    id: 65,
    key: "065",
    image: "/public/images/065.png",
    name: "Surfent",
    wiki: "https://palworld.fandom.com/wiki/Surfent",
    types: [TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 1,
      },
    ],
    drops: ["Pal Fluids"],
    aura: {
      name: "Swift Swimmer",
      description:
        "Can be ridden to travel on water.\nWhile mounted, prevents stamina depletion while moving over water.",
    },
    description:
      "Its hydrodynamic form is well suited to life in water.\nPoachers often catch them and use them in place of surfboards.",
  },
  {
    id: 66,
    key: "066",
    image: "/public/images/066.png",
    name: "Maraith",
    wiki: "https://palworld.fandom.com/wiki/Maraith",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 1,
      },
    ],
    drops: ["Bone", "Small Pal Soul"],
    aura: {
      name: "Messenger of Death",
      description:
        "Can be ridden.\nApplies Dark damage to the player's attacks while mounted.",
    },
    description:
      "It relishes the peculiar scent living things give off when they are near death. If a Mariath has taken a liking to you. It is safe to assume that is why.",
  },
  {
    id: 67,
    key: "067",
    image: "/public/images/067.png",
    name: "Digtoise",
    wiki: "https://palworld.fandom.com/wiki/Digtoise",
    types: [TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.MINING,
        level: 3,
      },
    ],
    drops: ["Ore", "High Quality Pal Oil"],
    aura: {
      name: "Drill Crusher",
      description:
        "When activated, performs Shell Spin, follows the player while spinning, and mines ores efficiently.",
    },
    description:
      "A walking contradiction, possessing the strongest shell and the only drill capable of piercing it. \"Digtoise's Fable\" is a popular children's tale.",
  },
  {
    id: 68,
    key: "068",
    image: "/public/images/068.png",
    name: "Tombat",
    wiki: "https://palworld.fandom.com/wiki/Tombat",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Leather", "Small Pal Soul"],
    aura: {
      name: "Ultrasonic Sensor",
      description:
        "When activated, uses ultrasonic waves to detect the location of nearby Pals.",
    },
    description:
      "Often appears out of the blue to flaunt its prized wings in front of other Pals.\nAlthough it seems to be an intimidation tactic, the Pal seems to derive some kind of pleasure from the display.",
  },
  {
    id: 69,
    key: "069",
    image: "/public/images/069.png",
    name: "Lovander",
    wiki: "https://palworld.fandom.com/wiki/Lovander",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 1,
      },
    ],
    drops: ["Mushroom", "Cake", "Suspicious Juice", "Strange Juice"],
    aura: {
      name: "Heart Drain",
      description:
        "Heart Drain - While fighting together, grants the player and Lovander the life steal effect which absorbs some of the received damage and restores HP.",
    },
    description:
      "Seeking a night of love, it is always chasing someone around. At first, it only showed interest in other Pals, but in recent years even humans have become the target of its debauchery.",
  },
  {
    id: 70,
    key: "070",
    image: "/public/images/070.png",
    name: "Flambelle",
    wiki: "https://palworld.fandom.com/wiki/Flambelle",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Flame Organ", "High Quality Pal Oil"],
    aura: {
      name: "Magma Tears",
      description: "Sometimes produces Flame Organ when assigned to Ranch,",
    },
    description:
      "When it starts crying, this Pal produces magma in place of tears. The magma that pours out is absorbed back into its body, causing it to get hotter and hotter. The more it cries, the stronger it becomes.",
  },
  {
    id: 71,
    key: "071",
    image: "/public/images/071.png",
    name: "Vanwyrm",
    wiki: "https://palworld.fandom.com/wiki/Vanwyrm",
    types: [TypesEnum.FIRE, TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["Bone", "Ruby", "Gold Coin"],
    aura: {
      name: "Aerial Marauder",
      description:
        "Can be ridden as an flying mount.Increases damage player deals to enemy weak points while mounted.",
    },
    description:
      "The melodies of a flute made from the exoskeleton of a Vanwyrm are said to cross the whole mountain ranges.\nIn ages past, such flutes were used to signal an attack.",
  },
  {
    id: 72,
    key: "072",
    image: "/public/images/072.png",
    name: "Bushi",
    wiki: "https://palworld.fandom.com/wiki/Bushi",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
    ],
    drops: ["Bone", "Ingot"],
    aura: {
      name: "Brandish Blade",
      description:
        "When activated, attacks targeted enemy with a powerful laigiri.",
    },
    description:
      "Its body becomes a blade upon death, to be taken up by the next generation. If someone other than a Bushi wields this blade, the soul within torments them until they are driven mad.",
  },
  {
    id: 73,
    key: "073",
    image: "/public/images/073.png",
    name: "Beakon",
    wiki: "https://palworld.fandom.com/wiki/Beakon",
    types: [TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["Electric Organ"],
    aura: {
      name: "Thunderous",
      description:
        "Can be ridden as an flying mount. Applies Electric damage to the player's attacks while mounted.",
    },
    description:
      "Some think it is a related species to Ragnahawk, but there is in fact no connection. Using its sharp beak, it descends on its prey in a quick motion that resembles a bolt of lightning.",
  },
  {
    id: 74,
    key: "074",
    image: "/public/images/074.png",
    name: "Ragnahawk",
    wiki: "https://palworld.fandom.com/wiki/Ragnahawk",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["Flame Organ"],
    aura: {
      name: "Flame Wing",
      description:
        "Can be ridden as an flying mount. Applies Fire damage to the player's attacks while mounted.",
    },
    description:
      "Some think it is a related species to Beakon, but there is in fact no connection. It mainly eats rocks, and after many long years its beak and head have hardened to accommodate this diet.",
  },
  {
    id: 75,
    key: "075",
    image: "/public/images/075.png",
    name: "Katress",
    wiki: "https://palworld.fandom.com/wiki/Katress",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Leather", "Katress Hair", "High Grade Technical Manual"],
    aura: {
      name: "Grimoire Collector",
      description:
        "When fighting together, increases dropped items from defeated Neutral Pals.",
    },
    description:
      "With the power of shadows it produces arcane phenomena. It prefers to eat food raw and is particularly hostile towards Wixen",
  },
  {
    id: 76,
    key: "076",
    image: "/public/images/076.png",
    name: "Wixen",
    wiki: "https://palworld.fandom.com/wiki/Wixen",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Flame Organ", "High Grade Technical Manual"],
    aura: {
      name: "Lord Fox",
      description:
        "When fighting together, applies Fire damage to the Player's attacks.",
    },
    description:
      "With the power of light, it produces arcane phenomena. It prefers to eat food well-done and is particularly hostile towards Katress.",
  },
  {
    id: 77,
    key: "077",
    image: "/public/images/077.png",
    name: "Verdash",
    wiki: "https://palworld.fandom.com/wiki/Verdash",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Leather", "Bone"],
    aura: {
      name: "Grassland Speedster",
      description:
        "When fighting together, increases player's movement speed and applies Grass damage to the player's attacks.",
    },
    description:
      "Land that Verdash has run across becomes extremely fertile, with thick vegetation growing there soon after. It will not run anywhere that herbicide has been used.",
  },
  {
    id: 78,
    key: "078",
    image: "/public/images/078.png",
    name: "Vaelet",
    wiki: "https://palworld.fandom.com/wiki/Vaelet",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Low Grade Medical Supplies", "Tomato Seeds"],
    aura: {
      name: "Purification of Gaia",
      description:
        "While fighting together, Ground Pals drop more items when defeated.",
    },
    description:
      "The castle was filled with the king's favorite flowers. A great battle ensued, and flames approached the castle. Amidst the chaos, the spirit of a flower appeared.\n- From the fairy tale, The King's Flower.",
  },
  {
    id: 79,
    key: "079",
    image: "/public/images/079.png",
    name: "Sibelyx",
    wiki: "https://palworld.fandom.com/wiki/Sibelyx",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Ice Organ", "High Quality Cloth"],
    aura: {
      name: "Silk Maker",
      description:
        "When activated, attacks targeted enemy with a powerful Blizzard Spike. Sometimes produces High Quality Cloth when assigned to Ranch.",
    },
    description:
      "A Pal that likes the rain,and will often bask in rain showers until the weather clears up. On rainy days, Foxparks can often be found taking shelter beneath it.",
  },
  {
    id: 80,
    key: "080",
    image: "/public/images/080.png",
    name: "Elphidran",
    wiki: "https://palworld.fandom.com/wiki/Elphidran",
    types: [TypesEnum.DRAGON],
    suitability: [
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
    ],
    drops: ["High Quality Pal Oil"],
    aura: {
      name: "Amicable Holy Dragon",
      description:
        "Can be ridden as an flying mount.While fighting together, Dark Pals drop more items when defeated.",
    },
    description:
      "It possesses a demeanor as pure as its appearance suggests. Perhaps because of this, it is sometimes unable to discern good from evil, often allowing wrongdoers to take advantage of it.",
  },
  {
    id: 81,
    key: "081",
    image: "/public/images/081.png",
    name: "Kelpsea",
    wiki: "https://palworld.fandom.com/wiki/Kelpsea",
    types: [TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 1,
      },
    ],
    drops: ["Raw Kelpsea", "Pal Fluids"],
    aura: {
      name: "Aqua Spout",
      description: "While in team, increases attack power of Water pals.",
    },
    description:
      "Its personality changes depending on the quality of the water it was born into. Kelpsea born into polluted waters are generally ill-tempered and quickly become delinquents.",
  },
  {
    id: 82,
    key: "082",
    image: "/public/images/082.png",
    name: "Azurobe",
    wiki: "https://palworld.fandom.com/wiki/Azurobe",
    types: [TypesEnum.WATER, TypesEnum.DRAGON],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 3,
      },
    ],
    drops: ["Cloth"],
    aura: {
      name: "Waterwing Dance",
      description:
        "Can be ridden to travel on water.Applies Water damage to the player's attacks while mounted.",
    },
    description:
      "This Pal's white ribbon turns black if doused with impure water. Given its usefulness in detecting poison, this Pal was once overhunted. This past has left them bitter towards humanity.",
  },
  {
    id: 83,
    key: "083",
    image: "/public/images/083.png",
    name: "Cryolinx",
    wiki: "https://palworld.fandom.com/wiki/Cryolinx",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 3,
      },
    ],
    drops: ["Ice Organ"],
    aura: {
      name: "Dragon Hunter",
      description:
        "When fighting together, increases dropped items from defeated Dragon Pals.",
    },
    description:
      "It can easily climb steep mountains with its hard claws. However, its short legs make it difficult to descend, often leaving it stranded in high places.",
  },
  {
    id: 84,
    key: "084",
    image: "/public/images/084.png",
    name: "Blazehowl",
    wiki: "https://palworld.fandom.com/wiki/Blazehowl",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
    ],
    drops: ["Flame Organ"],
    aura: {
      name: "Hellflame Lion",
      description:
        "Can be ridden. While fighting together, Grass Pals drop more items when defeated.",
    },
    description:
      "While it prefers raw meat, it always ends up eating well-done meat. This is due to its blistering claws, which it uses as its weapon—it simply doesn't realize its prey gets burned to a crisp.",
  },
  {
    id: 85,
    key: "085",
    image: "/public/images/085.png",
    name: "Relaxaurus",
    wiki: "https://palworld.fandom.com/wiki/Relaxaurus",
    types: [TypesEnum.DRAGON, TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["High Quality Pal Oil", "Ruby"],
    aura: {
      name: "Hungry Missile",
      description:
        "Can be ridden.\nCan rapidly fire a missile launcher while mounted.",
    },
    description:
      "Contrary to its blasé appearance, it's quite ferocious.\nIt perceives everything in its sight as prey and will stop at nothing to devour it.",
  },
  {
    id: 86,
    key: "086",
    image: "/public/images/086.png",
    name: "Broncherry",
    wiki: "https://palworld.fandom.com/wiki/Broncherry",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 3,
      },
    ],
    drops: ["Broncherry Meat", "Tomato Seeds"],
    aura: {
      name: "Overaffectionate",
      description:
        "Can be riddenWhile in team, Broncherry helps carry supplies, increasing the player's max carrying capacity",
    },
    description:
      'Its scent drastically changes before and after pairing.\nIt exudes a pleasing aroma after finding a partner, which is called the "fragrance of first love."',
  },
  {
    id: 87,
    key: "087",
    image: "/public/images/087.png",
    name: "Petallia",
    wiki: "https://palworld.fandom.com/wiki/Petallia",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Bone", "Large Pal Soul", "Innovative Technical Manual"],
    aura: {
      name: "Blessing of the Flower Spirit",
      description: "When activated, restores the character's HP.",
    },
    description:
      "A pal that transforms into a massive plant when at the end of its life. Once every ten years, a beautiful flower blooms and a new Petallia is born.",
  },
  {
    id: 88,
    key: "088",
    image: "/public/images/088.png",
    name: "Reptyro",
    wiki: "https://palworld.fandom.com/wiki/Reptyro",
    types: [TypesEnum.FIRE, TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 3,
      },
    ],
    drops: ["Flame Organ"],
    aura: {
      name: "Ore-loving Beast",
      description:
        "A ridden skill. Increases the efficiency of mining ores while riding.",
    },
    description:
      "Magma-like blood runs throughout its body. If a large amount of water is thrown on it, this water rapidly heats, causing an immense vapor explosion.",
  },
  {
    id: 89,
    key: "089",
    image: "/public/images/089.png",
    name: "Kingpaca",
    wiki: "https://palworld.fandom.com/wiki/Kingpaca",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
    ],
    drops: ["Wool", "Egg"],
    aura: {
      name: "King of Muscles",
      description:
        "Can be ridden.\nWhile in team, Kingpaca helps carry supplies, increasing the player's max carrying capacity.",
    },
    description:
      "Melpaca serve this Pal.\nContests between Kingpaca offer up their vassals as a wager. Those seen alone are losers of such contests.",
  },
  {
    id: 90,
    key: "090",
    image: "/public/images/090.png",
    name: "Mammorest",
    wiki: "https://palworld.fandom.com/wiki/Mammorest",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 2,
      },
    ],
    drops: ["High Quality Pal Oil", "Leather", "Mammorest Meat"],
    aura: {
      name: "Gaia Crusher",
      description:
        "Can be ridden. Improves efficiency of cutting trees and mining ores while mounted.",
    },
    description:
      "The vegetation on its back varies between individuals. There is a long history of appreciating this veritable garden of a Pal, and there are even Mammorest pruning specialists.",
  },
  {
    id: 91,
    key: "091",
    image: "/public/images/091.png",
    name: "Wumpo",
    wiki: "https://palworld.fandom.com/wiki/Wumpo",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 4,
      },
    ],
    drops: ["Ice Organ", "Beautiful Flower"],
    aura: {
      name: "Guardian of the Snowy Mountain",
      description:
        "Can be ridden. While in team, Wumpo helps carry supplies, increasing the player’s max carrying capacity",
    },
    description:
      "Researchers once tried to shave off its hair to reveal its true form. In the end, only hair was left, as if that was all there was to begin with.",
  },
  {
    id: 92,
    key: "092",
    image: "/public/images/092.png",
    name: "Warsect",
    wiki: "https://palworld.fandom.com/wiki/Warsect",
    types: [TypesEnum.GRASS, TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["Honey"],
    aura: {
      name: "Hard Armor",
      description:
        "When fighting together, increases player's defence and applies Fire damage to player's attacks",
    },
    description:
      "The ultra-hard armor surrounding its body is extremely strong and heat resistant.\nEven a napalm blast would hardly leave a scratch.",
  },
  {
    id: 93,
    key: "093",
    image: "/public/images/093.png",
    name: "Fenglope",
    wiki: "https://palworld.fandom.com/wiki/Fenglope",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
    ],
    drops: ["Leather", "Horn"],
    aura: {
      name: "Wind and Clouds",
      description: "Can be ridden. Can double jump while mounted.",
    },
    description:
      'In ancient times, it was a familiar subject for painting because of its beautiful and majestic appearance. Fenglope is an endangered species, the "Fenglope" whose beautiful fur and horns are much sought after by poachers!',
  },
  {
    id: 94,
    key: "094",
    image: "/public/images/094.png",
    name: "Felbat",
    wiki: "https://palworld.fandom.com/wiki/Felbat",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 3,
      },
    ],
    drops: ["Cloth", "Small Pal Soul"],
    aura: {
      name: "Life Steal",
      description:
        "While fighting together, grants the player and Felbat the life steal effect which absorbs some of the received damage and restores HP.",
    },
    description:
      "Attacking from the shadows, this Pal traps its prey within its cloak-like wings. It's probably best not to know what happens within them, or why the inside of its wings are stained red.",
  },
  {
    id: 95,
    key: "095",
    image: "/public/images/095.png",
    name: "Quivern",
    wiki: "https://palworld.fandom.com/wiki/Quivern",
    types: [TypesEnum.DRAGON],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 2,
      },
    ],
    drops: ["High Quality Pal Oil"],
    aura: {
      name: "Sky Dragon",
      description:
        "Can be ridden as a flying mount.\nEnhances Dragon attacks while mounted.",
    },
    description:
      "Sleeping while cuddling a Quivern is said to be a heavenly experience, but there are some who have been crushed and sent to heaven by ones that toss and turn in their sleep.",
  },
  {
    id: 96,
    key: "096",
    image: "/public/images/096.png",
    name: "Blazamut",
    wiki: "https://palworld.fandom.com/wiki/Blazamut",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 4,
      },
    ],
    drops: ["Coal", "Flame Organ"],
    aura: {
      name: "Magma Kaiser",
      description: "A ridden skill. Enhances fire attacks while ridden.",
    },
    description: "This Pal is under investigation.",
  },
  {
    id: 97,
    key: "097",
    image: "/public/images/097.png",
    name: "Helzephyr",
    wiki: "https://palworld.fandom.com/wiki/Helzephyr",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["Medium Pal Soul", "Venom Gland"],
    aura: {
      name: "Wings of Death",
      description:
        "Can be ridden as a flying mount. Applies Dark damage to the player's attacks while mounted.",
    },
    description:
      "it calls forth lightning from the depths of hell. one who dies from helzephyr's inferno is sure to be sent to the underworld",
  },
  {
    id: 98,
    key: "098",
    image: "/public/images/098.png",
    name: "Astegon",
    wiki: "https://palworld.fandom.com/wiki/Astegon",
    types: [TypesEnum.DRAGON, TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 4,
      },
    ],
    drops: ["Pal Metal Ingot", "Pure Quartz"],
    aura: {
      name: "Black Ankylosaur",
      description:
        "Can be ridden as an flying mount. Increases damage dealt to ore while mounted.",
    },
    description:
      "A savage beast born of the abyss. Thou shall not stand before the beast. Thou shall not heed the beast.",
  },
  {
    id: 99,
    key: "099",
    image: "/public/images/099.png",
    name: "Menasting",
    wiki: "https://palworld.fandom.com/wiki/Menasting",
    types: [TypesEnum.DARK, TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 3,
      },
    ],
    drops: ["Coal", "Venom Gland"],
    aura: {
      name: "Steel Scorpion",
      description:
        "When fighting together, increases the player's defense and Electric Pals drop more items when defeated.",
    },
    description:
      "Being made of pure energy, its insides are completely hollow. This Pal crams still-living prey into its hollow body, where it absorbs them. Hellish screams of pain can often be heard coming from inside this Pal.",
  },
  {
    id: 100,
    key: "100",
    image: "/public/images/100.png",
    name: "Anubis",
    wiki: "https://palworld.fandom.com/wiki/Anubis",
    types: [TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Bone", "Large Pal Soul", "Innovative Technical Manual"],
    aura: {
      name: "Guardian of the Desert",
      description:
        "When fighting together, applies Ground damage to the player's attacks.Sometimes dodges attacks with a high speed sidestep while in battle.",
    },
    description:
      "Once seen as a symbol of nobility, and an idol for those who shunned wealth and power. Yet over time, this Pal became a token of death.",
  },
  {
    id: 101,
    key: "101",
    image: "/public/images/101.png",
    name: "Jormuntide",
    wiki: "https://palworld.fandom.com/wiki/Jormuntide",
    types: [TypesEnum.DRAGON, TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 4,
      },
    ],
    drops: ["Pal Fluids"],
    aura: {
      name: "Stormbringer Sea Dragon",
      description:
        "A ridden skill. Allows travel on water, and prevents stamina loss while riding on water.",
    },
    description:
      "Legends says the Jormuntide was once a wise man, who after being wrongly convicted and cast into a whirlpool, returned as this Pal to destroy those who wronged him.",
  },
  {
    id: 102,
    key: "102",
    image: "/public/images/102.png",
    name: "Suzaku",
    wiki: "https://palworld.fandom.com/wiki/Suzaku",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 3,
      },
    ],
    drops: ["Flame Organ"],
    aura: {
      name: "Wings of Flame",
      description:
        "Can be ridden as a flying mount. Enhances Fire attacks while mounted.",
    },
    description:
      "It was once believed to usher in the dry season. Whenever there was a drought in the previous year, people would relentlessly seek to cull it's numbers, hoping to bring a plentiful harvest in the next year.",
  },
  {
    id: 103,
    key: "103",
    image: "/public/images/103.png",
    name: "Grizzbolt",
    wiki: "https://palworld.fandom.com/wiki/Grizzbolt",
    types: [TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
    ],
    drops: ["Electric Organ", "Leather"],
    aura: {
      name: "Yellow Tank",
      description: "Can be ridden. Can rapidly fire a minigun while mounted.",
    },
    description:
      "With a friendly smile and a hardy physique, it is docile towards one it recognizes as a partner. For reasons unexplained, its personality undergoes a drastic change when wielding a minigun.",
  },
  {
    id: 104,
    key: "104",
    image: "/public/images/104.png",
    name: "Lyleen",
    wiki: "https://palworld.fandom.com/wiki/Lyleen",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
    ],
    drops: [
      "Low Grade Medical Supplies",
      "Beautiful Flower",
      "Innovative Technical Manual",
    ],
    aura: {
      name: "Harvest Goddess",
      description:
        "When activated, the queen's soothing graces restores greatly the player's HP.",
    },
    description:
      "A docile Pal full of love.\nIt watches over small Pals who have lost their parents. It uses a full-power Solar Blast to discipline naughty Pals.",
  },
  {
    id: 105,
    key: "105",
    image: "/public/images/105.png",
    name: "Faleris",
    wiki: "https://palworld.fandom.com/wiki/Faleris",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["Flame Organ"],
    aura: {
      name: "Scorching Predator",
      description:
        "Can be ridden as an flying mount.While fighting together, Ice Pals drop more items when defeated.",
    },
    description:
      "When it finds its prey it unleashes a whirlwind of flames, burning the entire area to ash. Faleris breath is known for its pleasing scent.",
  },
  {
    id: 106,
    key: "106",
    image: "/public/images/106.png",
    name: "Orserk",
    wiki: "https://palworld.fandom.com/wiki/Orserk",
    types: [TypesEnum.DRAGON, TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 4,
      },
    ],
    drops: ["Electric Organ"],
    aura: {
      name: "Ferocious Thunder Dragon",
      description:
        "While fighting together, Water Pals drop more items when defeated.",
    },
    description: "This Pal is under investigation.",
  },
  {
    id: 107,
    key: "107",
    image: "/public/images/107.png",
    name: "Shadowbeak",
    wiki: "https://palworld.fandom.com/wiki/Shadowbeak",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
    ],
    drops: ["Pal Metal Ingot", "Carbon Fiber", "Innovative Technical Manual"],
    aura: {
      name: "Genetic modification",
      description:
        "You can ride on its back to fly.While riding, dark elemental attacks are strengthened.",
    },
    description:
      "Forbidden existence born of madness.\nAs he lost his genetic relationship with the other Pals, he may no longer be considered one of them.",
  },
  {
    id: 108,
    key: "108",
    image: "/public/images/108.png",
    name: "Paladius",
    wiki: "https://palworld.fandom.com/wiki/Paladius",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.MINING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
    ],
    drops: ["Pal Metal Ingot", "Diamond"],
    aura: {
      name: "Holy Winged Knight",
      description:
        "You can order it behind your back to get around. While riding, you can do a triple jump.",
    },
    description:
      "In the past, he and Necromus were a single species.\nThey say that they are an existence that has freed themselves from all negative feelings, but the depths of their eyes harbor traces of resentment.",
  },
  {
    id: 109,
    key: "109",
    image: "/public/images/109.png",
    name: "Necromus",
    wiki: "https://palworld.fandom.com/wiki/Necromus",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.MINING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
    ],
    drops: ["Pal Metal Ingot", "Large Pal Soul"],
    aura: {
      name: "Black Knight of the Abyss",
      description:
        "You can ride on its back to move around.While riding, you can double jump.",
    },
    description:
      "Once he and Paladius were a single species.\nThey say it is the manifestation of negative feelings, but the depths of their eyes contain traces of compassion.",
  },
  {
    id: 110,
    key: "110",
    image: "/public/images/110.png",
    name: "Frostallion",
    wiki: "https://palworld.fandom.com/wiki/Frostallion",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.COOLING,
        level: 4,
      },
    ],
    drops: ["Ice Organ", "Diamond"],
    aura: {
      name: "Ice Steed",
      description:
        "Can be ridden as a flying mount.\nChanges the player's attack type to ice and enhances Ice attacks while mounted.",
    },
    description:
      "Guardian deity of Palpagos Island, known as the Winter Caller. In the past, when a calamity struck the land, it soared into the sky and sealed away the threat by casting the island into an eternal winter.",
  },
  {
    id: 111,
    key: "111",
    image: "/public/images/111.png",
    name: "Jetragon",
    wiki: "https://palworld.fandom.com/wiki/Jetragon",
    types: [TypesEnum.DRAGON],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 3,
      },
    ],
    drops: ["Pure Quartz", "Polymer", "Carbon Fiber", "Diamond"],
    aura: {
      name: "Aerial missile",
      description:
        "You can ride on its back to fly.While riding, you can continuously fire with a rocket launcher.",
    },
    description:
      "Look over the island of Palpagos from the ends of the sky.\nWhen the calamity awakens again, splitting the earth and setting the heavens on fire, he will destroy it with a glare of complete obliteration.",
  },
];
