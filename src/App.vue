<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
   <Ttable
      :total="total"
      :current="current"
      :pageSize="pageSize"
      :parColumns="tableColumns"
      :parTableData="tableData"
      :pageSizeOpts="pageSizeOpts"
      @changePage="changePage"
      @changePageSize="changePageSize"
      style="margin-top: 15px;">
    </Ttable>
    <Thello msg="我是谁"/>
  </div>
</template>

<script>
import Ttable from './components/table/table.vue'
import Thello from './components/hello/hello.vue'

export default {
  name: 'app',
  components: {
    Ttable,
    Thello
  },
  data() {
    return{
      total: 20,
      current: 1,
      pageSize:10,
      pageSizeOpts: [],
      tableColumns:[
      {
          title: '姓名',
          key: 'name',
          ellipsis: true,
          fixed: 'left',
      },
        {
          title: '司机ID',
          key: 'driverNo',
          ellipsis: true,
        },
      {
          title: '手机号',
          key: 'mobile',
          ellipsis: true,
      },
      {
          title: '手机号1',
          key: 'mobile1',
          ellipsis: true,
      },
      {
          title: '手机号2',
          key: 'mobile',
          ellipsis: true,
      },
      {
          title: '手机号2',
          key: 'mobile',
          ellipsis: true,
      },
      {
          title: '手机号3',
          key: 'mobile3',
          ellipsis: true,
      },
      {
          title: '手机号4',
          key: 'mobile4',
          ellipsis: true,
      },
      {
          title: '手机号5',
          key: 'mobile5',
          ellipsis: true,
      },
      ],
      tableData: [
        {
          name: '王振宇',
          driverNo: "20",
          mobile: '18860232639',
          mobile1: '18860232639',
          mobile2: '18860232639',
          mobile3: '18860232639',
          mobile4: '18860232639',
          mobile5: '18860232639',
        },{
          name: '王振宇',
          driverNo: "20",
          mobile: '18860232639',
          mobile1: '18860232639',
          mobile2: '18860232639',
          mobile3: '18860232639',
          mobile4: '18860232639',
          mobile5: '18860232639',
        },{
          name: '王振宇',
          driverNo: "20",
          mobile: '18860232639',
          mobile1: '18860232639',
          mobile2: '18860232639',
          mobile3: '18860232639',
          mobile4: '18860232639',
          mobile5: '18860232639',
        },{
          name: '王振宇',
          driverNo: "20",
          mobile: '18860232639',
          mobile1: '18860232639',
          mobile2: '18860232639',
          mobile3: '18860232639',
          mobile4: '18860232639',
          mobile5: '18860232639',
        },{
          name: '王振宇',
          driverNo: "20",
          mobile: '18860232639',
          mobile1: '18860232639',
          mobile2: '18860232639',
          mobile3: '18860232639',
          mobile4: '18860232639',
          mobile5: '18860232639',
        },{
          name: '王振宇',
          driverNo: "20",
          mobile: '18860232639',
          mobile1: '18860232639',
          mobile2: '18860232639',
          mobile3: '18860232639',
          mobile4: '18860232639',
          mobile5: '18860232639',
        },{
          name: '王振宇',
          driverNo: "20",
          mobile: '18860232639',
          mobile1: '18860232639',
          mobile2: '18860232639',
          mobile3: '18860232639',
          mobile4: '18860232639',
          mobile5: '18860232639188602326391886023263918860232639',
        },{
          name: '王振宇',
          driverNo: "20",
          mobile: '18860232639',
          mobile1: '18860232639',
          mobile2: '18860232639',
          mobile3: '18860232639',
          mobile4: '18860232639',
          mobile5: '18860232639',
        }
      ]
  }
  },
  methods:{
    changePage(){
    },
    changePageSize(){
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
