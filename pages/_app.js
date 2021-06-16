import "../sass/main.scss"

function MyApp({ Component, pageProps }) {
  const isLoggedIn = false
  return <Component {...pageProps} isLoggedIn={isLoggedIn} />
}

export default MyApp
