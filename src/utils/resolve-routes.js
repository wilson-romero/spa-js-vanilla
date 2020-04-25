export default function resolveRoutes(route) {
  if (route.length <= 3) {
    const validRoute = route === '/' ? route : '/:id';
    return validRoute;
  }
  return `/${route}`;
}
