import { FunctionComponent } from 'react';
import { Navigate } from 'react-router-dom';

import type { PrivateRouteInterface } from '@/navigation/private-route-type';

import { Layout } from '@/common/components/layout/layout';

export const PrivateRoute: FunctionComponent<PrivateRouteInterface> = ({
  component,
}) => {
  const Component = component;

  if (''.length > 0) {
    return <Navigate to="/" />;
  }

  return (
    <Layout>
      <Component />
    </Layout>
  );
};
