

var famousPeople = [
  {
    firstName: 'Oprah',
    lastName: 'Winfrey',
    sex: 'female',
    age: 63
  },
  {
    firstName: 'Leonardo',
    lastName: 'DiCaprio',
    sex: 'male',
    age: 43
  },
  {
    firstName: 'Angelina',
    lastName: 'Jolie',
    sex: 'female',
    age: 42
  },
  {
    firstName: 'Joe',
    lastName: 'Biden',
    sex: 'male',
    age: 75
  },
  {
    firstName: 'Jennifer',
    lastName: 'Lawrence',
    sex: 'female',
    age: 27
  },
  {
    firstName: 'Morgan',
    lastName: 'Freeman',
    sex: 'male',
    age: 80
  },
  {
    firstName: 'Chriss',
    lastName: 'Pratt',
    sex: 'male',
    age: 38
  },
  {
    firstName: 'Scarlett',
    lastName: 'Johansson',
    sex: 'female',
    age: 33
  }
];

document.write('<table>');
document.write('<tr><th>First Name</th><th>Last Name</th><th>Sex</th><th>Age</th></tr>');

for (i = 0; i < famousPeople.length; i++)
{
  document.write('<tr><td>' + famousPeople[i].firstName + '</td><td>' + famousPeople[i].lastName + '</td><td>' + famousPeople[i].sex + '</td><td>' + famousPeople[i].age + '</td></tr>')
}


/*for (i = 0; i < famousPeople.length; i++){
  document.write('<tr><td>' + famousPeople[i].lastName + '</td></tr>')
}
document.write('</table>');
function myFirstNameFunction() {

  for (i = 0; i < famousPeople.length; i++) {
    if (famousPeople.length > i) {
      var x = document.querySelector('.firstColumn');
    = document.write(famousPeople[i].firstName);
    }
  }
}

myFirstNameFunction()
*/
