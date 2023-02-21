import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.45/vue.esm-browser.min.js"
//console.log(createApp)

const app = {
    data() {
        return {
            user: {
                username: '',  // 取得email欄位的值
                password: '',  // 取得password欄位的值
            },
            url: 'https://vue3-course-api.hexschool.io/v2/',  // 設定站點變數
            path: 'kris-api'  // 設定路徑變數
        }
    },
    methods: {
        loginBtn() {
            axios.post(`${this.url}admin/signin`, this.user)
                .then((res) => {
                    console.log(res);

                    // 取出 token
                    const { token, expired } = res.data;
                    // console.log(token);

                    // 將 token 和 expired 存到 cookie 裡
                    document.cookie = `krisToken=${token}; expires=${new Date(expired)};`;

                    // axios.defaults.headers.common['Authorization'] = token; 也可以寫在這邊，在第一次登入成功後就先將 token 先存到 cookie 裡 (此為寫在登入成功時)


                    window.location = 'products.html';
                })
                .catch((err) => {
                    alert(`${err.data.message}`)
                })
        }

    },
    // mounted() {
    
    // }
}



createApp(app).mount('#app')