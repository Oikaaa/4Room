async function getData(){
    try{
        const respApi = await fetch('https://dummyjson.com/posts');
        const postData = await respApi.json();
        console.log(postData);

        const userApi = await fetch('https://dummyjson.com/users');
        const userData = await userApi.json();
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

                            // <div id = 'post1' class="post">
                            //     <div class="hello">
                            //         <h1 class="postHeader">Lorem ipsum dolor sit amet</h1>
                            //         <div class="author">
                            //             <img class="avatar" src="https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
                            //             <div class="detail">
                            //                 <h4 class="name">Elizabeth May</h4>
                            //                 <p class="time">6 hours</p>
                            //             </div>
                            //         </div>
                            //         <div class="textBox">
                            //             <p>Sed nec sagittis mauris, eget ultricies enim. Vestibulum consectetur ex id arcu viverra fringilla id in dolor. Proin egestas fringilla ligula id feugiat. Sed ac sem in mauris venenatis sodales. Nulla scelerisque at leo sit amet hendrerit. Integer imperdiet consectetur leo pretium condimentum. Praesent at diam sodales, consequat nisi vel, hendrerit ipsum.</p>
                            //         </div>
                            //         <div class="function">
                            //             <div class="btnSaved">
                            //                 <i class="fa fa-bookmark btnSaveIcon" aria-hidden="true" style="font-size: 19px; color: #bfbfbf;"></i>
                            //             </div>
                            //             <div class="btnComment">
                            //                 <i class="fa fa-comments" aria-hidden="true"></i>
                            //                 <p class="hi">Add response</p>
                            //             </div>
                            //         </div>
                                    
                            //     </div>
                            // </div>