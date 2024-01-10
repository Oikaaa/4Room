async function getData(){
        try{
            const topApi = await fetch('https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=fb89f17e213903567d42a53003554ff0');
            const topData = await topApi.json();
            console.log(topData.url);

            topData.articles.forEach(function(item, index){
                console.log(item.url)
                const a = document.createElement('a')
                a.classList.add('aPost')
                a.href = item.url
                a.setAttribute('target', '_blank')

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
                img.src = item?.image
    
                document.getElementById('postZone').appendChild(a)
                a.appendChild(post)
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
