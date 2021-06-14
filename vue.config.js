/*
 * @name: 易寒鸦
 * @Description:
 * @Date: 2021-04-22 08:39:07
 * @LastEditTime: 2021-04-22 08:46:32
 * @FilePath: \vuebook\vue.config.js
 */
module.exports = {
    configureWebpack: {},
    devServer: {
        // 环境配置
        host: '0.0.0.0',
        public: '172.20.3.3:8080',
        port: '8080',
        https: false,
        disableHostCheck: true,
        open: false, // 配置自动启动浏览器
    },
};
