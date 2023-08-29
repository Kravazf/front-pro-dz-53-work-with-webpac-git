import users from "./data.js";

export function displayUsers() {
  const userList = document.createElement('ul');
  userList.classList.add('user-list');

  users.forEach(user => {
    const userItem = document.createElement('li');

    Object.keys(user).forEach(key => {
      userItem.innerHTML += `<strong>${key}:</strong> ${user[key]}<br>`;
    });

    userItem.innerHTML += '<hr>';

    userList.appendChild(userItem);
  });

  document.body.appendChild(userList);
}