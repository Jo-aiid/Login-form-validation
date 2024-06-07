const name=document.getElementById('name');
const password=document.getElementById('password');
const err=document.getElementById('error');
const form=document.getElementById('form');


form.addEventListener('submit',(e)=>{
let message=[];


if(name.value===''||name.value===null)
{
    message.push('name is required')

}



if(password.value.length<=6)

{message.push('password must be greather than 6 characters')
err.innerHTML=message.join(',')
}
if(password.value.length>=20)

{message.push('password must be lessthan than 20 characters')
err.innerHTML=message.join(',')
}



if(message.length>0)
{
    e.preventDefault()
err.innerHTML=message.join(',')
}}
)



