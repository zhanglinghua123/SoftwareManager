import {request} from "@/network/request"
export function getall001() {
    return request({
        url: '/allmei001',
        method:'GET',
        // params: {
        //     // province,
        // },
    })
}
export function getall002() {
    return request({
        url: '/allmei002',
        method:'GET',
        // params: {
        //     // province,
        // },
    })
}
export function getall003() {
    return request({
        url: '/allmei003',
        method:'GET',
        // params: {
        //     // province,
        // },
    })
}
export function getall004() {
    return request({
        url: '/allmei004',
        method:'GET',
        // params: {
        //     // province,
        // },
    })
}

export function getEmployeeByProvinceUSA(province){
    return request({
        url: '/provincemei001',
        method: 'GET',
        params: {
            province
        }
    })
}

export function getMoneyByProvinceUSA(province){
    return request({
        url: '/provincemei002',
        method: 'GET',
        params: {
            province
        }
    })
}

export function getTaxByProvinceUSA(province){
    return request({
        url: '/provincemei003',
        method: 'GET',
        params: {
            province
        }
    })
}

export function getGDPByProvinceUSA(province){
    return request({
        url: '/provincemei004',
        method: 'GET',
        params: {
            province
        }
    })
}