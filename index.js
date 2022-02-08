/*https://apis.scrimba.com/jsonplaceholder/posts


const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }

        */

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    let first5Posts = data.slice(0, 5);

    let first5PostsHTML = "";
    for (let post of first5Posts) {
      first5PostsHTML += ` <h3>${post.title}</h3> <p>${post.body}</p>`;
    }

    document.getElementById("blog-list").innerHTML = first5PostsHTML;
  });

document.getElementById("new-post").addEventListener("submit", function (e) {
  e.preventDefault();

  let titleEl = document.getElementById("post-title").value;
  let bodyEl = document.getElementById("post-body").value;

  let postObj = {
    titleElement: titleEl,
    bodyElement: bodyEl,
  };

  let options = {
    method: "POST",
    body: JSON.stringify(postObj),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("blog-list").innerHTML = `
            <h3>${data.titleElement}</h3>
            <p>${data.bodyElement}<p>
            ${document.getElementById("blog-list").innerHTML}
            
        `;
    });
});
