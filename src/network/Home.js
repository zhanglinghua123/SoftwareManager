import {request} from "@/network/request"
export function getAllData() {
    return request({
        url: '/jiaran',
        method:'GET',
        params: {
            // province,
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