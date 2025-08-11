import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'invitacion-steph',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'assets', dest: 'assets' }, // 👈 Copia src/assets → www/assets
      ],
    },
  ],
  testing: {
    browserHeadless: 'shell',
  },
};
