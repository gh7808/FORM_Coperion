// const scriptUrl = '';
// const form = document.forms['google-sheet']

// form.addEventListener('submit',e => {
//     e.preventDeafult()
//     fetch(scriptURL, {method: 'POST',body: new FormData(form)})
//         .then(response => alert("Thanks for Contacting us..! We will Contact You Soon..."))
//         .catch(error => console.error('Error!', error.message))

// })


// const scriptUrl = '';
// const form = document.forms['google-sheet']

// form.addEventListener('submit',e => {
//     e.preventDeafult()
//     fetch(scriptURL, {method: 'POST',body: new FormData(form)})
//         .then(response => alert("Thanks for Contacting us..! We will Contact You Soon..."))
//         .catch(error => comsole.error('Error!', error.message))

// })

// const form = document.querySelector('form');
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     const formData = new FormData(form);
//     for(item of formData){
//         console.log(item[0],item[1]);
//     }
// })


/* Sending the formData object as payload using Fetch */
function formReset(){
    document.getElementById('form');
    window.location.reload();
}

const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    {
        e.preventDefault();

        const payload = new FormData(form);

        fetch('https://httpbin.org/post', {
            method: 'POST',
            body: payload,
        })
            .then(res => res.json())
            .then(data => console.log(data))
        setTimeout(() => {
            alert("Your form have been submitted successfully.Thanks!");
            //formReset();
            
        }, 1000);

    }
})
