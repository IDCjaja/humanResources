const title_style = {
  color: '#41bcff',
  fontSize: '14px',
  $fontWeight: 400,
  lineHeight: '20px'
}

const subtitle_style = {
  color: '#ffffff',
  fontSize: '14px',
  $fontWeight: 400,
  lineHeight: '20px'
}

const value_style = {
  color: '#41bcff',
  fontSize: '14px',
  $fontWeight: 400,
  lineHeight: '20px'
}

module.exports = [
  {
    id: 'talents-demand-change-icon',
    component: 'div',
    position: [1500, 742],
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
    id: 'talents-demand-change-title·',
    component: 'div',
    position: [1533, 740],
    props: {
      $style: {
        color: '#fff',
        fontSize: '18px',
        fontWeight: '600',
        textAlign: 'left',
        letterSpacing: '1px',
        cursor: 'pointer',
      },
    },
    content: '全国人才区域分布',
  },
  {
    component: 'data-loader',
    children: [
      {
        component: 'v-chart',
        id: 'map-thumbnail-chart',
        position: [1500, 792],
        props: {
          $style: {
            width: '240px',
            height: '248px',
          },
          $options: {
            backgroundColor: 'transparent',
            $series: {
              type: 'map',
              mapType: "china",
              $itemStyle: {
                areaColor: '#0e3e7d',
                borderColor: '#4589e1',
                borderType: 'dashed',
                $borderWidth: 1
              },
              $emphasis: {
                $label: {
                  color: 'white',
                  $fontWeight: 600,
                },
                $itemStyle: {
                  areaColor: '#41bcff',
                }
              },
            }
          }
        }
      }
    ]
  },
  {
    component: 'span',
    position: [1776, 792],
    props: {
      $style: title_style
    },
    content: '人才全国占比'
  },
  {
    component: 'span',
    position: [1765, 824],
    props: {
      $style: subtitle_style
    },
    content: '人才总数占比'
  },
  {
    component: 'span',
    position: [1776, 848],
    props: {
      $style: value_style
    },
    content: '12.4%'
  },
  {
    component: 'span',
    position: [1765, 876],
    props: {
      $style: subtitle_style
    },
    content: '第一产业人才'
  },
  {
    component: 'span',
    position: [1776, 900],
    props: {
      $style: value_style
    },
    content: '12.4%'
  },
  {
    component: 'span',
    position: [1765, 928],
    props: {
      $style: subtitle_style
    },
    content: '第二产业人才'
  },
  {
    component: 'span',
    position: [1776, 952],
    props: {
      $style: value_style
    },
    content: '12.4%'
  },
  {
    component: 'span',
    position: [1765, 980],
    props: {
      $style: subtitle_style
    },
    content: '第三产业人才'
  },
  {
    component: 'span',
    position: [1776, 1004],
    props: {
      $style: value_style
    },
    content: '12.4%'
  },
]
