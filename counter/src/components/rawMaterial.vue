<template>
  <div id="rawMaterial">
    

    <el-container
      class="table"
      style="margin-top: 30px;margin-left: 30px;border-radius: 4px;"
    >
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        :inline="true"
        style="margin-top: 30px;"
      >
        <el-form-item style="margin-left:20px;">
          <el-input
            v-model="form.search"
            placeholder="请输入关键词"
            prefix-icon="el-icon-search"
          ></el-input>
        </el-form-item>

        <el-form-item label="手机号码">
          <el-input
            v-model="form.phone"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>

        <el-form-item label="原料名称">
          <el-input
            v-model="form.name"
            placeholder="请输入原料名"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="warning" @click="search">搜索</el-button>
          <el-button type="primary" @click="add">添加</el-button>
        </el-form-item>
      </el-form>

      <el-main>
        <el-table
          :data="tableData"
          :header-cell-style="headClass"
          stripe
          style="width: 100%"
        >
          <el-table-column prop="orderId" label="公司名称"> </el-table-column>

          <el-table-column prop="orderType" label="联系电话"> </el-table-column>

          <el-table-column prop="orderState" label="品牌">
          </el-table-column>

          <el-table-column prop="taskId" label="型号"> </el-table-column>

          <el-table-column prop="nickName" label="原料名称"> </el-table-column>

          <el-table-column prop="orderNumber" label="重量">
          </el-table-column>

          <el-table-column prop="money" label="单位"> </el-table-column>

          <el-table-column prop="commodityInfo" label="录入时间">
          </el-table-column>

          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button
                type="success"
                plain
                size="small"
              >
                编辑
              </el-button>

              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="danger"
                plain
                size="small"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>

      <el-footer>
        <el-pagination
          layout="total, sizes, prev, pager, next, jumper"
          :current-page="currentPage"
          :page-sizes="pageSizes"
          :page-size="PageSize"
          :total="totalCount"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";

export default {
  name: "rawMaterial",
  data() {
    return {
      totalCount: 0,
      // 默认显示第几页
      currentPage: 1,
      // 总条数，根据接口获取数据长度(注意：这里不能为空)
      totalCount: 10,
      // 个数选择器（可修改）
      pageSizes: [10],
      // 默认每页显示的条数（可修改）
      PageSize: 10,
      page: 1,
      size: 10,
      status: 0,

      form: {
        search: "",
        phone: "",
        name: ""
      },

      tableData: [
        {
          orderId: "1",
          orderType: "垫付",
          orderState: "状态",
          taskId: "78602",
          nickName: "昵称",
          orderNumber: "654567899",
          money: "34",
          commodityInfo: "商品信息",
          time: "2016-05-02",
        },
        {
          orderId: "2",
          orderType: "垫付",
          orderState: "状态",
          taskId: "78602",
          nickName: "昵称",
          orderNumber: "654567899",
          money: "34",
          commodityInfo: "商品信息",
          time: "2016-05-02",
        },
        {
          orderId: "3",
          orderType: "垫付",
          orderState: "状态",
          taskId: "78602",
          nickName: "昵称",
          orderNumber: "654567899",
          money: "34",
          commodityInfo: "商品信息",
          time: "2016-05-02",
        },
      ],
    };
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    search() {
      console.log("search!");
    },
    add() {
      console.log("add!");
    },
    // 表头样式设置
    headClass() {
      return "background:#eef1f6;";
    },
     // 加载列表
    showData(page,size) {
      axios({
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "post",
        data: Qs.stringify({
          user_id: this.GLOBAL.userId,
          state: 2,
          page:page,
          size:size
        }),

        url: this.GLOBAL.hostUrl5 + "hands/Order/dan_list"
      }).then(res => {
        console.log(res);
        this.tableData = res.data.data.list;
        this.totalCount = res.data.data.count;
      });
    }
  },
  mounted() {
    // this.showData(1,10);
  },
  components: {},
};
</script>

<style>

/* 表格 */
.table {
  background: white;
}
.table .el-footer {
  line-height: 60px;
  margin-top: 20px;
}
.table .el-main {
  color: #333;
  text-align: center;
}
.el-container {
  background: white;
  width: 95%;
  border: 1px solid rgb(209, 207, 207);
}
.table .el-table {
  border: 1px solid rgb(209, 207, 207);
}
</style>
