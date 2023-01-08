const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@/navigation/app-route': path.resolve(
        __dirname,
        'src/navigation/app-route/app-route.tsx'
      ),
      '@/navigation/app-route-type': path.resolve(
        __dirname,
        'src/navigation/app-route/app-route.type.ts'
      ),
      '@/navigation/routes-manager-type': path.resolve(
        __dirname,
        'src/navigation/routes-manager/routes-manager.type.ts'
      ),
      '@/navigation/routes-manager': path.resolve(
        __dirname,
        'src/navigation/routes-manager/routes-manager.tsx'
      ),
      '@/navigation/private-route': path.resolve(
        __dirname,
        'src/navigation/private-route/private-route.tsx'
      ),
      '@/navigation/private-route-type': path.resolve(
        __dirname,
        'src/navigation/private-route/private-route.type.ts'
      ),
      '@/navigation/routes': path.resolve(
        __dirname,
        'src/navigation/routes.ts'
      ),
      '@/entrypoint': path.resolve(__dirname, 'src/entrypoint.ts'),
      '@/register-modules': path.resolve(__dirname, 'src/register-modules.tsx'),
      '@/modules': path.resolve(__dirname, 'src/modules'),
      '@/common/components': path.resolve(__dirname, 'src/common/components'),
      '@/common/state': path.resolve(__dirname, 'src/common/state'),
      '@/common/assets/svg': path.resolve(__dirname, 'src/common/assets/svg'),
      '@/common/translations': path.resolve(
        __dirname,
        'src/common/translations'
      ),
      '@/common': path.resolve(__dirname, 'src/common'),
      '@/icon-manager': path.resolve(
        __dirname,
        'src/common/components/icon/icon-manager.ts'
      ),
      '@/assets-icon-mapping': path.resolve(
        __dirname,
        'src/common/assets/icons-mapping.ts'
      ),
      '@/register-icons': path.resolve(
        __dirname,
        'src/common/assets/register-icons.ts'
      ),
      '@/menu-items-manager': path.resolve(
        __dirname,
        'src/common/components/menu-items/menu-items-manager'
      ),
      '@/translation': path.resolve(__dirname, 'src/translation'),
    },
  },
};
