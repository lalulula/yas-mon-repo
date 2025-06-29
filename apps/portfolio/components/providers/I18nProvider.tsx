"use client";

import i18n from "@/src/data-access/i18n/i18n";
import type { PropsWithChildren } from "react";
import { I18nextProvider } from "react-i18next";

export function I18nProvider({ children }: PropsWithChildren) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
