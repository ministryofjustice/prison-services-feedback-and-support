module.exports = {
  app: {
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
  },
  urls: {
    oauth: process.env.OAUTH_ENDPOINT_URL || 'http://localhost:9090/auth/',
    allocationManager: process.env.ALLOCATION_MANAGER_ENDPOINT_URL || '',
    pathfinder: process.env.PATHFINDER_UI_URL || 'http://localhost:3001/',
    soc: process.env.SOC_UI_URL || 'http://localhost:3001/',
    checkRule39Mail: process.env.CHECKRULE39MAIL_UI_URL || 'http://localhost:3001/',
  },
}
