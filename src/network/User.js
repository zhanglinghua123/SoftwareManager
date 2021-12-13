import {request} from "@/network/request"
export function signIn(name,password) {
    return request({
        url: '/signin',
        method:'GET',
        params: {
<<<<<<< HEAD
            name,
            password
=======
            name, password
>>>>>>> origin/main
        },
        // headers: {'content-type': 'application/x-www-form-urlencoded'}
    })
}
export function signUp(form) {
    let name = form.name;
    let password = form.password;
    let email = form.email;
    return request({
        url:"/signup",
        method:"POST",
        params:{
            name,
            password,
            email
        },
    })

}