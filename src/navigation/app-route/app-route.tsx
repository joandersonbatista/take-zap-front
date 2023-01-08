import { ComponentType, ReactElement } from 'react';

import type { ConfigsRoute } from '@/navigation/app-route-type';
import { PrivateRoute } from '@/navigation/private-route';

export class AppRoute {
  public constructor(
    public component: ComponentType,
    public configs: ConfigsRoute
  ) {}

  public toReact(): ReactElement {
    if (this.configs.isPrivate) {
      return this.privateRoute();
    }

    return this.publicRoute();
  }

  private privateRoute(): ReactElement {
    return <PrivateRoute component={this.component} />;
  }

  private publicRoute(): ReactElement {
    const Component = this.component;

    return <Component />;
  }
}
