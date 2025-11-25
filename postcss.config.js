import postcssPxToRem from "postcss-pxtorem"

export default ({ env }) => {
  const isProd = env === "production"
  const pLugins = []

  if (isProd) {
    pLugins.push(
      postcssPxToRem({
        propList: ["*"],
        mediaQuery: true,
      })
    )
  }

  return {
    pLugins,
  }
}
