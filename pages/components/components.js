// pages/components.js
import * as echarts from '../ec-canvas/echarts';

let chart = null;
function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    color: ['#37a2da', '#32c5e9', '#67e0e3'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      confine: true
    },
    legend: {
      data: ['热度', '正面', '负面']
    },
    grid: {
      left: 20,
      right: 20,
      bottom: 15,
      top: 40,
      containLabel: true
    },
    xAxis: [
      {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        }
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: ['汽车之家', '今日头条', '百度贴吧', '一点资讯', '微信', '微博', '知乎'],
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        }
      }
    ],
    series: [
      {
        name: '热度',
        type: 'bar',
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        data: [300, 270, 340, 344, 300, 320, 310],
        itemStyle: {
          // emphasis: {
          //   color: '#37a2da'
          // }
        }
      },
      {
        name: '正面',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true
          }
        },
        data: [120, 102, 141, 174, 190, 250, 220],
        itemStyle: {
          // emphasis: {
          //   color: '#32c5e9'
          // }
        }
      },
      {
        name: '负面',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'left'
          }
        },
        data: [-20, -32, -21, -34, -90, -130, -110],
        itemStyle: {
          // emphasis: {
          //   color: '#67e0e3'
          // }
        }
      }
    ]
  };

  chart.setOption(option);
  return chart;
}
Component({
options: {
  multipleSlots: true // 在组件定义时的选项中启用多slot支持
},
/**
 * 组件的属性列表
 * 用于组件自定义设置
 */
properties: {
  // 弹窗标题
  title: {            // 属性名
    type: String,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '标题'     // 属性初始值（可选），如果未指定则会根据类型选择一个
  },
  // 弹窗内容
  content: {
    type: String,
      value : '弹窗内容'
  },
  // 弹窗取消按钮文字
  cancelText: {
    type: String,
      value : '取消'
  },
  // 弹窗确认按钮文字
  confirmText: {
    type: String,
      value : '确定'
  }
},

/**
 * 私有数据,组件的初始数据
 * 可用于模版渲染
 */
data: {
  // 弹窗显示控制
  isShow: false,
  ecs: 1
},

/**
 * 组件的方法列表
 * 更新属性和数据的方法与更新页面数据的方法类似
 */
methods: {
  /*
   * 公有方法
   */

  loadCharts(){
    this.setData({
      ecs: {
        onInit: initChart
      }
    })
  },
  //隐藏弹框
  hideDialog(){
    this.setData({
      isShow: !this.data.isShow
    })
  },
  //展示弹框
  showDialog(){
    this.setData({
      isShow: !this.data.isShow
    })
  },
  /*
  * 内部私有方法建议以下划线开头
  * triggerEvent 用于触发事件
  */
  _cancelEvent(){
    //触发取消回调
    this.triggerEvent("cancelEvent")
  },
  _confirmEvent(){
    //触发成功回调
    this.triggerEvent("confirmEvent");
  }
}
})