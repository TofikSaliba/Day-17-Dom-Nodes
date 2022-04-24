const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

const div = document.createElement("div");
const ol = document.createElement("ol");
ol.style["list-style-type"] = "none";
document.body.prepend(div);
div.appendChild(ol);

users.forEach((user) => {
  const li = document.createElement("li");
  li.innerText = user.firstName + " " + user.lastName;
  li.setAttribute("data-id", user.id);
  ol.appendChild(li);
});
