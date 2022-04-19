<template>
  <div class="manage">
    <el-dialog
      :title="operateType === 'add'? '新增用户' : '更新用户'"
      :visible.sync="isShow"
    >
      <CommonForm
        :formLabel="operateFormLabel"
        :form="operateForm"
        :inline="true"
        ref="form"
      ></CommonForm>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="addUser">+ 新增</el-button>
      <CommonForm
        :formLabel="formLabel"
        :form="searchForm"
        :inline="true"
        ref="form"
      >
        <el-button type="primary" @click="getList(searchForm.keyword)">搜索</el-button>
      </CommonForm>
    </div>
    <CommonTable
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @changePage="getList()"
      @edit="editUser"
      @del="delUser"
    ></CommonTable>
  </div>
</template>

<script>
import CommonForm from '../../components/CommonForm.vue'
import CommonTable from '../../components/CommonTable.vue'
import { getUser } from '../../../api/data'
export default {
  name: 'userTable',
  components: {
    CommonForm,
    CommonTable
  },
  data () {
    return {
      operateType: 'add',
      isShow: false,
      operateFormLabel: [
        {
          model: 'name',
          label: '姓名',
          type: 'input'
        },
        {
          model: 'age',
          label: '年龄',
          type: 'input'
        },
        {
          model: 'sex',
          label: '性别',
          type: 'select',
          opts: [
            {
              label: '男',
              value: 1
            },
            {
              label: '女',
              value: 0
            }
          ]
        },
        {
          model: 'birth',
          label: '出生日期',
          type: 'date'
        },
        {
          model: 'addr',
          label: '地址',
          type: 'input'
        }
      ],
      operateForm: {
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: ''
      },
      formLabel: [
        {
          model: 'keyword',
          label: '',
          type: 'input'
        }
      ],
      searchForm: {
        keyword: ''
      },
      tableData: [],
      tableLabel: [
        {
          prop: 'name',
          label: '姓名'
        },
        {
          prop: 'age',
          label: '年龄'
        },
        {
          prop: 'sexLabel',
          label: '性别'
        },
        {
          prop: 'birth',
          label: '出生日期',
          width: 200
        },
        {
          prop: 'addr',
          label: '地址',
          width: 320
        }
      ],
      config: {
        page: 1,
        total: 30
      }
    }
  },
  methods: {
    confirm () {
      // 判断弹窗状态
      if (this.operateType === 'edit') {
        this.axios.post('/user/edit', this.operateForm).then(res => {
          console.log(res)
          this.isShow = false
          this.getList()
        })
      } else {
        this.axios.post('/user/add', this.operateForm).then(res => {
          console.log(res)
          this.isShow = false
          this.getList()
        })
      }
    },
    addUser () {
      this.isShow = true
      this.operateType = 'add'
      this.operateForm = {
        name: '',
        addr: '',
        age: '',
        birth: '',
        sex: ''
      }
    },
    getList (name = '') {
      // 获取数据前获取loading
      this.config.loading = true
      // eslint-disable-next-line no-unused-expressions
      name ? (this.config.page = 1) : ''
      getUser({
        page: this.config.page,
        name
      }).then(({ data: res }) => {
        this.tableData = res.list.map(item => {
          item.sexLabel = item.sex === 0 ? '女' : '男'
          return item
        })
        this.config.total = res.count
        this.config.loading = true
      })
    },
    editUser (row) {
      this.operateType = 'edit'
      this.isShow = true
      console.log(row)
      this.operateForm = JSON.parse(JSON.stringify(row))
    },
    delUser (row) {
      this.$confirm('此操作不可逆，是否继续', '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const id = row.id
        this.axios.post('user/del', {
          id: id
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.getList()
        })
      })
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style lang="less" scoped>
.manage-header {
  display: flex;
  justify-content:space-between;
  align-items:center;
}
</style>
