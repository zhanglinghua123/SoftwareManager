import {request} from "@/network/request"
export function signIn(name,password) {
    return request({
        url: '/user/list/commit',
        method:'POST',
        params: {
            province,
        },
        // headers: {'content-type': 'application/x-www-form-urlencoded'}
    })
}
export function signUp(name,password,email) {
    return request({
        url:"",
        method:"",
        params:{
        },
    })

}