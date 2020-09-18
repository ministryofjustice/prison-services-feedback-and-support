module.exports = {
  urls: {
    oauth: process.env.OAUTH_ENDPOINT_URL || 'http://localhost:9090/auth/',
    allocationManager: process.env.ALLOCATION_MANAGER_ENDPOINT_URL || '',
  },
}
