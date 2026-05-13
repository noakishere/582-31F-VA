// Load DOM
const loadPostBtn = document.getElementById("load-post");
const status = document.getElementById("status");
const postContainer = document.getElementById("post-content");

const postTitle = document.getElementById("post-title");
const postBody = document.getElementById("post-body");

// button behaviour
loadPostBtn.addEventListener("click", () => {
  // update status
  status.textContent = "Loading post...";

  // fetch our data
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((post) => {
      console.log(post);
      postTitle.textContent = post.title;
      postBody.textContent = post.body;
      status.textContent = "Post loaded successfully.";
    })
    .catch((error) => {
      status.textContent = `Failed to load post: ${error.message}`;
    });
});
