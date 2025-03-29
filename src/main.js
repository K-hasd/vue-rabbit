

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core'


import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


// 定义全局指令
app.directive('img-lazy', {
    mounted(el, binding) {
        // el:指令所在的元素 img
        // binding:binding.value 指令等于后面绑定的表达式的值 图片url
        console.log(el,binding.value);
        useIntersectionObserver(
            el,
            ([entry]) => {
              console.log(entry.isIntersecting);
              if (entry.isIntersecting) {
                // 进入视口区域
                el.src = binding.value
              }
            },
          )
    }
})