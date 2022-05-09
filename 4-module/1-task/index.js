function makeFriendsList(friends) {
  let listUL = document.createElement("UL");

  for (let i = 0; i < friends.length; i++) {
    let listLI = document.createElement('li');
    listLI.innerHTML = friends[i].firstName + " " + friends[i].lastName;
    listUL.append(listLI);
  }
  return listUL;
}
