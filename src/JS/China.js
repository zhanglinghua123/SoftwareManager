import {getProvinceWorkData} from "../network/Home";
export async function getWorkData(province){
    let array = {
        "安徽":["马鞍山","合肥"],
        "山东":["青岛","济南","山东"],
        "湖南":["长沙","湖南长沙"],
        "河南":["郑州"],
        "陕西":["西安",],
        "浙江":["苏州","杭州"],
        "福建":["福州","厦门"],
        "江苏":["常州","南京","江苏南京","无锡"],
        "四川":["成都"],
        "广东":["广州"],
        "辽宁":["大连"],
        "北京":["北京"],
        "上海":["上海"],
    }
    let dataArray = array[province]
    let rs = []
    if(dataArray == undefined) return []
    for(let item of dataArray)
    {
      let middle = (await getProvinceWorkData(item))
        console.log(middle)
      rs = rs.concat(middle.data)
    }
    console.log(rs)
    return rs
}