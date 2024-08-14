"use server";

import { defineOneEntry } from "oneentry";
import { IProductsEntity } from "oneentry/dist/products/productsInterfaces";

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
  Payments,
} = defineOneEntry("https://ecommerce-tuvngdev.oneentry.cloud", {
  token: process.env.ONEENTRY_TOKEN,
  langCode: "en",
});

// Get all data from a page by url
export async function getPageData(url: string) {
  const value = await Pages.getPageByUrl(url, "en_US");
  const bannerData = {
    title: value.attributeValues?.maintitle?.value,
    image: value.attributeValues?.mainimage?.value[0].downloadLink,
  };

  return { bannerData };
}

//helper function to parse Product
const parseProductObject = (value: any) => {
  const product: any = value.map((product: IProductsEntity) => ({
    id: product.id,
    src: product.attributeValues.images?.value[0].downloadLink,
    title: product.attributeValues.title?.value,
    price: product.attributeValues.price?.value,
    quantity: product.attributeValues.quantity?.value,
    description: product.attributeValues.description?.value,
  }));
  console.log(product);
};
export async function getProductByCategory(url: string) {
  const body = [
    {
      attributeMarker: "price",
      conditionMarker: "mth",
      conditionValue: 1,
    },
  ];
  const value = await Products.getProductsByPageUrl(url, body, "en_US");

  const products = parseProductObject(value);
}
