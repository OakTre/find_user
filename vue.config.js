module.exports = {
    publicPath: import.meta.env.MODE === 'production'
        ? '/find_users/'
        : '/'
}