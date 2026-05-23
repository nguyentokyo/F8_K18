
 async function getList() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    const list = data.map(item => `<li>${item.title}</li>`);
    const listPost = list.join("");

    document.getElementById("list").innerHTML = listPost;
}

 getList();

 async function addPost(callback) {
     const title = document.getElementById("title").value;

     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
         method: "POST",
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify({
             title: title,
             body: "demo"
         })
     });

     const data = await response.json();
     console.log(data);

     if (callback) {
         callback();
     }
 }

 // gắn sự kiện click
 document.getElementById("addBtn").addEventListener("click", () => {
     addPost(getList);
 });
