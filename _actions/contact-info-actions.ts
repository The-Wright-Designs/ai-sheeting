"use server";

import data from "@/_data/page-data.json";
import { verifyRecaptchaToken } from "@/_lib/verify-recaptcha";

const { email, phone1, phone2 } = data.homePage.contactUs;

export async function showEmailAddress(token: string) {
  const result = await verifyRecaptchaToken(token);
  return result.success ? email : "";
}

export async function showPhoneNumbers(token: string) {
  const result = await verifyRecaptchaToken(token);
  return result.success ? { phone1, phone2 } : { phone1: "", phone2: "" };
}
