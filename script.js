function addPost() {
  const username = document.getElementById("username").value;
  const content = document.getElementById("content").value;

  fetch("http://localhost:4000/post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, content })
  })
  .then(() => loadPosts());
}

function loadPosts() {
  fetch("http://localhost:4000/posts")
    .then(res => res.json())
    .then(data => {
      const postsDiv = document.getElementById("posts");
      postsDiv.innerHTML = "";
      data.forEach(p => {
        const div = document.createElement("div");
        div.className = "post";
        div.innerHTML = `<b>${p.username}</b><br>${p.content}`;
        postsDiv.appendChild(div);
      });
    });
}

loadPosts();
