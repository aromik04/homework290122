"use strict";

const URL = "https://api.github.com/users";

const userList = document.querySelector(".user");
const btn = document.querySelector(".btn");

const getUserListMarkup = (user) => {
    const userListItem = document.createElement("li");
    const userAvatar = document.createElement("img");
    const userLink = document.createElement("a");
    const userRepos = document.createElement("a");

    userLink.innerText = user.login;
    userRepos.innerText = "Repositories";
    userLink.setAttribute("href", user.url);
    userAvatar.setAttribute("src", user.avatar_url);
    
    userListItem.append(userAvatar);
    userListItem.append(userLink);
    userListItem.append(userRepos);

     
    
    return userListItem;

    
};

const fragment = new DocumentFragment();

const getUsers = () => {
    fetch(`${URL}`)
        .then((response) => {
            return response.json();
        })
        .then((users) => {
            users.forEach((user) => {
                const userElement = getUserListMarkup(user);
                fragment.append(userElement);
            });

            userList.append(fragment);
        })
        .catch((error) => console.error(error));
};
 

btn.addEventListener("click", getUsers);