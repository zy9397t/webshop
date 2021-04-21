const path = require('path')
const px2rem = require('postcss-px2rem')
const postcss = px2rem({
    remUnit:37.5
})

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    css:{
        loaderOptions:{
            postcss:{
                plugins:[
                    postcss
                ]
            }
        }
    },

    configureWebpack:{
        resolve:{
            extensions: [".js", ".json",".vue"],
            alias:{
                '@':resolve('src'),
                'components':resolve('src/components'),
                'api':resolve('src/api'),
                'pages':resolve('src/pages'),
                'utils':resolve('src/utils')
            }
        },
        devServer:{
            proxy: {
                "/4000": {
                  target: "http://localhost:4000",
                  changeOrigin: true,
                  pathRewrite: {"^/4000" : ""}
                }
              }
        },
        // devtool:'source-map'
    }

}