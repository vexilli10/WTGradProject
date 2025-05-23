import Header from './Header.jsx'
import Footer from './Footer'
import HomePage from '../pages/HomePage.jsx'
import { Switch, Route } from 'react-router-dom'

export default function PageContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </main>

      <Footer />   {/* temporary empty component */}
    </div>
  )
}
