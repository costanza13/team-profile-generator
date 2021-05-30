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
  let roleIcon = '';
  for (let i = 0; i < team.length; i++) {
    let other;
    let otherIcon;
    switch (team[i].role) {
      case 'Manager':
        roleIcon = '<i class="fas fa-star role-icon"></i>';
        other = `#${team[i].officeNumber}`;
        otherIcon = '<i class="fas fa-door-closed"></i>';
        otherType = 'office number';
        break;
      case 'Engineer':
        roleIcon = '<i class="fas fa-laptop-code role-icon"></i>';
        other = `<a href="https://github.com/${team[i].github}">${team[i].github}</a>`;
        otherIcon = '<i class="fab fa-github"></i>';
        otherType = 'github profile';
        break;
      case 'Intern':
        roleIcon = '<i class="fas fa-graduation-cap role-icon"></i>';
        other = `${team[i].school}`;
        otherIcon = '<i class="fas fa-school"></i>';
        otherType = 'school';
        break;
    }
    cards += `
      <div class="card my-4 mx-auto">
        <div class="card-body">
          ${roleIcon}
          <h4 class="card-title">${team[i].name}</h4>
          <p class="card-text">${team[i].role}</p>
        </div>
        <div class="details">
          <div>
            <div class="detail-icon"><i title="ID number" class="fas fa-id-badge"></i></div>
            <div>${team[i].id}</div>
          </div>
          <div>
            <div class="detail-icon"><i title="email" class="fas fa-at"></i></div>
            <div><a href="mailto:${team[i].email}">${team[i].email}</a></div>
          </div>
          <div>
            <div class="detail-icon" title="${otherType}">${otherIcon}</div>
            <div>${other}</div>
          </div>
        </div>
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
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Amiri&display=swap">
  <link rel="stylesheet" href="./style.css" />
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
