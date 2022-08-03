<template>
  <div class="common-layout">
    <el-container>
      <el-header class="bg-light-400 flex items-center">
        <div class="title font-bold text-3xl text-sky-700"> 玉殿 </div>
      </el-header>
      <el-main>
        <div class="search flex items-center justify-start">
          <el-input style="width: 220px" v-model="yd_token" :placeholder="yd_token_txt" clearable />
          <el-input style="width: 150px" v-model="sell_uid" :placeholder="sell_uid_txt" clearable />
          <el-date-picker class="mr-5" v-model="day" type="date" placeholder="" :disabled-date="disabledDate" :shortcuts="shortcuts" />
          <el-button type="primary" :loading="loading" @click="searchClick">查询</el-button>
        </div>
        <div class="list mt-5">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="orderid" label="订单ID" width="220" />
            <el-table-column prop="sell_uid" label="卖家详情"
              ><template #default="scope">
                <el-popover effect="light" trigger="hover" placement="top" width="auto">
                  <template #default>
                    <div>姓名: {{ scope.row.sell_member_info.realname }}</div>
                    <div>昵称: {{ scope.row.sell_member_info.nickname }}</div>
                    <div>手机号: {{ scope.row.sell_member_info.phone }}</div>
                  </template>
                  <template #reference>
                    <el-tag>{{ scope.row.sell_member_info.realname }}</el-tag>
                  </template>
                </el-popover>
              </template></el-table-column
            >
            <el-table-column prop="buy_uid" label="买家详情">
              <template #default="scope">
                <el-popover effect="light" trigger="hover" placement="top" width="auto">
                  <template #default>
                    <div>姓名: {{ scope.row.buy_memb_info.realname }}</div>
                    <div>昵称: {{ scope.row.buy_memb_info.nickname }}</div>
                    <div>手机号: {{ scope.row.buy_memb_info.phone }}</div>
                  </template>
                  <template #reference>
                    <el-tag>{{ scope.row.buy_memb_info.realname }}</el-tag>
                  </template>
                </el-popover>
              </template></el-table-column
            >
            <el-table-column prop="price" label="价格" />
            <el-table-column prop="item_id" label="item_id" />
            <el-table-column prop="auction_id" label="auction_id" />
            <el-table-column prop="proto_id" label="proto_id" />
            <el-table-column prop="order_status" label="订单状态" />
            <el-table-column prop="pay_image" label="付款照片">
              <template #default="scope">
                <!-- {{ scope.row }} -->
                <a :href="scope.row.pay_image" target="_blank" rel="noopener noreferrer">
                  <el-image class="w-8 h-8" :src="scope.row.pay_image" lazy />
                </a>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
  // @ts-nocheck
  import axios from 'axios';
  import dayjs from 'dayjs';
  import { ref, onMounted } from 'vue';
  const yd_token_txt = '请联系 柴智 或者 孙立军 录入';
  const sell_uid_txt = '请输入卖家用户id';
  const day_txt = '请选择日期';
  const yd_token = ref('');
  const sell_uid = ref('');
  const day = ref('');
  const loading = ref(false);

  day.value = dayjs().format('YYYYMMDD');
  const shortcuts = [
    {
      text: 'Today',
      value: new Date(),
    },
  ];
  const disabledDate = (time: Date) => {
    return time.getTime() > Date.now();
  };

  const searchClick = async () => {
    if (yd_token.value === '') {
      ElMessage({
        message: yd_token_txt,
        type: 'warning',
      });
      return;
    }
    if (day.value === '') {
      ElMessage({
        message: day_txt,
        type: 'warning',
      });
      return;
    }
    orderListr();
  };
  const tableData = ref([]);

  const orderListr = () => {
    const convetDay = dayjs(day.value).format('YYYYMMDD');
    // const convetDay = 20220729;
    // sell_uid.value = '1246';
    let url = `http://82.157.167.161:8088/admin/order/info-list?day=${convetDay}&page=0&count=1000`;
    if (sell_uid.value) {
      url += `&sell_uid=${sell_uid.value}`;
    }
    loading.value = true;
    axios
      .get(url, {
        // params: data, //附带参数
        headers: { 'yd-token': yd_token.value }, //设置header信息
        // headers: { 'yd-token': '2da9370c2a4a0ec9768780f0cfe559fd0e3226da16dc1acf2ea88c72f8edfedf' },
      })
      .then((res) => {
        console.log('获取到信息', res.data.data);
        if (res.data.data.total === 0) {
          ElMessage({
            message: '暂无数据',
            type: 'warning',
          });
        }
        // @ts-ignore
        tableData.value = [...res.data.data.items];
        loading.value = false;
      })
      .catch((err) => {
        //catch 失败
        console.log('获取信息失败', err);
        ElMessage({
          message: '获取信息失败',
          type: 'warning',
        });
        loading.value = false;
      });
  };
  onMounted(() => {
    console.log('onMounted');
  });
</script>

<style lang="less" scoped>
  .search > * {
    margin-right: 20px;
  }
</style>
