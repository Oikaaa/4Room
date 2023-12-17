const fake = document.getElementById('fake')
fake.addEventListener('click', fakebtn)

function fakebtn (){
    console.log(1)
    document.getElementById('fileId').click()
}

document.getElementById('btnSaved').addEventListener('click', function(){
    document.getElementById('btnSavedIcon').style.color = 'yellow'
})