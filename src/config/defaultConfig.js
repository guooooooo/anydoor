module.exports = {
    root: process.cwd(),
    hostname: '127.0.0.1',
    port: '3157',
    compress: /\.(html|css|js|md)/,
    cache: {
        maxAge: 200,
        expires: true,
        cacheControl: true,
        lastModified: true,
        etag: true
    }
};