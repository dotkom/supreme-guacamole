import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Application from 'components/views/commitee/Application';
import AuthenticationEndpoint from 'components/views/AuthenticationEndpoint';
import Heading from 'components/misc/Heading';
import Home from 'components/views/commitee/Home';
import NotFound from 'components/views/NotFound';
import Thankyou from 'components/views/Thankyou';
import { Link } from '@dotkomonline/design-system';
import _s from 'assets/css/base.module.scss';
import { getApplicationUrl, getBaseUrl, getSubmittedUrl, getAuthCallbackUrl } from 'common/urls';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <Heading />
        <main>
          <Switch>
            <Route exact path={getBaseUrl()} component={Home} />
            <Route exact path={getApplicationUrl()} render={(props) => <Application user={user} {...props} />} />
            <Route exact path={getSubmittedUrl()} component={Thankyou} />
            <Route exact path={getAuthCallbackUrl()} component={AuthenticationEndpoint} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <div className={_s.footer}>
          <p>
            Dersom du opplever problemer eller finner feil, ta kontakt med{' '}
            <Link href="mailto:dotkom@online.ntnu.no">dotkom@online.ntnu.no</Link>.
          </p>
          <p>
            Får du ikke sendt inn søknaden, eller vil du heller bruke e-post? Send søknaden din til{' '}
            <Link href="mailto:opptak@online.ntnu.no">opptak@online.ntnu.no</Link>.
          </p>
        </div>
      </div>
    );
  }
}

export default AppContainer;
