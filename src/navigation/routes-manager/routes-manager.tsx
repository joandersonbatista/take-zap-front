import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { AppRoute } from '@/navigation/app-route';

export class RoutesManager {
  private static readonly sections: RouteObject[] = [];

  public static addSection(appRoute: AppRoute): void {
    RoutesManager.sections.push({
      path: appRoute.configs.path,
      element: appRoute.toReact(),
    });
  }

  public static generateReactRoutes(): ReturnType<typeof createBrowserRouter> {
    return createBrowserRouter(RoutesManager.sections);
  }
}
