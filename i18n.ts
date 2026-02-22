import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "ar"];

export default getRequestConfig(async ({ locale }) => {
  // Handle case where locale is undefined - default to 'en'
  const resolvedLocale = locale ?? 'en';
  
  if (!locales.includes(resolvedLocale as any)) notFound();

  return {
    locale: resolvedLocale,
    messages: (await import(`./messages/${resolvedLocale}.json`)).default,
  };
});
