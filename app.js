let question = document.querySelectorAll('h3');
let answer = document.querySelectorAll('.answer');

for(let i = 0; i < question.length; i++) {
    question[i].addEventListener('click', () => {
        answer[i].style.display == 'flex' ? answer[i].style.display = 'none' : answer[i].style.display = 'flex';
    })
};