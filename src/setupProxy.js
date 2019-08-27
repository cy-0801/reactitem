const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use(proxy("/pizza",{
        target:"https://h5.ele.me",
        changeOrigin:true,
    }))
    app.use(proxy("/restapi",{
        target:"https://h5.ele.me",
        changeOrigin:true,
    }))
    app.use(proxy("/i",{
        target:"http://meishi.meituan.com",
        changeOrigin:true,
    }))
}


