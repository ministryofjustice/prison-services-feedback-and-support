exports.health = async (req, res) => {
  const getBuild = () => {
    try {
      // eslint-disable-next-line import/no-unresolved,global-require
      return require('../build-info.json')
    } catch (ex) {
      return null
    }
  }

  const addAppInfo = (result) => {
    const buildInformation = getBuild()
    const buildInfo = {
      uptime: process.uptime(),
      build: buildInformation,
      version: (buildInformation && buildInformation.buildNumber) || 'Not available',
    }

    return { ...result, ...buildInfo }
  }

  const result = {
    name: 'prison-services-feedback-and-support',
    status: 'UP',
  }

  res.json(addAppInfo(result))
  return result
}
