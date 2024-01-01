module.exports = {
    resolve: {
        fallback: {
            http: require.resolve("stream-http"),
            crypto: false,
            zlib: require.resolve("browserify-zlib"),
            url: require.resolve("url/"),
            querystring: require.resolve("querystring-es3"),
            path: require.resolve("path-browserify"),
            stream: require.resolve("stream-browserify"),
            buffer: require.resolve("buffer/"),
            util: require.resolve("util/"),
            fs: false,
        },
    },
};