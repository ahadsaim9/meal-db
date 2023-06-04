/* const loadUser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => displayUser(data))
    .catch((error) => console.log(error));
}; */

//async await 

const loadUser2 = async () => {
  try {
    const res = await fetch("https://randomuser.me/api/?gender=female");
    const data = await res.json();
    displayUser(data);
  } catch (error) {
    console.log(error);
  }
};
loadUser2();
// loadUser();
const displayUser = (users) => {
  const mainSection = document.getElementById("quotes-container");
  console.log(users.results[0]);
  const box1 = document.createElement("section");
  box1.classList.add("box-1");
  box1.innerHTML = `
  <img src="${users.results[0].picture.medium}" alt="">
  <h3>Name:${users.results[0].name.title} ${users.results[0].name.first} ${users.results[0].name.last} </h3>
  <h3>Gender:${users.results[0].gender} </h3>
    <h3>E-mail:${users.results[0].email} </h3>
    <h3>Contact Number: ${users.results[0].cell}</h3>
    <h3>Location : City: ${users.results[0].location.city}, Country: ${users.results[0].location.country} </h3>
   
    `;
  mainSection.appendChild(box1);
};
