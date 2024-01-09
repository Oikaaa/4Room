let postData = {posts:[]}
let userData = {users:[]}
let similar = []
const loading = document.getElementById('loading')
async function getData(){
    try{
        const respApi = await fetch('https://dummyjson.com/posts');
        postData = await respApi.json();
        console.log(postData);

        const userApi = await fetch('https://dummyjson.com/users');
        userData = await userApi.json();
        console.log(userData);

        const postZone = document.getElementById('postZone')

        const usernameAvatar = document.getElementById("usernameAvatar")
usernameAvatar.innerText = JSON.parse(localStorage.getItem("userSignUpInfo"))[0].display

        postData.posts.forEach(function(item, index){
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
            avatar.src = currentUser?.image

            //-------------------------
            const detail = document.createElement('div')
            detail.classList.add('detail')

            const name = document.createElement('h4')
            name.classList.add('name')
            name.innerText = currentUser?.firstName + " " + currentUser?.lastName

            const time = document.createElement('p')
            time.classList.add('time')
            time.innerText = item.reactions + ' hours'
            //-------------------------
            const textBox = document.createElement('div')
            textBox.classList.add('textBox')

            const para = document.createElement('p')
            para.innerText = item.body

            const functionHTML = document.createElement('div')
            functionHTML.classList.add('function')
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

loading.style.display = 'none'

const find = document.getElementById('find')

find.onkeydown = function(e){
        similar = postData.posts.filter(function(item){
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
            avatar.src = currentUser?.image

            //-------------------------
            const detail = document.createElement('div')
            detail.classList.add('detail')

            const name = document.createElement('h4')
            name.classList.add('name')
            name.innerText = currentUser?.firstName + " " + currentUser?.lastName

            const time = document.createElement('p')
            time.classList.add('time')
            time.innerText = item.reactions + ' hours'
            //-------------------------
            const textBox = document.createElement('div')
            textBox.classList.add('textBox')

            const para = document.createElement('p')
            para.innerText = item.body

            const functionHTML = document.createElement('div')
            functionHTML.classList.add('function')
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
            helloDiv.appendChild(functionHTML)
            functionHTML.appendChild(btnSaved)
            btnSaved.appendChild(btnSavedIcon)
            functionHTML.appendChild(btnComment)
            btnComment.appendChild(btnComments)
            btnComment.appendChild(hi)

        })
}


