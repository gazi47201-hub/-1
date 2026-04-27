# 书影音与成长记录网页应用

一个可以长期陪伴用户的数字手帐 + 精神档案馆

## 特色

- 极简、留白、温润的纸张质感设计
- 支持书籍、影视、播客、音乐四类记录
- 完整的时间维度管理（每日/每周/每月/每年）
- 日历热力图展示学习/阅读时长
- 目标与待办系统
- 时光轨道时间轴展示
- 数据可视化统计

## 技术栈

- React + Next.js 14
- TailwindCSS
- Zustand（状态管理 + 本地持久化）
- Day.js（时间处理）

## 开始使用

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 页面结构

- `/` - 首页 Dashboard
- `/record` - 添加记录
- `/records` - 书影音库
- `/calendar` - 日历
- `/review` - 复盘
- `/timeline` - 时光轨道
- `/goals` - 目标管理
- `/stats` - 数据可视化

## 设计特点

- 配色：米白/暖灰为主色，棕色/墨色为强调色
- 字体：思源宋体 + 思源黑体
- 动效：轻微渐入、hover浮动、卡片展开
- 圆角卡片、柔和阴影、充足留白

## 数据存储

数据默认存储在 LocalStorage 中，预留了 RESTful API 接口可扩展至后端。

## 项目结构

```
src/
├── app/           # Next.js App Router 页面
├── components/    # React 组件
├── store/         # Zustand 状态管理
├── types/         # TypeScript 类型定义
├── lib/           # 工具函数
└── data/          # 示例数据
```