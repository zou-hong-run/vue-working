// 不是生产模式就走代理
export const baseURL = process.env.NODE_ENV === 'production'
  ? 'http://production.com' : 'http://localhost:8080'
