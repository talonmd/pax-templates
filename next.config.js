module.exports = {
  target: "serverless",
  webpack: (config) => {
    // config.module.rules.push({
    //   test: /\.md$/,
    //   loader: "frontmatter-markdown-loader",
    //   options: { mode: ["react-component"] },
    // })

    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    })

    return config
  },
}
