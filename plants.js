let postData = {movies:[]}
let userData = {users:[]}
let similar = []

async function getData(){
    try{
        const respApi = await fetch('./plants.json');
        postData = await respApi.json();
        console.log(postData);

        const userApi = await fetch('./homeUser.json');
        userData = await userApi.json();
        console.log(userData);

        const postZone = document.getElementById('postZone')

        postData.plants.forEach(function(item, index){
            const currentUser = userData.users.find(function(user){
                return user.id === item.id
            })

            const postDiv = document.createElement('div')
            postDiv.classList.add('post')

            const helloDiv = document.createElement('div')
            helloDiv.classList.add('hello')
            //-------------------------
            const postHeader = document.createElement('h1')
            postHeader.classList.add('postHeader')
            postHeader.innerText = item.title
            //-------------------------
            const author = document.createElement('div')
            author.classList.add('author')

            const authorSon = document.createElement('div')
            authorSon.classList.add('authorSon')

            const avatar = document.createElement('img')
            avatar.classList.add('avatar')
            avatar.src = currentUser?.avatar

            //-------------------------
            const detail = document.createElement('div')
            detail.classList.add('detail')

            const name = document.createElement('h4')
            name.classList.add('name')
            name.innerText = currentUser?.username

            const time = document.createElement('p')
            time.classList.add('time')
            time.innerText = item.reaction + ' hours'
            //-------------------------
            const textBox = document.createElement('div')
            textBox.classList.add('textBox')

            const para = document.createElement('p')
            para.innerText = item.description

            const functionHTML = document.createElement('div')
            functionHTML.classList.add('function')

            //-------------------------

            const shopImg = document.createElement('img')
            shopImg.classList.add('shopImg')
            shopImg.src = item.image
            //-------------------------

            const btnSaved = document.createElement('div')
            btnSaved.setAttribute('id', 'btnSaved')
            btnSaved.classList.add('btnSaved')

            const btnSavedIcon = document.createElement('i')
            btnSavedIcon.classList.add('fa')
            btnSavedIcon.classList.add('fa-bookmark')
            btnSavedIcon.setAttribute('id', 'btnSavedIcon')
            btnSavedIcon.setAttribute('aria-hidden', 'true');

            const btnComment = document.createElement('div')
            btnComment.classList.add('btnComment')

            const btnComments = document.createElement('i')
            btnComments.classList.add('fa')
            btnComments.classList.add('fa-comments')
            btnComments.setAttribute('aria-hidden', 'true');

            const hi = document.createElement('p')
            hi.classList.add('hi')
            hi.innerText = 'Add response'

            //---------------------------


            postZone.appendChild(postDiv)
            postDiv.appendChild(helloDiv)
            helloDiv.appendChild(postHeader)
            helloDiv.appendChild(author)
            author.appendChild(authorSon)
            authorSon.appendChild(avatar)
            authorSon.appendChild(detail)
            detail.appendChild(name)
            detail.appendChild(time)
            helloDiv.appendChild(textBox)
            textBox.appendChild(para)
            textBox.appendChild(shopImg)
            helloDiv.appendChild(functionHTML)
            functionHTML.appendChild(btnSaved)
            btnSaved.appendChild(btnSavedIcon)
            functionHTML.appendChild(btnComment)
            btnComment.appendChild(btnComments)
            btnComment.appendChild(hi)

        })

    }
    catch(e){
        console.log(e)
    }

}

getData()

const find = document.getElementById('find')

find.onkeydown = function(e){
        similar = postData.plants.filter(function(item){
            return item.title.includes(e.target.value)
        })
        console.log(similar)

        const postZone = document.getElementById('postZone')
        postZone.innerHTML = ""
        
        similar.forEach(function(item, index){
            const currentUser = userData.users.find(function(user){
                return user.id === item.id
            })

            const postDiv = document.createElement('div')
            postDiv.classList.add('post')

            const helloDiv = document.createElement('div')
            helloDiv.classList.add('hello')
            //-------------------------
            const postHeader = document.createElement('h1')
            postHeader.classList.add('postHeader')
            postHeader.innerText = item.title
            //-------------------------
            const author = document.createElement('div')
            author.classList.add('author')

            const authorSon = document.createElement('div')
            authorSon.classList.add('authorSon')

            const avatar = document.createElement('img')
            avatar.classList.add('avatar')
            avatar.src = currentUser?.avatar

            //-------------------------
            const detail = document.createElement('div')
            detail.classList.add('detail')

            const name = document.createElement('h4')
            name.classList.add('name')
            name.innerText = currentUser?.username

            const time = document.createElement('p')
            time.classList.add('time')
            time.innerText = item.reaction + ' hours'
            //-------------------------
            const textBox = document.createElement('div')
            textBox.classList.add('textBox')

            const para = document.createElement('p')
            para.innerText = item.description

            const functionHTML = document.createElement('div')
            functionHTML.classList.add('function')

            //-------------------------

            const shopImg = document.createElement('img')
            shopImg.classList.add('shopImg')
            shopImg.src = item.image
            //-------------------------

            const btnSaved = document.createElement('div')
            btnSaved.setAttribute('id', 'btnSaved')
            btnSaved.classList.add('btnSaved')

            const btnSavedIcon = document.createElement('i')
            btnSavedIcon.classList.add('fa')
            btnSavedIcon.classList.add('fa-bookmark')
            btnSavedIcon.setAttribute('id', 'btnSavedIcon')
            btnSavedIcon.setAttribute('aria-hidden', 'true');

            const btnComment = document.createElement('div')
            btnComment.classList.add('btnComment')

            const btnComments = document.createElement('i')
            btnComments.classList.add('fa')
            btnComments.classList.add('fa-comments')
            btnComments.setAttribute('aria-hidden', 'true');

            const hi = document.createElement('p')
            hi.classList.add('hi')
            hi.innerText = 'Add response'

            //---------------------------


            postZone.appendChild(postDiv)
            postDiv.appendChild(helloDiv)
            helloDiv.appendChild(postHeader)
            helloDiv.appendChild(author)
            author.appendChild(authorSon)
            authorSon.appendChild(avatar)
            authorSon.appendChild(detail)
            detail.appendChild(name)
            detail.appendChild(time)
            helloDiv.appendChild(textBox)
            textBox.appendChild(para)
            textBox.appendChild(shopImg)
            helloDiv.appendChild(functionHTML)
            functionHTML.appendChild(btnSaved)
            btnSaved.appendChild(btnSavedIcon)
            functionHTML.appendChild(btnComment)
            btnComment.appendChild(btnComments)
            btnComment.appendChild(hi)

        })
    }

    loading.style.display = 'none'