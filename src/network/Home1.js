import {request} from "@/network/request"
export function getall001() {
    return request({
        url: '/alle001',
        method:'GET',
        // params: {
        //     // province,
        // },
    })
}
export function getall002() {
    return request({
        url: '/alle002',
        method:'GET',
        // params: {
        //     // province,
        // },
    })
}
export function getall003() {
    return request({
        url: '/alle003',
        method:'GET',
        // params: {
        //     // province,
        // },
    })
}
export function getall004() {
    return request({
        url: '/alle004',
        method:'GET',
        // params: {
        //     // province,
        // },
    })
}

export function getInternetUserByProvinceRus(province){
    return request({
        url:'/provincee001',
        method: 'GET',
        params: {
            province
        }
    })
}

export function getWidthByProvinceRus(province){
    return request({
        url:'/provincee002',
        method: 'GET',
        params: {
            province
        }
    })
}

export function getMarketByProvinceRus(province){
    return request({
        url: '/provincee003',
        method: 'GET',
        params: {
            province
        }
    })
}

export function getMobileUserByProvinceRus(province){
    return request({
        url: '/provincee004',
        method: 'GET',
        params: {
            province
        }
    })
}