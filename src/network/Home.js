import {request} from "@/network/request"
export function getProvinceData(province) {
    return request({
        url: '/user/list/commit',
        method:'POST',
        params: {
            province,
        },
        // headers: {'content-type': 'application/x-www-form-urlencoded'}
    })
}
export function getYearData(year) {
    return request({
        url:"",
        method:"",
        params:{

        },
    })

}