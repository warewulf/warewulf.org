// /docs/development/* was renamed to /docs/main/*.
// (Static host: the legacy pages under static/docs/development remain in place.)
exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/docs/development/*`,
    toPath: `/docs/main/*`,
    force: true,
    redirectInBrowser: true,
  })
}
