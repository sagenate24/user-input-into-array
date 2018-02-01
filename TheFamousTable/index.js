

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

var putIntoTableHeader = document.querySelector("#heyItsAHeadTable");
var putIntoTableBody = document.querySelector("#heyItsABodyTable");

putIntoTableHeader.innerHTML +=
  `
<tr><th>First Name</th>
<th>Last Name</th>
<th>sex</th>
<th>age</th></tr>
`
  ;

var myFunction = function (item) {

  putIntoTableBody.innerHTML +=
    `
    <tr><td>${item.firstName}</td>
    <td>${item.lastName}</td>
    <td>${item.sex}</td>
    <td>${item.age}</td></tr>
    `
    ;
}
famousPeople.forEach(myFunction);
