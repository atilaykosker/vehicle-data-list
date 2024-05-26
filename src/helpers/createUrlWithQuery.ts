export const createUrlWithNewParam = (
  newParam: Record<string, string | number | null>
) => {
  const url =
    typeof window !== 'undefined'
      ? new URL(window.location.href)
      : new URL('http://localhost:3000/');
  Object.entries(newParam).forEach(([key, value]) => {
    if (value) url.searchParams.set(key, value ? value.toString() : '');
    else url.searchParams.delete(key);
  });
  return url.toString();
};
