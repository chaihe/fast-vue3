<p align="center">
    <img src="https://img.shields.io/badge/-Vue3-34495e?logo=vue.j" />
    <img src="https://img.shields.io/badge/-Vite2.7-646cff?logo=vite&logoColor=white" />
    <img src="https://img.shields.io/badge/-TypeScript-blue?logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/-Pinia-yellow?logo=picpay&logoColor=white" />
    <img src="https://img.shields.io/badge/-ESLint-4b32c3?logo=eslint&logoColor=white" />
    <img src="https://img.shields.io/badge/-pnpm-F69220?logo=pnpm&logoColor=white" />
    <img src="https://img.shields.io/badge/-Axios-008fc7?logo=axios.js&logoColor=white" />
    <img src="https://img.shields.io/badge/-Prettier-ef9421?logo=Prettier&logoColor=white" alt="Prettier">
    <img src="https://img.shields.io/badge/-Less-1D365D?logo=less&logoColor=white" alt="Less">
    <img src="https://img.shields.io/badge/-Tailwind%20CSS-06B6D4?logo=Tailwind%20CSS&logoColor=white" alt="Taiwind">
    <img src="" alt="">
</p>

🔌 关闭代码规范  
将  `src/`  目录分别加入  `.eslintignore`  和  `.stylelintignore`  进行忽略即可。

## 目录结构

以下是系统的目录结构

```
├── config
│   ├── vite             // vite配置
│   ├── constant         // 系统常量
|   └── themeConfig      // 主题配置
├── docs                 // 文档相关
├── mock                 // mock数据
├── plop-tpls            // plop模板
├── src
│    ├── api             // api请求
│    ├── assets          // 静态文件
│    ├── components      // 业务通用组件
│    ├── page            // 业务页面
│    ├── router          // 路由文件
│    ├── store           // 状态管理
│    ├── utils           // 工具类
│    ├── App.vue         // vue模板入口
│    ├── main.ts         // vue模板js
├── .d.ts                // 类型定义
├── tailwind.config.js   // tailwind全局配置
├── tsconfig.json        // ts配置
└── vite.config.ts       // vite全局配置
```

## 💕 支持 JSX 语法

```json
{
    ...
    "@vitejs/plugin-vue-jsx": "^1.3.10"
    ...
}
```

## 🎸UI 组件按需加载，自动导入

```typescript
//模块化写法
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers';
export const AutoRegistryComponents = () => {
  return Components({
    // dirs: ['src/components'],
    extensions: ['vue', 'md'],
    deep: true,
    dts: 'types/components.d.ts',
    directoryAsNamespace: false,
    globalNamespaces: [],
    directives: true,
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    resolvers: [ElementPlusResolver(), VueUseComponentsResolver()],
  });
};
```

## 🧩Vite 插件模块化

为了方便管理插件，将所有的`config`统一放入`config/vite/plugins`里面，未来还会有更多插件直接分文件夹管理十分干净。值得一提的是，`Fast-Vue3`增加了统一环境变量管理，来区分动态开启某些插件。

```typescript
// vite/plugins/index.ts
/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用
 */
import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { ConfigSvgIconsPlugin } from './svgIcons';
import { AutoRegistryComponents } from './component';
import { AutoImportDeps } from './autoImport';
import { ConfigMockPlugin } from './mock';
import { ConfigVisualizerConfig } from './visualizer';
import { ConfigCompressPlugin } from './compress';
import { ConfigPagesPlugin } from './pages';
import { ConfigMarkDownPlugin } from './markdown';
import { ConfigRestartPlugin } from './restart';

export function createVitePlugins(isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // vue支持
    vue(),
    // JSX支持
    vueJsx(),
    // 自动按需引入组件
    AutoRegistryComponents(),
    // 自动按需引入依赖
    AutoImportDeps(),
    // 自动生成路由
    ConfigPagesPlugin(),
    // 开启.gz压缩  rollup-plugin-gzip
    ConfigCompressPlugin(),
    //支持markdown
    ConfigMarkDownPlugin(),
    // 监听配置文件改动重启
    ConfigRestartPlugin(),
  ];
  // vite-plugin-svg-icons
  vitePlugins.push(ConfigSvgIconsPlugin(isBuild));
  // vite-plugin-mock
  vitePlugins.push(ConfigMockPlugin(isBuild));
  // rollup-plugin-visualizer
  vitePlugins.push(ConfigVisualizerConfig());
  return vitePlugins;
}
```

而`vite.config.ts`便干净多了

```typescript
import { createVitePlugins } from './config/vite/plugins'
...
return {
    resolve: {
      alias: [
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
        },
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
    // plugins
    plugins: createVitePlugins(isBuild)
}
...
```

## 📱 支持`Pinia` ,下一代`Vuex5`

创建文件`src/store/index.ts`

```typescript
// 支持模块化，配合plop可以通过命令行一键生成
import { createPinia } from 'pinia';
import { useAppStore } from './modules/app';
import { useUserStore } from './modules/user';
const pinia = createPinia();
export { useAppStore, useUserStore };
export default pinia;
```

创建文件`src/store/modules/user/index.ts`

```typescript
import { defineStore } from 'pinia';
import piniaStore from '@/store';
export const useUserStore = defineStore(
  // 唯一ID
  'user',
  {
    state: () => ({}),
    getters: {},
    actions: {},
  },
);
```

## 🤖 支持`Plop`自动生成文件

⚙️ 代码文件自动生成，提供三种预设模板`pages`,`components`,`store`，也可以根据自己需要设计更多自动生成脚本。一般后端同学惯用此形式，十分高效。

