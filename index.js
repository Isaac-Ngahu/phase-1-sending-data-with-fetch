// Add your code here
function submitData(name,email){
fetch("http://localhost:3000/users",{
    method:"POST",
    Headers:{
        "Content-type":"application/json",
        "Accept":"application/json"
    },
    body:JSON.stringify({
        "name":name,
        "email":email
    }),
})
.then(Response=>Response.json())
.then(obj=>{
    const li=document.createElement('li')
li.innertext=`${obj.id}`
const ul=document.querySelector('ul')
ul.append(li)
})
.catch(function(error){
    const errormessage=error.message
    const li=document.createElement('li')
    li.innertext=`${errormessage}`
    const ul=document.querySelector('ul')
  ul.append(li)
})

return fetch()
}
submitData("Steve","Steve@gmail.com")
