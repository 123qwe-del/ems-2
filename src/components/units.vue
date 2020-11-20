
<template>
  <center>
    <div id="qq">
    <el-container>
      <el-header>Header</el-header>
      <el-main>

          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="ID">
              <el-input v-model="form.id" :disabled="true"></el-input>
              <!--        <el-input v-model="form.id"></el-input>-->
            </el-form-item>
            <el-form-item label="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="salary">
              <el-input v-model="form.salary"></el-input>
            </el-form-item>
            <el-form-item label="age">
              <el-input v-model="form.age"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button @click="exit">取消</el-button>
            </el-form-item>
          </el-form>

      </el-main>
    </el-container>
    </div>
</center>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        id: '',
        salary: '',
        age: '',
      }
    }
  },
  created() {//设置回显
    if (this.$store.state.status === 'update'){
      console.log(412543424)
      let obj = this.$route.query.obj
      console.log(obj)
      this.form.id =obj.id
      this.form.name =obj.name
      this.form.salary =obj.salary
      this.form.age =obj.age
    }
  },
  methods: {
    exit:function(){
      this.$router.push({
        name:'Home'
      })
    },
    onSubmit() {
      console.log('submit!');
      let val = {
        id: this.form.id,
        name: this.form.name,
        salary: this.form.salary,
        age: this.form.age,
      }
      if (this.$store.state.status==='add'){
        console.log(222222)
        this.$store.commit('collect',val)
        this.$router.push({
          path:'/'
        })
      }else if (this.$store.state.status==='update'){
        this.$store.commit('update1',val)
        console.log(val)
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
#qq{
  width: 600px;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>