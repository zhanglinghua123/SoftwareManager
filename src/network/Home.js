import {request} from "@/network/request"
export function getAllData(province,year) {
    return request({
        url: '/',
        method:'GET',
        params: {
            province,
        },
        // headers: {'content-type': 'application/x-www-form-urlencoded'}
    })
}
export function getSearchData(province,year) {
    return request({
        url:"/search",
        method:"",
        params:{
            province,
            year
        },
    })

}