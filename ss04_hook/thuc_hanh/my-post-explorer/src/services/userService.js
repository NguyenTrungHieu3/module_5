
function filterPosts(posts, searchTitle, selectedUserId) {
    return posts.filter(post => post.title.toLowerCase().includes(searchTitle.toLowerCase()) && (selectedUserId === '0' || selectedUserId === '' || post.userId === Number(selectedUserId)));
}

export default filterPosts;