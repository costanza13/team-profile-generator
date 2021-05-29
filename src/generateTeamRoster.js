function getManagerName(team) {
  for (let i = 0; i < team.length; i++) {
    if (team[i].role === 'Manager') {
      return team[i].name;
    }
  }
  return 'Nobody';
}

function renderEmployees(team) {
  let cards = '';
  for (let i = 0; i < team.length; i++) {
    let other;
    switch (team[i].role) {
      case 'Manager':
        other = `Office #: ${team[i].officeNumber}`;
        break;
      case 'Engineer':
        other = `GitHub: <a href="https://github.com/${team[i].github}">${team[i].github}</a>`;
        break;
      case 'Intern':
        other = `School: ${team[i].school}`;
        break;
    }
    cards += `
      <div class="card my-4 mx-auto">
        <div class="card-body">
          <h5 class="card-title">${team[i].name}</h5>
          <p class="card-text">${team[i].role}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID #: ${team[i].id}</li>
          <li class="list-group-item">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
          <li class="list-group-item">${other}</li>
        </ul>
      </div>\n`;
  }
  return cards;
}

function generateTeamRoster(team) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
    crossorigin="anonymous"
  />
  <title>${ getManagerName(team) }'s Team</title>
</head>
<body>
  <header class="jumbotron">
    <h1 class="display-3">${ getManagerName(team) }'s Team</h1>
  </header>
  <div class="container">
    <div class="row">
      <div class="col mx-auto">
        <div class="row">
          <div class="col-12 cards">
            ${ renderEmployees(team) }
          </div>
        </div>
      </div>
    </div>
  </div>  
</body>
</html>
`;
}

module.exports = generateTeamRoster;

// const team = [
//   {
//     role: 'Manager',
//     name: 'Michael Costanza',
//     id: '000001',
//     email: 'mcc@thisco.net',
//     officeNumber: '13'
//   },
//   {
//     role: 'Engineer',
//     name: 'Dennis Yang',
//     id: '000013',
//     email: 'dty@thisco.net',
//     github: 'sinned'
//   },
//   {
//     role: 'Engineer',
//     name: 'Robyn Battle',
//     id: '666667',
//     email: 'robyn@thisco.net',
//     github: 'battler'
//   },
//   {
//     role: 'Engineer',
//     name: 'Adam Goldband',
//     id: '314159',
//     email: 'adam@thisco.net',
//     github: 'mrknowledgful'
//   },
//   {
//     role: 'Intern',
//     name: 'Millicent Bulstrode',
//     id: '575759',
//     email: 'intern.millie@thisco.net',
//     school: 'Hogwarts'
//   }
// ];

// console.log(generateTeamRoster(team));