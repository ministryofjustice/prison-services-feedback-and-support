module.exports = {
  app: {
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
  },
  urls: {
    oauth: process.env.OAUTH_ENDPOINT_URL || 'http://localhost:9090/auth/',
    allocationManager: process.env.ALLOCATION_MANAGER_ENDPOINT_URL || '',
    pathfinder: process.env.PATHFINDER_UI_URL || 'http://localhost:3001/',
  },
}
