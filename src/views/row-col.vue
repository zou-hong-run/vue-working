<template>
  <div class="rol">
    <Row :gutter="10">
      <Col span="12" />
      <Col span="12" />
    </Row>
    <Row :gutter="10">
      <i-col span="12" />
      <i-col span="12" />
    </Row>
    <Row :gutter="3">
      <i-col span="3" />
      <i-col span="3" />
      <i-col span="3" />
      <i-col span="3" />
      <i-col span="3" />
      <i-col span="3" />
      <i-col span="3" />
      <i-col span="3" />
    </Row>
    <Row :gutter="20">
      <i-col
        span="4"
        push="0"
      >
        <div>1</div>
      </i-col>
      <i-col span="4">
        <div>2</div>
      </i-col>
      <i-col span="4">
        <div>3</div>
      </i-col>
      <i-col span="4">
        <div>4</div>
      </i-col>
      <i-col span="4">
        <div>5</div>
      </i-col>
      <i-col span="4">
        <div>6</div>
      </i-col>
    </Row>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less">
  .rol {
    .ivu-col {
      height: 50px;
      margin-top: 10px;
      background-color: pink;
      background-clip: content-box;
    }
  }
</style>
