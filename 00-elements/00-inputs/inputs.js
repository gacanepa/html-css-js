import { MIN_LENGTH_THRESHOLD } from './constants.js';

const dataList = document.getElementById('nba-team-choice');
dataList.addEventListener('change', function (event) {
  console.log(event.target.value);
});

const inputText = document.getElementById('input-text');
const inputTextMaxLength = inputText.getAttribute('maxlength');
const inputTextError = document.getElementById('input-text-error');
inputText.addEventListener('input', function (event) {
  const inputTextCurrentLength = event.target.value.length;
  const charactersLeft = inputTextMaxLength - inputTextCurrentLength;
  if (charactersLeft <= MIN_LENGTH_THRESHOLD) {
    inputTextError.textContent = `You have ${charactersLeft} characters left`;
  } else {
    inputTextError.textContent = '';
  }
});
