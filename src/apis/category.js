import request from '@/utils/http.js'

export function getCategoryAPI(id) {
    return request({
        url:'/category',
        params:{
            id
        }
    })
}


/**
 * 获取二级分类列表数据
 */
export const getCategoryFilterAPI = (id) => {
    return request({
        url:'/category/sub/filter',
        params:{
            id
        }
    })
}