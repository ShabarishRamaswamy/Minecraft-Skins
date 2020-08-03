const submitButton = document.getElementById('submitButton')

submitButton.addEventListener('click', () => {
    if(!document.getElementById('username').value){
        document.getElementById('ErrorMessage').innerText = "Error: Please Give a Valid Input"
    }
    fetch('/id/' + document.getElementById('username').value).then((res) => {
        res.text().then((data) => {
            data = JSON.parse(data)
            if(!data.avatar){
                document.getElementById('ErrorMessage').innerText = data
            }
            console.log(data.avatar)
            document.getElementById('avatar').innerHTML = "<img " + `style="width:128px;height:128px;" ` + "src='" + data.avatar + "'>";
            document.getElementById('head').innerHTML = "<img " + `style="width:128px;height:128px;" ` + "src='" + data.head + "'>";
            document.getElementById('body').innerHTML = "<img " + `style="width:120px;height:270px;" ` + "src='" + data.body + "'>";
            document.getElementById('skins').innerHTML = "<img " + `style="width:128px;height:128px;" ` + "src='" + data.skins + "'>";
            document.getElementById('capes').innerHTML = "<img " + `style="width:128px;height:128px;" ` + "src='" + data.capes + "' alt=" + "Unavailable" +" >";
        })
    })
})