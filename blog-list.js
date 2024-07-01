
document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = [
        {
            title: '101 Hobbies - Week 1',
            date: 'July 1, 2024',
            filename: 'blogs/hobbies_wk1.html'
        },
 
    ];

    const blogListContainer = document.getElementById('blog-list');

    blogPosts.forEach(post => {
        const postLink = document.createElement('a');
        postLink.href = post.filename;
        postLink.classList.add('blog-link');
        postLink.innerHTML = `
            <div class="blog-thumbnail">
                <img src="${post.image}" alt="Thumbnail for ${post.title}">
            </div>
            <div class="blog-details">
                <h2>${post.title}</h2>
                <p><small>${post.date}</small></p>
            </div>
        `;
        blogListContainer.appendChild(postLink);
    });
});
