<style src="./index.less" lang="less" scoped></style>
<template>
  <section class="page">
    <el-container>
      <el-header>
        <ul>
          <li>页面1</li>
          <li>页面2</li>
          <li>页面3</li>
          <li>页面4</li>
          <li>页面...</li>
          <li>页面n</li>
          <li>页面nn</li>
        </ul>
        <el-tooltip class="admin-entry" effect="dark" content="admin后台入口" placement="bottom-end">
          <el-button size="small" type="primary" icon="el-icon-edit" @click="$router.push('/admin')"></el-button>
        </el-tooltip>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
    <!--introduce-->
    <h1 class="mark">前台</h1>
  </section>
</template>
<script src="./index.js"></script>


