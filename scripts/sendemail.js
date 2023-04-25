const $form = document.querySelector('#form');
const $buttonEmailTo = document.querySelector('#email-to');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault()

    const form = new FormData(this)
    console.log(form.get('name'))
    $buttonEmailTo.setAttribute('href', `mailto:mateo2823@hotmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get("message")}`);
    $buttonEmailTo.click()
}

