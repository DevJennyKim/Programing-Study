/**
 * Class Lecture Completion Problem
 *
 * 1) The Country class holds the country name and a list of corresponding idol groups
 *    (name property, idolGroups property).
 * 2) The IdolGroup class holds the idol group name and a list of member information
 *    (name property, members property).
 * 3) The Idol class contains the idol name and birth year information
 *    (name property, year property).
 * 4) The MaleIdol class has the same properties as the Idol class
 *    (name, year properties), and additionally, when the sing() function is called,
 *    it returns a string saying "${name} sings."
 * 5) The FemaleIdol class has the same properties as the Idol class
 *    (name, year properties), and additionally, when the dance() function is called,
 *    it returns a string saying "${name} dances."
 *
 * Form the data structure based on the information provided below.
 * Using the map() function effectively is recommended.
 */

// IVE is a South Korean idol group
// IVE is the name of a girl group.
// IVE consists of female idols.
const iveMembers = [
  {
    name: 'Yujin',
    year: 2003,
  },
  {
    name: 'Gaeul',
    year: 2002,
  },
  {
    name: 'Ray',
    year: 2004,
  },
  {
    name: 'Wonyoung',
    year: 2004,
  },
  {
    name: 'Liz',
    year: 2004,
  },
  {
    name: 'Iseo',
    year: 2007,
  },
];

// BTS is a South Korean idol group
// BTS is the name of a boy group.
// BTS consists of male idols.
const btsMembers = [
  {
    name: 'Jin',
    year: 1992,
  },
  {
    name: 'Suga',
    year: 1993,
  },
  {
    name: 'J-Hope',
    year: 1994,
  },
  {
    name: 'RM',
    year: 1994,
  },
  {
    name: 'Jimin',
    year: 1995,
  },
  {
    name: 'V',
    year: 1995,
  },
  {
    name: 'Jungkook',
    year: 1997,
  },
];

class Country {
  name;
  idolGroups;

  constructor(name, idolGroups) {
    this.name = name;
    this.idolGroups = idolGroups;
  }
}

class IdolGroup {
  name;
  members;

  constructor(name, members) {
    this.name = name;
    this.members = members;
  }
}

class Idol {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class FemaleIdol extends Idol {
  dance() {
    return `${this.name} dances.`;
  }
}

class MaleIdol extends Idol {
  sing() {
    return `${this.name} sings.`;
  }
}

const cIveMembers = iveMembers.map((x) => new FemaleIdol(x['name'], x['year']));
console.log(cIveMembers);

const cBtsMembers = btsMembers.map((x) => new MaleIdol(x['name'], x['year']));
console.log(cBtsMembers);

const iveGroup = new IdolGroup('IVE', cIveMembers);
console.log(iveGroup);

const btsGroup = new IdolGroup('BTS', cBtsMembers);
console.log(btsGroup);

const korea = new Country('South Korea', [iveGroup, btsGroup]);
console.log(korea);

const allTogether = new Country('South Korea', [
  new IdolGroup(
    'IVE',
    iveMembers.map((x) => new FemaleIdol(x['name'], x['year']))
  ),
  new IdolGroup(
    'BTS',
    btsMembers.map((x) => new MaleIdol(x['name'], x['year']))
  ),
]);
console.log(allTogether);
