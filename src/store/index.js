import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{},
    form:{
      number:0,
      id:'',
      name:'',
      salary:'',
      age:'',
    },
    status:null
  },
  mutations: {
    fromUrl:function (state,status){
      state.status= status
      console.log(200000,state.status)
    },
    collect:function (state,val) {
      console.log('***************************')
        console.log(333333)
        // this.form = val
        // console.log(this.form,12222222222354164564656)
        let name = val.name
        let salary = val.salary
        let age = val.age
        let aaa = localStorage.getItem("users")
        console.log(aaa,444444,typeof aaa)
        let users = JSON.parse(aaa)
        let number = localStorage.getItem('number')
        console.log(users,name,age,salary,number,111111111111111111111111111111)
        number++
        localStorage.setItem('number',number)
        users.push({id:number,name:name,salary:salary,age:age})
        console.log(users)
        localStorage.setItem('users',JSON.stringify(users))
        console.log(users)
    },
    update1:function (state,val) {
      //跟新界面
      let res = JSON.parse(localStorage.getItem('users'))
      console.log(res)
      for (let i = 0; i < res.length; i++) {
        if (res[i].id===val.id){
          res[i]=val
          localStorage.setItem('users',JSON.stringify(res))
        }
      }
      // state.user =val
      // console.log(857857857857857857875)
    }
  }
})
