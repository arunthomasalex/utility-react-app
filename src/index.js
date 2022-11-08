'use strict'

require('@babel/register')({
    extensions: [".jsx", ".js"],
    cache: true,
});
require('./app')