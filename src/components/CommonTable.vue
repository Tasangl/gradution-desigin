<template>
  <div class="CommonTable">
    <el-table :data="tableData" height="90%" stripe="">
      <el-table-column
        :width="item.width ? item.width : 125 "
        show-overflow-tooltip
        v-for="item in tableLabel"
        :key="item.prop"
        :label="item.label"
      >
      <template slot-scope="scope">
        <span style="margin-left:10px">{{scope.row[item.prop]}}</span>
      </template>
      </el-table-column>
      <el-table-column label="操作" min-width="180px">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" @click="handleDelete(scope.row)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'CommonTable',
  data () {
    return {}
  },
  props: {
    tableData: Array,
    tableLabel: Array
  },
  methods: {
    handleEdit () {

    },
    handleDelete () {

    }
  }
}
</script>

<style>
</style>
