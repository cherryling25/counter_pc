<template>
  <div id="counter">
    <el-row>
      <el-col :span="4">
        <div class="grid-content gridWrap">
          <div class="divwrap">
            <img
              class="gridImg"
              src="../assets/images/total.png"
              alt=""
              srcset=""
            />
            <div style="displa:flex;justify-content: space-between;">
              <div class="gridNumber">1248</div>
              <div class="gridName">项目总数</div>
            </div>
          </div>
        </div>
      </el-col>

      <el-col :span="4">
        <div class="grid-content gridWrap">
          <div class="divwrap">
            <img
              class="gridImg"
              src="../assets/images/finish.png"
              alt=""
              srcset=""
            />
            <div style="displa:flex;justify-content: space-between;">
              <div class="gridNumber">1248</div>
              <div class="gridName">已完成</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="4"
        ><div class="grid-content gridWrap">
          <div class="divwrap">
            <img
              class="gridImg"
              src="../assets/images/pause.png"
              alt=""
              srcset=""
            />
            <div style="displa:flex;justify-content: space-between;">
              <div class="gridNumber">1248</div>
              <div class="gridName">暂停中</div>
            </div>
          </div>
        </div></el-col
      >
    </el-row>

    <el-container
      class="table"
      style="margin-top: 30px;margin-left: 8px;border-radius: 4px;"
    >
      <div class="wrap">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>项目名称</span>
            <el-progress
              style="float: right; padding: 3px 0"
              type="circle"
              :percentage="80"
              :width="60"
            ></el-progress>
            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
          </div>
          <div class="text item">
            <div>需生产：100</div>
            <div style="margin-top:10px;">已加料： 22包</div>
            <div style="margin-top:10px; color:gray">
              创建时间： 2020-06-15 19：05
            </div>
          </div>
          <!-- <div style="background:rgb(94,206,191)"> -->
          <div>
            <el-button
              type="primary"
              round
              size="medium"
              @click="dialogFormVisible = true"
              >加料</el-button
            >
            <el-button type="success" round size="medium">暂停</el-button>
            <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">加料</el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small">暂停</el-button> -->
            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
          </div>
        </el-card>
        <el-dialog
          title="原料添加"
          :visible.sync="dialogFormVisible"
          :modal-append-to-body="false"
        >
          <el-form :model="dialogForm">
            <el-form-item label="公司名称:" label-width="100px">
              <el-input v-model="dialogForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="联系电话:" label-width="100px">
              <el-input
                v-model="dialogForm.number"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="原料名称:" label-width="100px">
              <el-input v-model="dialogForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="型号:" label-width="100px">
              <el-input
                v-model="dialogForm.number"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="品牌:" label-width="100px">
              <el-input v-model="dialogForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="重量:" label-width="100px">
              <el-input
                v-model="dialogForm.number"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="单位:" label-width="100px">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false"
              >确 定</el-button
            >
          </div>
        </el-dialog>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "counter",
  data() {
    return {
      dialogFormVisible: false,
      dialogForm: {
        name: "",
        number: ""
      },

      options: [
        {
          value: "选项1",
          label: "斤"
        },
        {
          value: "选项2",
          label: "两"
        }
      ],
      value: "",

      form: {
        orderType: "",
        typeOptions: [],

        orderState: "",
        stateOptions: [],

        shop: "",
        shopOptions: [],

        orderId: "",
        nickName: "",
        startTime: "",
        endTime: "",
        orderNumber: "",
        taskId: ""
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
          time: "2016-05-02"
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
          time: "2016-05-02"
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
          time: "2016-05-02"
        }
      ]
    };
  },
  methods: {
    mockedData() {
      const options = [
        {
          value: 1,
          label: "A"
        },
        {
          value: 2,
          label: "B"
        }
      ];
      this.form.typeOptions = options;
      this.form.stateOptions = options;
      this.form.shopOptions = options;
    },
    onSubmit() {
      console.log("submit!");
    },
    onExport() {
      console.log("export!");
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    // 表头样式设置
    headClass() {
      return "background:#eef1f6;";
    },
    showData() {
      const url = "";

      //   axios.get(url, {})
      //     .then(response => {
      //         let typeOptions = new Array();
      //         let options1 = new Array();
      //         let options2 = new Array();
      //         for(var i=0;i < reponse.length;i++) {
      //           let option = {
      //             value : reponse[i].custId,
      //             label : reponse[i].label
      //           }
      //           options.push(option);
      //         }

      //         for(var i=0;i < reponse.length;i++) {
      //           let option = {
      //             value : reponse[i].custId,
      //             label : reponse[i].label
      //           }
      //           options1.push(option);
      //         }

      //         for(var i=0;i < reponse.length;i++) {
      //           let option = {
      //             value : reponse[i].custId,
      //             label : reponse[i].label
      //           }
      //           options2.push(option);
      //         }
      //         this.form.typeOptions = options;
      //     })
      //     .catch(error => {

      //     });
    }
  },
  mounted() {
    // this.mockedData();
    this.showData();
  },
  components: {}
};
</script>

<style scoped>
.gridWrap {
  display: flex;
  margin-left: 30px;
  margin-top: 30px;
  border: 1px solid rgb(211, 210, 210);
  height: 100px;
  background: white;
}
.gridWrap .gridImg {
  width: 45px;
  height: 45px;
  margin-right: 20px;
}
.divwrap {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  line-height: 20px;
}
.gridNumber {
  font-size: 25px;
}
.gridName {
  margin-top: 5px;
  color: gray;
}

/* 卡片 */
.el-container {
  width: 95%;
}
.wrap {
  /* display: flex;
  justify-content: space-around; */
  margin-left: 20px;
  width: 95%;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 460px;
}
</style>
