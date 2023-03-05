/**
 * Generated by "@vuepress/internal-site-data"
 */
export const siteData = {
  "title": "wx-design",
  "description": "提供更接近业务场景的组件",
  "base": "/",
  "headTags": [
    [
      "script",
      {
        "src": "https://cdn.bootcdn.net/ajax/libs/echarts/5.4.1/echarts.min.js"
      }
    ]
  ],
  "pages": [
    {
      "title": "安装",
      "frontmatter": {},
      "regularPath": "/pages/",
      "relativePath": "pages/README.md",
      "key": "v-2fa6df84",
      "path": "/pages/",
      "headers": [
        {
          "level": 2,
          "title": "npm 安装",
          "slug": "npm-安装"
        },
        {
          "level": 2,
          "title": "快速上手",
          "slug": "快速上手"
        }
      ]
    },
    {
      "title": "echarts 图表 基本使用",
      "frontmatter": {},
      "regularPath": "/pages/echarts/chart.html",
      "relativePath": "pages/echarts/chart.md",
      "key": "v-57f053f3",
      "path": "/pages/echarts/chart.html",
      "headers": [
        {
          "level": 3,
          "title": "echarts 图表 基本使用",
          "slug": "echarts-图表-基本使用"
        },
        {
          "level": 3,
          "title": "Attributes",
          "slug": "attributes"
        },
        {
          "level": 3,
          "title": "Methods",
          "slug": "methods"
        }
      ]
    },
    {
      "title": "todo..",
      "frontmatter": {},
      "regularPath": "/pages/element-ui/date-picker.html",
      "relativePath": "pages/element-ui/date-picker.md",
      "key": "v-8b638cfa",
      "path": "/pages/element-ui/date-picker.html",
      "headers": [
        {
          "level": 3,
          "title": "todo..",
          "slug": "todo"
        }
      ]
    },
    {
      "title": "todo...",
      "frontmatter": {},
      "regularPath": "/pages/element-ui/table.html",
      "relativePath": "pages/element-ui/table.md",
      "key": "v-510f5601",
      "path": "/pages/element-ui/table.html",
      "headers": [
        {
          "level": 3,
          "title": "todo...",
          "slug": "todo"
        }
      ]
    },
    {
      "title": "todo...",
      "frontmatter": {},
      "regularPath": "/standard/",
      "relativePath": "standard/README.md",
      "key": "v-662501b8",
      "path": "/standard/",
      "headers": [
        {
          "level": 3,
          "title": "todo...",
          "slug": "todo"
        }
      ]
    },
    {
      "title": "Home",
      "frontmatter": {
        "home": true,
        "heroImage": "/header.png",
        "heroText": "前端组件库",
        "tagline": "提供更接近业务场景的组件",
        "actionText": "快速上手 →",
        "actionLink": "/pages/",
        "features": [
          {
            "title": "便捷",
            "details": "所有组件支持全量引入和按需引入"
          },
          {
            "title": "易用",
            "details": "保持组件的原始用法，扩展常用基础功能"
          },
          {
            "title": "业务",
            "details": "更贴近业务场景，解决常规业务需求，开发提效"
          }
        ],
        "footer": "MIT Licensed"
      },
      "regularPath": "/",
      "relativePath": "README.md",
      "key": "v-0a88c668",
      "path": "/"
    }
  ],
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/"
      },
      {
        "text": "组件",
        "link": "/pages/"
      },
      {
        "text": "规范",
        "link": "/standard/"
      }
    ],
    "sidebar": {
      "/pages/": [
        {
          "title": "使用指南",
          "collapsable": true,
          "path": "/pages/"
        },
        {
          "title": "基于Echarts",
          "collapsable": false,
          "path": "/pages/echarts/chart.md"
        },
        {
          "title": "基于Element UI",
          "collapsable": true,
          "children": [
            {
              "title": "DatePicker日期选择器",
              "path": "/pages/element-ui/date-picker.md"
            },
            {
              "title": "Table表格",
              "path": "/pages/element-ui/date-picker.md"
            }
          ]
        }
      ]
    }
  }
}