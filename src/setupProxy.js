const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "https://api.gdschufs.com/api/v1",
            //target: "http://localhost:8080/api/v1",
            changeOrigin: true,
            pathRewrite: {
                '^/api': '' // URL ^/BE -> 공백 변경
            }
        })
    )
}