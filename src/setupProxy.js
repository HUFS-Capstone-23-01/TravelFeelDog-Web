const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://43.201.242.228:8080/api/v1",
            //target: "http://localhost:8080/api/v1",
            changeOrigin: true,
            pathRewrite: {
                '^/api': '' // URL ^/BE -> 공백 변경
            }
        })
    )
}