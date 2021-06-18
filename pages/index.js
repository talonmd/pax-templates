import Layout from "../layout/Layout"

import { attributes, react as HomeContent } from "../content/pages/home.md"
import navigationConfig from "../content/settings/navigation.json"

export default function Home({ isLoggedIn }) {
  return (
    <Layout
      attributes={attributes}
      isLoggedIn={isLoggedIn}
      pageNav={navigationConfig}
      addNetlifyIdentityScript
    >
      <HomeContent />
    </Layout>
  )
}
