const page = document.querySelector('main')
const inputTitle = document.getElementById('title');
const inputTextContent = document.getElementById('content');
const article = document.createElement('article');
const header = document.createElement('h1');
const content = document.createElement('p');


function createPost(title, text) {
    page.appendChild(article)
    article.appendChild(header)
    article.appendChild(content)
    header.textContent = title;
    content.textContent = text;
};


const button = document.getElementById('test');
button.addEventListener('click', () => {
    if (inputTitle.value && inputTextContent.value) {
        createPost(inputTitle.value.toString(), inputTextContent.value.toString())
    }
    else { alert('Missing argument') }
})