export const isActive = (itemHref: string, currentPath: string) => {
  if (
    itemHref === "/" &&
    (currentPath === "/" || currentPath === "/index.html")
  ) {
    return true;
  }

  if (itemHref !== "/") {
    return (
      currentPath === itemHref ||
      currentPath.startsWith(`${itemHref}/`) ||
      currentPath === `${itemHref}.html` ||
      currentPath === `${itemHref}/index.html`
    );
  }

  return false;
};
