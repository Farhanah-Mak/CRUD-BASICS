const form= document.getElementById('form')
const input= document.getElementById('input')
const msg= document.getElementById('msg')
const posts= document.getElementById('posts')


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // console.log('clicked');
    formValidation()
})

let formValidation= () =>{
    if(input.value === ''){
        msg.innerHTML= 'post cannot be empty'
        // console.log('failure')
    }
    else{
        msg.innerHTML= ''
        console.log('success')
        getData()

    }
}

let data= {}

let getData= ()=>{
    data['text']= input.value
    posts.innerHTML += `<div>
                            <p>${data.text}</p>
                            <span class="options">
                                <i onClick="deleteData(this)" class="fa-regular fa-trash"></i>
                                <i onClick="updateData(this)" class="fa-solid fa-pen-to-square"></i>
                        </span>
                    </div>`
        input.value= ''
}

let deleteData= (e)=>{
    e.parentElement.parentElement.remove()
}
let updateData=(e)=>{
    input.value= data.text
    e.parentElement.parentElement.remove()
}