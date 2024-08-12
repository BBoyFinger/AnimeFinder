"úse server";

import { defineOneEntry } from "oneentry";

const {
    Admins,
    AttributesSets,
    Blocks,
    Forms,
    Orders,
    FormData,
    FileUploading,
    GeneralTypes,
    Locales,
    ProductStatuses,
    Products,
    Pages,
    System, 
    Templates,
    TemplatePreviews,
    Payments
} = defineOneEntry("https://ecommerce-tuvngdev.oneentry.cloud", {
  token: process.env.ONEENTRY_TOKEN,
  langCode: "en",
});

// Get all data from a page by url
export async function getPageData(url: string) {
    const values = await Pages.getPageByUrl(url, 'en_US')
    console.log(values)
}