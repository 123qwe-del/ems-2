<template>
  <div class="home">
    <el-container >
      <el-header>员工管理系统</el-header>
      <el-main>
        <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            max-height="450"
            style="width: 100%">
          <el-table-column
              label="ID"
              prop="id">
          </el-table-column>
          <el-table-column
              label="Head"
              prop="head">
          </el-table-column>
          <el-table-column
              label="Name"
              prop="name">
          </el-table-column>
          <el-table-column
              label="Salary"
              prop="salary">
          </el-table-column>
          <el-table-column label="Age" prop="age">
          </el-table-column>
          <el-table-column label="Operation" prop="age">
          </el-table-column>
          <el-table-column align="right">
            <template slot="header" slot-scope="">
              <el-tooltip content="增加员工" placement="bottom" effect="dark">
                <el-button type="success" icon="el-icon-plus" circle size="small" @click="add"></el-button>
              </el-tooltip>
            </template>
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
              <template>
                <el-button size="mini" type="danger" :plain="true" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
              </template>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
      <el-footer>@备案号：110110110110</el-footer>
    </el-container>
  </div>
</template>
<style scoped>
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
div{
  height: 50%;
  width: auto;
}
</style>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  created:function () {
    if (localStorage.getItem("users")){
      console.log('存在')
    }else{
      localStorage.setItem('users',JSON.stringify([]))
      localStorage.setItem('number',0)
    }
  },
  data() {
      return {
        tableData: JSON.parse(localStorage.getItem('users')),
        // tableData: [],
        search: ''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log('*******************************')
        this.$router.push({
          path:'/update',
          query:{
            obj:row
          }
        })
      },
      handleDelete(index, row) {
        console.log(index, row);
        let users = JSON.parse(localStorage.getItem('users'))
        users.splice(index,1)
        localStorage.setItem('users',JSON.stringify(users))
        this.tableData.splice(index,1)
        this.$message({
          message: '删除成功',
          type: 'success'
        });
      },
      add(){
        this.$router.push('/about')
      }
    },
}
</script>

