export default api => {
  // Cache
  api.cache.never();
  return {
    presets: [
      '@babel/react',
      [
        '@babel/env',
        {
          debug: true,
          spec: true,
          loose: true,
          modules: false,
        },
      ],
    ],
  };
};
