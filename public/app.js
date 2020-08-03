const submitButton = document.getElementById('submitButton')

submitButton.addEventListener('click', () => {
    fetch('/id/' + document.getElementById('username').value).then((res) => {
        res.text().then((data) => {
            console.log(data)
        })
    })
})