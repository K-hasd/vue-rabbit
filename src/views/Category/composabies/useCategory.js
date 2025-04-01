// 封装分类数据业务相关代码
import { getCategoryAPI } from '@/apis/category'
import { ref, onMounted ,watch} from 'vue'
import { useRoute } from 'vue-router';
import { onBeforeRouteUpdate } from 'vue-router';
export function useCategory() {
    //获取数据
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }

    // watch(
    //   () => route.params.id,
    //   (newID) => {
    //     getCategory();
    //   },
    //   { immediate: true } // 初始化时立即执行一次
    // );

    onMounted(() => {
        getCategory() 
    })


    //  目标：路由参数变化的时候，可以把分类数据接口重新发送
    onBeforeRouteUpdate((to) => {
    console.log("路由变化了");
    getCategory(to.params.id)
    })
    return {
        categoryData
    }
}