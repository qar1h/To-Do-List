const addButton = document.querySelector('#addButton');
const refreshButton = document.querySelector('#refreshButton');
const section = document.querySelector('section');
addButton.addEventListener('click', () => {
    const input = document.querySelector('input');
    const odivBar = document.getElementById('divBar');
    const divBar = odivBar.cloneNode(true);
    divBar.style.display = 'block';
    const label = divBar.querySelector('#label');
    label.innerText = input.value;
    section.append(divBar);
    input.value = '';
});

refreshButton.addEventListener('click', () => {
    section.querySelectorAll('div').forEach(div => div.remove());
});

const enter = document.querySelector('input');
enter.addEventListener('keydown', (e) => {
    if (e.code == 'Enter') {
        const input = document.querySelector('input');
        const odivBar = document.getElementById('divBar');
        const divBar = odivBar.cloneNode(true);
        divBar.style.display = 'block';
        const label = divBar.querySelector('#label');
        label.innerText = input.value;
        section.append(divBar);
        input.value = '';
    }
});

section.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
        e.target.parentElement.parentElement.parentElement.remove();
    }
    if (e.target.nodeName === 'INPUT') {
        if (e.target.checked) {
            e.target.nextElementSibling.style.textDecoration = 'line-through';
            e.target.parentElement.parentElement.style.opacity = '0.5';
            e.target.disabled = true;
        } else {
            e.target.nextElementSibling.style.textDecoration = '';
        }
    }
});
