<template>
  <div>
    <h1>goods</h1>
    <a href="#/">Index Page</a>

    <div class="cart">
      <a href="javascript:;"></a>
    </div>

    <div class="goods-list">
      <div class="goods-item">
        <div>
          <img src="http://image.smartisanos.cn/resource/8a60167b445cc8a360077c099820c2fe.jpg" alt="Smartisan 记事本" lazy="loaded" width=130>
        </div>
        <h3>超级马里奥兄弟》面世</h3>
        <h5>坚果手机情怀背壳 第五期 · 1985.9.13</h5>
        <div>
          <div class="goods-btn">
            <m-button
            text="查看详情"
            style="margin: 0 5px"
          />
          <m-button
            text="加入购物车"
            classStyle="main-btn"
            style="margin: 0 5px"
          />
          </div>
          <p class="goods-price"><span>￥</span>49</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MButton from "/components/MButton";

export default {
  name: "goods",
  components: {
    MButton
  }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../assets/style/mixin";
@import "../../assets/style/theme";
 .cart {
  position: relative;
  float: right;
  margin-left: 21px;
  width: 61px;
  z-index: 99;
  a {
    &:before {
      content: " ";
      position: absolute;
      left: 8px;
      top: 0;
      @include wh(22px);
      background: url(/static/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png) 176px -344px;
      background-size: 240px 107px;
      transition: none;
    }
  }
}
.goods-list {
  background: #eee;
  padding: 10px;
  width: 1000px;
  margin: auto;

  .goods-item {
    width: 25%;
    padding: 30px 0;
    background: #fff;
    display: inline-block;
    text-align: center;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 1px 1px 20px #999;
      .goods-price {
        display: none;
      }
      .goods-btn {
        display: flex;
      }
    }
    .goods-btn {
      @extend %block-center;
      width: 100%;
      display: none;
    }
    h3 {
      font-size: 14px;
      font-weight: 400;
    }

    h5 {
      line-height: 30px;
      font-size: 10px;
      color: #d0d0d0;
      font-weight: 400;
    }

    .goods-price {
      font-size: 16px;
      line-height: 30px;
      color: #e4393c;
    }
  }
}
</style>

