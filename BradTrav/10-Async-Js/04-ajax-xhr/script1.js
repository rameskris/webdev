const xhr=new XMLHttpRequest()
//
xhr.open('GET','./movies.json')
xhr.onreadystatechange=function(){
    if(this.readyState === 4 && this.status===200){
        const data=JSON.parse(this.responseText)
        data.forEach(item=>{
            const li=document.createElement('li')
            li.innerHTML=`<strong>${item.title}</strong> -
             ${item.year}`
             document.querySelector('#results').appendChild(li)
        })
    }
}
xhr.send()