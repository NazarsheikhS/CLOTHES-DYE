let loginPage = (e) => {
    e.preventDefault()
    let user = e.target[0]
    let pswd = e.target[1]

    if(user.value === 'Nazar' &&
pswd.value === '123456'){
    window.location ='./index.html'
}
else{
    let err = 'border:solid 2px red'
    user.style.cssText = err;
    pswd.style.cssText = err;
}
}