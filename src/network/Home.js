import {request} from "@/network/request"
export function getalljiaran1() {
    return request({
        url: '/jiaran1',
        method:'GET',
        params: {
            // province,
        },
        // headers: {'content-type': 'application/x-www-form-urlencoded'}
    })
}
export function getalljiaran2() {
    return request({
        url: '/jiaran2',
        method:'GET',
        params: {
            // province,
        },
        // headers: {'content-type': 'application/x-www-form-urlencoded'}
    })
}
export function getalljiaran3() {
    return request({
        url: '/jiaran3',
        method:'GET',
        params: {
            // province,
        },
        // headers: {'content-type': 'application/x-www-form-urlencoded'}
    })
}

export function getall001(){
    return request({
        url: '/all001',
        method: 'GET',
        // params:{
        //     province
        // }
    })
}
export function getall002(){
    return request({
        url: '/all002',
        method: 'GET',
        // params:{
        //     province
        // }
    })
}
export function getall003(){
    return request({
        url: '/all003',
        method: 'GET',
        // params:{
        //     province
        // }
    })
}
export function getall004(){
    return request({
        url: '/all004',
        method: 'GET',
        // params:{
        //     province
        // }
    })
}export function getall005(){
    return request({
        url: '/all005',
        method: 'GET',
        // params:{
        //     province
        // }
    })
}export function getall006(){
    return request({
        url: '/all006',
        method: 'GET',
        // params:{
        //     province
        // }
    })
}export function getall007(){
    return request({
        url: '/all007',
        method: 'GET',
        // params:{
        //     province
        // }
    })
}export function getall008(){
    return request({
        url: '/all008',
        method: 'GET',
        // params:{
        //     province
        // }
    })
}
export function getall009(){
    return request({
        url: '/all009',
        method: 'GET',
        // params:{
        //     province
        // }
    })
}
export function getall010(){
    return request({
        url: '/all010',
        method: 'GET',
        // params:{
        //     province
        // }
    })
}
export function getall011(){
    return request({
        url: '/all011',
        method: 'GET',
        // params:{
        //     province
        // }
    })
}
export function getall012(){
    return request({
        url: '/all012',
        method: 'GET',
        // params:{
        //     province
        // }
    })
}
export function getall013(){
    return request({
        url: '/all013',
        method: 'GET',
        // params:{
        //     province
        // }
    })
}
export function getall014(){
    return request({
        url: '/all014',
        method: 'GET',
        // params:{
        //     province
        // }
    })
}
export function getall015(){
    return request({
        url: '/all015',
        method: 'GET',
        // params:{
        //     province
        // }
    })
}
export function getall016(){
    return request({
        url: '/all016',
        method: 'GET',
        // params:{
        //     province
        // }
    })
}
export function getall017(){
    return request({
        url: '/all017',
        method: 'GET',
        // params:{
        //     province
        // }
    })
}
export function getAllProvince(){
    return request({
        url:"/select_province",
        method: "GET",
        params:{
        }
    })
}
export function getProvinceData(province){
    return request({
        url: '/huahua',
        method: 'GET',
        params:{
            province
        }
    })
}
export function getProvinceWorkData(province){
    return request({
        url:"/bbb",
        method:"GET",
        params:{
            province
        }
    })
}




