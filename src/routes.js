import React, { Suspense} from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import main from './views/main';

export default () => (
  <HashRouter>
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path='/' component={main} />
      </Switch>
    </Suspense>
  </HashRouter>
)
