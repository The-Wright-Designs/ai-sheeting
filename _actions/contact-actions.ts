"use server";

import generalData from "@/_data/general-data.json";
import { verifyRecaptchaToken } from "@/_lib/verify-recaptcha";

const { email, phones } = generalData.homePage.contactUs;

export async function fetchEmail(token?: string) {
  const result = await verifyRecaptchaToken(token ?? "");
  return result.success ? email : "";
}

export async function fetchPhone(token?: string, index = 0) {
  const result = await verifyRecaptchaToken(token ?? "");
  return result.success ? (phones[index] ?? "") : "";
}
