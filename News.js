async function getData(){
        try{
            const topApi = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=cbb75045607748118c709034a876df83');
            const topData = await topApi.json();
            console.log(topData);

            const top2Api = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=cbb75045607748118c709034a876df83');
            const top2Data = await top2Api.json();
            console.log(top2Data);

            topData.articles.forEach(function(item, index){
                console.log(item)
                const post = document.createElement('div')
                post.classList.add('post')
    
                const hello = document.createElement('div')
                hello.classList.add('hello')
    
                const header = document.createElement('h1')
                header.classList.add('postHeader')
                header.innerText = item.title
    
                const content = document.createElement('div')
                content.classList.add('textBox' , 'con')
                content.innerText = item.content

                const description = document.createElement('div')
                description.classList.add('textBox'  , 'des')
                description.innerText = item.description

                const img = document.createElement('img')
                img.classList.add('Img')
                img.src = item?.urlToImage
    
                document.getElementById('postZone').appendChild(post)
                post.appendChild(hello)
                hello.appendChild(header)
                hello.appendChild(description)
                hello.appendChild(content)
                hello.appendChild(img)
            })
            top2Data.articles.forEach(function(item, index){
                console.log(item)
                const post = document.createElement('div')
                post.classList.add('post')
    
                const hello = document.createElement('div')
                hello.classList.add('hello')
    
                const header = document.createElement('h1')
                header.classList.add('postHeader')
                header.innerText = item.title
    
                const content = document.createElement('div')
                content.classList.add('textBox' , 'con')
                description.classList.add('con')
                content.innerText = item.content

                const description = document.createElement('div')
                description.classList.add('textBox' , 'des')
                description.innerText = item.description

                const img = document.createElement('img')
                img.classList.add('shopImg')
                img.src = item?.urlToImage
    
                document.getElementById('postZone').appendChild(post)
                post.appendChild(hello)
                hello.appendChild(header)
                hello.appendChild(description)
                hello.appendChild(content)
                hello.appendChild(img)
            })
        }
        catch(e){
            console.log(e)
        }
    }

    getData()

    setTimeout(function(){
        loading.style.display = 'none'
    },5000)

    