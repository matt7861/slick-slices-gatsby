var plugins = [{
      plugin: require('/Users/matt_studioalt/Desktop/training-ground/master-gatsby/slick-slices/slick-slices-gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"pure":false},
    },{
      plugin: require('/Users/matt_studioalt/Desktop/training-ground/master-gatsby/slick-slices/slick-slices-gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"wmlbcjhb","dataset":"production","watchMode":true,"token":"skUCGzB1HICQBMiSdnnb8V8kf84x8050WrUqbL2KO32YyyWA8a1uPonaJFnxPdqh7clC0KVypasEsAFwr3e41TCSugBKRXpNEBVvkFaDTJDprbUatYiLS4P9ha1EIIplVIajT0QSClJQEWsekDw50Ly1HzzGzqAZEhsBWMh9NKbsGNpKlYI4","apiVersion":"2023-11-01"},
    },{
      plugin: require('/Users/matt_studioalt/Desktop/training-ground/master-gatsby/slick-slices/slick-slices-gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
