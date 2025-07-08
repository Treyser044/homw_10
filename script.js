let usreName = prompt('ismingizni kiritiing')
let userSureName = prompt('familiyangizni kiriting')
let userNickName = prompt('taxallusingizni kiriting')
let userAge = prompt('yoshingizni kiriting')

let userInfo = document.querySelector('.user_info')

userInfo.innerHTML = `

<h3>Ism: ${usreName} </h3>
<h3>Familiya: ${userSureName}</h3>
<h3>Taxallus: ${userNickName}</h3>
<h3>Yosh: ${userAge}</h3>

`
