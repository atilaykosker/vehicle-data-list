export const createUrlWithNewParam = (newParam: Record<string, string | number | null>) => {
  const url = new URL(window.location.href);
  Object.entries(newParam).forEach(([key, value]) => {
    if (value) url.searchParams.set(key, value ? value.toString() : '');
    else url.searchParams.delete(key);
  });
  return url.toString();
};
