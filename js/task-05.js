const refs = {
    input: document.querySelector("#name-input"),
    span: document.querySelector("#name-output"),
}
refs.input.addEventListener('input', changeSpan);
function changeSpan(event) {
    refs.span.textContent = event.currentTarget.value;
}