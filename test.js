document.getElementById('add-a').addEventListener('click', () => {
    const score = document.getElementById('score-a');
    score.textContent = parseInt(score.textContent) + 1;
});

document.getElementById('add-b').addEventListener('click', () => {
    const score = document.getElementById('score-b');
    score.textContent = parseInt(score.textContent) + 1;
});

document.getElementById('remove-a').addEventListener('click', () => {
    const score = document.getElementById('score-a');
    if (parseInt(score.textContent) > 0) {
        score.textContent = parseInt(score.textContent) - 1;
    }
});

document.getElementById('remove-b').addEventListener('click', () => {
    const score = document.getElementById('score-b');
    if (parseInt(score.textContent) > 0) {
        score.textContent = parseInt(score.textContent) - 1;
    }
});


document.getElementById('reset').addEventListener('click', () => {
    document.getElementById('score-a').textContent = '0';
    document.getElementById('score-b').textContent = '0';
});