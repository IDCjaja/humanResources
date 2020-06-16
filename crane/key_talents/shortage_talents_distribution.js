module.exports = [
  {
    id: 'degree-analysis-icon',
    component: 'div',
    position: [1504, 805],
    props: {
      $style: {
        color: '#6ad6ff',
        fontSize: '14px',
        fontWeight: 400,
        textAlign: 'left',
      },
    },
    content: '>>',
  },
  {
    id: 'degree-analysis-title',
    component: 'div',
    position: [1536, 803],
    props: {
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
      },
    },
    content: '紧缺人才专业分布',
  },
  {
    component: '@byzanteam/vis-components/data-loader',
    position: [1490, 841],
    exports: {
      results: 'results',
    },
    props: {
      $url: "`/v1/components/33b74ddd-39de-493f-84ab-9d87fcf23fee/data?industry=${craneStates.currentShortageIndustry}`",
      method: 'get',
      $data: "[[0, '暂无数据']]",
      $style: {
        width: '400px',
        height: '218px',
        overflow: 'scroll'
      }
    },
    children: [
      {
        component: 'v-chart',
        props: {
          $options: {
            backgroundColor: 'transparent',
            $tooltip: {
              trigger: 'item',
              $formatter: "pieTooltipFormatterFunc",
              backgroundColor: '#566374f0',
            },
            $legend: {
              icon: 'circle',
              $itemWidth: 10,
              $itemHeight: 10,
              $left: 240,
              top: 'middle',
              $itemGap: 9,
              orient: 'vertical',
              $textStyle: {
                color: '#4b9bbe',
                fontSize: 12
              },
              inactiveColor: '#1C4159',
            },
            $color: "['#6ad6ff', '#4b9bbe', '#367290', '#275570', '#1c4159', '#153349']",
            $series: "[{type: 'pie', left: -120, clockwise: false, radius: ['35%', '62%'], label: {show: false}, labelLine: {show: false}, data: results ? results.map(item => ({value: item [0], name: item[1]})) : [{value: 0, name: '暂无数据'}]}]"
          }
        }
      }
    ]
  },
]
