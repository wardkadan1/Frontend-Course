// Step 2: Set up the base URL
const baseURL = "https://jsonplaceholder.typicode.com";

// Step 3: Async function to fetch users
async function fetchUsers() {
  try {
    const response = await fetch(`${baseURL}/users`);
    if (response.status < 200 || response.status >= 300) {
      throw new Error("Failed to fetch users");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

// Step 4: Async function to fetch posts for each user
async function fetchPosts(userId) {
  try {
    const response = await fetch(`${baseURL}/posts?userId=${userId}`);
    if (response.status < 200 || response.status >= 300) {
      throw new Error(`Failed to fetch posts for user ${userId}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

// Step 5: Main function to display users and posts
async function displayUsersAndPosts() {
  const usersContainer = document.getElementById("users");

  try {
    // Fetch users
    const users = await fetchUsers();

    // Iterate over users and display their details
    for (const user of users) {
      // Create a user container
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML = `
                <h2>${user.name}</h2>
                <p>Email: ${user.email}</p>
                <div class="posts" id="posts-${user.id}"></div>
            `;

      // Append user container to the users container
      usersContainer.appendChild(userDiv);

      try {
        // Fetch posts for the current user
        const posts = await fetchPosts(user.id);
        const postsContainer = document.getElementById(`posts-${user.id}`);

        // Iterate over posts and display them
        for (const post of posts) {
          const postDiv = document.createElement("div");
          postDiv.classList.add("post");
          postDiv.innerHTML = `
                        <strong>${post.title}</strong>
                        <p>${post.body}</p>
                    `;
          postsContainer.appendChild(postDiv);
        }
      } catch (error) {
        console.error(`Error fetching posts for user ${user.id}:`, error);
      }
    }
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

// Call the main function to execute the code
displayUsersAndPosts();
