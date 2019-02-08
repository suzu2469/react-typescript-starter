import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from '~/store/index'

import NotFound from '~/containers/pages/NotFound'
import Top from '~/containers/pages/Top'

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
)

export default App
