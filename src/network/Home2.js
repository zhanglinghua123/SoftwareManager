import {request} from "@/network/request"
export function getall001() {
    return request({
        url: '/allying001',
        method:'GET',
        // params: {
        //     // province,
        // },
    })
}
export function getall002() {
    return request({
        url: '/allying002',
        method:'GET',
        // params: {
        //     // province,
        // },
    })
}
export function getall003() {
    return request({
        url: '/allying003',
        method:'GET',
        // params: {
        //     // province,
        // },
    })
}
export function getall004() {
    return request({
        url: '/allying004',
        method:'GET',
        // params: {
        //     // province,
        // },
    })
}

export function getEnterpriseWealthByProvinceUK(province){
    return request({
        url: '/provinceying001',
        method: 'GET',
        params: {
            province
        }
    })
}

export function getEnterpriseNumByProvinceUK(province){
    return request({
        url: '/provinceying002',
        method: 'GET',
        params: {
            province
        }
    })
}

export function getLQByProvinceUK(province){
    return request({
        url: '/provinceying003',
        method: 'GET',
        params: {
            province
        }
    })
}

export function getEmployeeByProvinceUK(province){
    return request({
        url: '/provinceying004',
        method: 'GET',
        params: {
            province
        }
    })
}