```shell
# 安装plop
pnpm add plop
```

根目录创建`plopfile.ts`

```typescript
import { NodePlopAPI } from 'plop';
export default function (plop: NodePlopAPI) {
  plop.setWelcomeMessage('请选择需要创建的模式：');
  plop.setGenerator('page', require('./plop-tpls/page/prompt'));
  plop.setGenerator('component', require('./plop-tpls/component/prompt'));
  plop.setGenerator('store', require('./plop-tpls/store/prompt'));
}
```

```shell
# 启动命令
pnpm run plop
```

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a6756aebd4d6407e8545eed41b6e5864~tplv-k3u1fbpfcp-watermark.image?)

## 🖼️ 支持`SVG`图标

随着浏览器兼容性的提升，SVG 的性能逐渐凸显，很多大厂团队都在创建自己的 SVG 管理库，后面工具库会有推荐。

```shell
# 安装svg依赖
pnpm add vite-plugin-svg-icons
```

配置`vite.config.ts`

```typescript
import viteSvgIcons from 'vite-plugin-svg-icons';
export default defineConfig({
plugins:[
...
 viteSvgIcons({
    // 指定需要缓存的图标文件夹
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    // 指定symbolId格式
    symbolId: 'icon-[dir]-[name]',
  }),
]
...
})
```

已封装一个简单的`SvgIcon`组件，可以直接读取文件下的`svg`，可以根据文件夹目录自动查找文件。

```html
<template>
  <svg aria-hidden="true" class="svg-icon-spin" :class="calsses">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script lang="ts" setup>
  const props = defineProps({
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#333',
    },
    size: {
      type: String,
      default: 'default',
    },
  });
  const symbolId = computed(() => `#${props.prefix}-${props.name}`);
  const calsses = computed(() => {
    return {
      [`sdms-size-${props.size}`]: props.size,
    };
  });
  const fontSize = reactive({ default: '32px', small: '20px', large: '48px' });
</script>
```

## 📦 支持`axios(ts版)`

已封装了主流的拦截器，请求调用等方法，区分了模块`index.ts`/`status.ts`/`type.ts`

```typescript
//封装src/api/user/index.ts
import request from '@utils/http/axios';
import { IResponse } from '@utils/http/axios/type';
import { ReqAuth, ReqParams, ResResult } from './type';
enum URL {
  login = '/v1/user/login',
  permission = '/v1/user/permission',
  userProfile = 'mock/api/userProfile',
}
const getUserProfile = async () => request<ReqAuth>({ url: URL.userProfile });
const login = async (data: ReqParams) => request({ url: URL.login, data });
const permission = async () => request<ReqAuth>({ url: URL.permission });
export default { getUserProfile, login, permission };
```

```typescript
//调用
import userApi from '@api/user';
// setup模式下组件可以直接引用
const res = await userApi.profile();
```

## 👽 自动生成`router`，过滤`components`组件

支持`vue-router4.0`的模块化，通过检索 pages 文件夹可自动生成路由，并支持动态路由

```typescript
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import routes from 'virtual:generated-pages';

console.log(routes, '打印生成自动生成的路由');
//导入生成的路由数据
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
```

## 🧬 支持 Mock 数据

使用`vite-plugin-mock`插件，支持自动区分和启停的环境配置

```javascript
// vite config
viteMockServe({
  ignore: /^\_/,
  mockPath: 'mock',
  localEnabled: !isBuild,
  prodEnabled: false,
  // https://github.com/anncwb/vite-plugin-mock/issues/9
  injectCode: `
       import { setupProdMockServer } from '../mock/_createProdMockServer';
       setupProdMockServer();
       `,
});
```

根目录下创建 `_createProductionServer.ts`文件,非`_`开头文件会被自动加载成 mock 文件

```typescript
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
// 批量加载
const modules = import.meta.globEager('./mock/*.ts');

const mockModules: Array<string> = [];
Object.keys(modules).forEach((key) => {
  if (key.includes('/_')) {
    return;
  }
  mockModules.push(...modules[key].default);
});
export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
```

## 🎎Proxy 代理

```typescript
// vite config
import proxy from '@config/vite/proxy';
export default defineConfig({
    ...
    server: {
        hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
        // 服务配置
        port: VITE_PORT, // 类型： number 指定服务器端口;
        open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
        cors: false, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
        host: '0.0.0.0', // IP配置，支持从IP启动
        proxy,
    }
    ...
})
```

```typescript
// proxy.ts
import { API_BASE_URL, API_TARGET_URL, MOCK_API_BASE_URL, MOCK_API_TARGET_URL } from '@config/constant';
import { ProxyOptions } from 'vite';
type ProxyTargetList = Record<string, ProxyOptions>;

const init: ProxyTargetList = {
  // test
  [API_BASE_URL]: {
    target: API_TARGET_URL,
    changeOrigin: true,
    rewrite: (path) => path.replace(new RegExp(`^${API_BASE_URL}`), ''),
  },
  // mock
  [MOCK_API_BASE_URL]: {
    target: MOCK_API_TARGET_URL,
    changeOrigin: true,
    rewrite: (path) => path.replace(new RegExp(`^${MOCK_API_BASE_URL}`), '/api'),
  },
};

export default init;
```

## 🎉 其他

- 🏗 支持`vw/vh`移动端布局兼容，也可以使用`plop`自己配置生成文件
- 还有更多新功能增在`commiting`,如果你有更好的方案欢迎`PR`
