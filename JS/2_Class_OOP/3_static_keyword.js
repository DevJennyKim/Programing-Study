/**
 * Static Keyword
 *The static keyword allows you to define properties or methods that are bound to the class itself rather than to instances of the class.
 *This means that static properties and methods can be accessed directly through the class without needing to create an instance of the class.
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

// const alice = new IdolModel('Alice', 2003); //<==인스턴스
// console.log(alice);

// console.log(IdolModel.groupName);//스태틱키워드는 new를 쓰지않고 쓸 필요가없다.
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
