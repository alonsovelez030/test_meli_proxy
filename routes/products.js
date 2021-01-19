const proxy = require('http-proxy-middleware');

const productsOptions = {
    target: process.env.GATEWAY,
    changeOrigin: true,
    pathRewrite: {
      '^/api/items/search': '/sites/MLA/search', 
      '^/api/items': '/items'
    }
};

// Create the proxy (without context)
module.exports = proxy(productsOptions);