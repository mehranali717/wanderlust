const setRoutes = (config) => {
  let routes = [...config.routes];
  routes = routes.map((route) => {
    return {
      ...route,
    };
  });
  return [...routes];
};
export const generateRoutesFromConfigs = (configs) => {
  let allRoutes = [];
  configs.forEach((config) => {
    allRoutes = [...allRoutes, ...setRoutes(config)];
  });
  return allRoutes;
};
