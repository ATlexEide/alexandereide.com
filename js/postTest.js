const page = document.querySelector('main')
const inputTitle = document.getElementById('title');
const inputTextContent = document.getElementById('content');


function createPost(title, text) {
    let article = document.createElement('article')
    page.appendChild(article);
    let header = document.createElement('h1');
    header.textContent = title;
    article.appendChild(header);
    let content = document.createElement('p');
    content.textContent = text;
    article.appendChild(content);
    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'delete-button');
    deleteBtn.textContent = 'Delete';
    article.appendChild(deleteBtn);
};

function deletePost() {

};

const button = document.getElementById('test');
button.addEventListener('click', () => {
    if (inputTitle.value && inputTextContent.value) {
        createPost(inputTitle.value.toString(), inputTextContent.value.toString())
    }
    else { alert('Missing argument') }
})