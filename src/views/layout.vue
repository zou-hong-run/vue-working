<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider
        v-model="collapsed"
        shadow
        collapsible
        hide-trigger
      >
        <side-menu
          :list="menuList"
          :collapsed="collapsed"
        />
      </Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon
            :class="triggerClasses"
            type="md-menu"
            :size="32"
            @click.native="handleChange"
          />
        </Header>
        <Content class="contet-con">
          <Card class="page-card">
            <router-view />
          </Card>
        </Content>
        <Footer class="layout-footer-center">
          2011-2016 &copy; REDRUN
        </Footer>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import SideMenu from '_c/side-menu'
export default {
  name: 'Layouts',
  components: {
    SideMenu
  },
  data () {
    return {
      collapsed: false,
      menuList: [
        {
          title: '1',
          name: '1',
          icon: 'ios-boat-outline'
        },
        {
          title: '2',
          name: '2',
          icon: 'ios-boat-outline'
        },
        {
          title: '3',
          name: '3',
          icon: 'md-body',
          children: [
            {
              title: '3-1',
              name: '3-1',
              icon: 'ios-boat-outline'
            },
            {
              title: '3-2',
              name: '3-2',
              icon: 'ios-boat-outline',
              children: [
                {
                  title: '3-2-1',
                  name: '3-2-1',
                  icon: 'ios-boat-outline'
                },
                {
                  title: '3-2-2',
                  name: '3-2-2',
                  icon: 'ios-boat-outline'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {
    triggerClasses () {
      return [
        'trigger-icon',
        this.collapsed ? 'trigger-icon-rotate' : ''
      ]
    }
  },
  methods: {
    handleChange () {
      console.log(this.triggerClasses)
      this.collapsed = !this.collapsed
    }
  }
}
</script>
<style lang="less">
  .layout-wrapper, .layout-outer{
    height: 100%;
    border: 1px solid black;
    .header-wrapper {
      background-color: #fff;
      box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
      padding: 0 23px;
      .trigger-icon{
        cursor: pointer;
        transition: transform .3s ease;
        &-rotate{
          transform: rotateZ(-90deg);
          transition: transform .3s ease;
        }
      }
    }
    .contet-con{
      padding: 10px;
    }
    .page-card {
      min-height: ~"calc(100vh - 114px)";
    }
    .layout-footer-center{
      height: 30px;
      text-align: center;
      background-color: #fff;
      box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
    }
  }
</style>
