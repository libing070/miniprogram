// componets.js
import * as echarts from '../../pages/ec-canvas/echarts';
let chart = null;
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  /**
   * 组件的属性列表
   */
  properties: {
    title: {            // 属性名
      type: String,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '标题'     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    ec:{
      type:Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   * 私有数据,组件的初始数据
   * 可用于模版渲染
   */
  data: {
   selfData:"自定义组件加载图表1",
    charts: [{
      id: 'bar',
      name: '柱状图'
    }, {
      id: 'scatter',
      name: '散点图'
    }, {
      id: 'pie',
      name: '饼图'
    }, {
      id: 'line',
      name: '折线图'
    }, {
      id: 'funnel',
      name: '漏斗图'
    }, {
      id: 'gauge',
      name: '仪表盘'
    }, {
      id: 'k',
      name: 'K 线图'
    }, {
      id: 'radar',
      name: '雷达图'
    }, {
      id: 'heatmap',
      name: '热力图'
    }, {
      id: 'tree',
      name: '树图'
    }, {
      id: 'treemap',
      name: '矩形树图'
    }, {
      id: 'sunburst',
      name: '旭日图'
    }, {
      id: 'map',
      name: '地图'
    }, {
      id: 'graph',
      name: '关系图'
    }, {
      id: 'boxplot',
      name: '箱型图'
    }, {
      id: 'parallel',
      name: '平行坐标图'
    }, {
      id: 'sankey',
      name: '桑基图'
    }, {
      id: 'themeRiver',
      name: '主题河流图'
    }],
    chartsWithoutImg: [{
      id: 'lazyLoad',
      name: '延迟加载图表'
    }, {
      id: 'multiCharts',
      name: '一个页面中多个图表'
    }, {
      id: 'move',
      name: '页面不阻塞滚动'
    }, {
      id: 'saveCanvas',
      name: '保存 Canvas 到本地文件'
    }]
  },
     // 组件生命周期函数，在组件实例进入页面节点树时执行
  attached: function () {
    console.log('==========attached==========');
     var th=this;
     th.setData({
      selfData: "自定义组件加载图表2",
     })
      th.loadData();
  },
  /**
   * 组件的方法列表
   */
  methods: {
    loadData(){
      var th = this;
      setTimeout(function () {
        th.setData({
          selfData: "自定义组件加载图表三秒",
        })
      }, 3000);
    }
  }
})