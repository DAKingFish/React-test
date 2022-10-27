/**
 * 为了简化 工具 函数的导入，我们创建 utils/index.js 来统一导入并导出所有的 工具函数
 * 这样， 将来再想使用任意的一个 工具函数，只需要导入 utils/index.js 即可
 */

// 原始方式：1 先导入 2 再导出
// import { history } from './history'
// export { history }

// 推荐：直接导出
export * from './history' // 导出 ./history 中的所有内容
export * from './request' // 导出 ./requset中的所有内容
export * from './menus' // 导出 ./token 中的所有内容
