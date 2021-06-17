import "../sass/main.scss"

function MyApp({ Component, pageProps }) {
  const isLoggedIn = true
  return <Component {...pageProps} isLoggedIn={isLoggedIn} />
}

export default MyApp
