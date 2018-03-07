<template>
  <div class="container">
    <header class="header">
      <div class="header-logo">GUANDIAN</div>
      <md-tabs class="md-primary" md-alignment="fixed">
        <md-tab id="tab-attention" md-label="关注"></md-tab>
        <md-tab id="tab-hot" md-label="热点"></md-tab>
      </md-tabs>
    </header>
    <div class="content">
        <md-list class="md-triple-line">
          <md-list-item>
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/1" alt="People">
            </md-avatar>

            <div class="md-list-item-text">
              <span>Ali Connors</span>
              <span>Brunch this weekend?</span>
              <p>I'll be in your neighborhood doing errands this week. Do you want to meet?</p>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon class="md-primary">star</md-icon>
            </md-button>
          </md-list-item>

          <md-divider class="md-inset"></md-divider>

          <md-list-item>
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/6" alt="People">
            </md-avatar>

            <div class="md-list-item-text">
              <span>me, Scott, Jennifer</span>
              <span>Summer BBQ</span>
              <p>Wish I could come, but I'm out of town this week. :(</p>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon>star_border</md-icon>
            </md-button>
          </md-list-item>

          <md-divider class="md-inset"></md-divider>

          <md-list-item>
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/5" alt="People">
            </md-avatar>

            <div class="md-list-item-text">
              <span>Sandra Adams</span>
              <span>Oui oui</span>
              <p>Do you have Paris recommendations? Have you visited good places?</p>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon>star_border</md-icon>
            </md-button>
          </md-list-item>

          <md-divider class="md-inset"></md-divider>

          <md-list-item>
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/8" alt="People">
            </md-avatar>

            <div class="md-list-item-text">
              <span>Trevor Hansen</span>
              <span>Order confirmation</span>
              <p>Thank you for your recent order from Amazon</p>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon>star_border</md-icon>
            </md-button>
          </md-list-item>
          <md-list-item>
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/8" alt="People">
            </md-avatar>

            <div class="md-list-item-text">
              <span>Trevor Hansen</span>
              <span>Order confirmation</span>
              <p>Thank you for your recent order from Amazon</p>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon>star_border</md-icon>
            </md-button>
          </md-list-item>
          <md-list-item>
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/8" alt="People">
            </md-avatar>

            <div class="md-list-item-text">
              <span>Trevor Hansen</span>
              <span>Order confirmation</span>
              <p>Thank you for your recent order from Amazon</p>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon>star_border</md-icon>
            </md-button>
          </md-list-item>
          <md-list-item>
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/8" alt="People">
            </md-avatar>

            <div class="md-list-item-text">
              <span>Trevor Hansen</span>
              <span>Order confirmation</span>
              <p>Thank you for your recent order from Amazon</p>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon>star_border</md-icon>
            </md-button>
          </md-list-item>
          <md-list-item>
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/8" alt="People">
            </md-avatar>

            <div class="md-list-item-text">
              <span>Trevor Hansen</span>
              <span>Order confirmation</span>
              <p>Thank you for your recent order from Amazon</p>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon>star_border</md-icon>
            </md-button>
          </md-list-item>
        </md-list>
    </div>
    <div class="phone-viewport">
      <md-bottom-bar md-type="shift">
        <md-bottom-bar-item id="bottom-bar-item-home" md-label="首页" md-icon="1"></md-bottom-bar-item>
        <md-bottom-bar-item id="bottom-bar-item-pages" md-label="想法" md-icon="2"></md-bottom-bar-item>
        <md-bottom-bar-item id="bottom-bar-item-posts" md-label="通知" md-icon="3"></md-bottom-bar-item>
        <md-bottom-bar-item id="bottom-bar-item-favorites" md-label="我的" md-icon="4"></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    position: fixed;
    top:0;
    width:100%;
    height:100px;
    z-index: 11;
  }
  .header-logo{
    height:50px;
    background-color: #448aff;
    font-size: 24px;
    color:#fff;
    line-height: 50px;
    padding-left:20px;
  }
  .tab-button{
    flex-grow:1;
  }
  #tab-attention{
    flex-grow:1;
  }
  .content{
    margin-top:100px;
  }
  .phone-viewport {
    position: fixed;
    bottom:0;
    width:100%;
    hright:50px;
    display: inline-flex;
    align-items: flex-end;
    overflow: hidden;
    z-index: 11;
  }
</style>
