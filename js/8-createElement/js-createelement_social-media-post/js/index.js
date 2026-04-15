console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another
// social media post to the body.

const myPost = document.createElement("article");
myPost.classList.add("post");

const myPostContent = document.createElement("p");
myPostContent.classList.add("post__content");
myPostContent.textContent = "Mein neuer Post! Der ist einfach super duper!";

const myPostFooter = document.createElement("footer");
myPostFooter.classList.add("post__footer");

const myPostUsername = document.createElement("span");
myPostUsername.classList.add("post__username");
myPostUsername.textContent = "@username";

const myPostButton = document.createElement("button");
myPostButton.classList.add("post__button");
myPostButton.type = "button";
//myPostButton["data-js"] = "like-button";
myPostButton.textContent = "♥ Like";

//console.log(likeButton);

document.body.append(myPost);
myPost.append(myPostContent);
myPost.append(myPostFooter);
myPostFooter.append(myPostUsername);
myPostFooter.append(myPostButton);

//console.log(myPost);

myPostButton.addEventListener("click", handleLikeButtonClick);
