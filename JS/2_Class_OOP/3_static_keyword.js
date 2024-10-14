/**
 * Static Keyword
 */
// class IdolModel {
//     name;
//     year;
//     static groupName = 'Student';

//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }

//     static returnGroupName() {
//         return 'Student';
//     }
// }

// const alice = new IdolModel('Alice', 2003);
// console.log(alice);

// console.log(IdolModel.groupName);
// console.log(IdolModel.returnGroupName());

/**
 * Factory Constructor
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  static fromObject(object) {
    return new IdolModel(object.name, object.year);
  }

  static fromList(list) {
    return new IdolModel(list[0], list[1]);
  }
}

const emily = IdolModel.fromObject({
  name: 'Emily',
  year: 2003,
});
console.log(emily);

const chloe = IdolModel.fromList(['Chloe', 2003]);
console.log(chloe);
