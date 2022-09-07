//array
//console.table()
//console.error();
var cars = ['python','java','visual-basic','data-analysis','toyota','benz',
'bugatti','ivm','rush','honda','mini-copper','range rover','corolla']



cars.push('kolas')
cars.unshift('camry')
cars.pop()
cars.slice()
console.log(cars.slice(0,5));

//snippet to output the last value of the last item in an Array
//var last = cars[cars.length - 1]
//var final = last[last.length - 1]
//console.log(final);
//cars[1] = 'noibi'

//console.table(cars)
//console.log(courses.join(' '));
console.log(cars[0]);


//object- key value pairs
const person = {
  name: 'noibi',
  age: 40,
  qualification: 'national diploma',
  married: false,
  siblings: ['fawwaz', 'faaiz', 'faarid'],
  address:{
    street:'magbe layout',
    estate:'ushafa',
    city:'bwari',
    houses:['white house','senate House',]
  }
  

}
person.name= 'kolas'
person.city = 'abuja'
console.log(person);
//console.log(person.siblings[person.siblings.length - 1]);
//console.log(person.address.street);
//console.log(person.address.houses[1][3]);
//console.log(person?.address?.schoolname);

// OPERATORS