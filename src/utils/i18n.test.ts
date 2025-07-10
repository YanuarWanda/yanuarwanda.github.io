import { describe, expect, it } from "vitest";
import {
  getLangFromUrl,
  useTranslatedPath,
  useTranslations,
  useTranslationsFrom,
} from "@/utils/i18n";
import { defaultLang } from "@/i18n/ui";

describe("getLangFromUrl", () => {
  it("should return 'id' for '/id/some-page'", () => {
    const url = new URL("http://localhost/id/some-page");
    expect(getLangFromUrl(url)).toBe("id");
  });

  it("should return default language for '/some-page'", () => {
    const url = new URL("http://localhost/some-page");
    expect(getLangFromUrl(url)).toBe(defaultLang);
  });

  it("should return default language for '/'", () => {
    const url = new URL("http://localhost/");
    expect(getLangFromUrl(url)).toBe(defaultLang);
  });

  it("should return default language for '/fr/some-page' (unsupported lang)", () => {
    const url = new URL("http://localhost/fr/some-page");
    expect(getLangFromUrl(url)).toBe(defaultLang);
  });
});

describe("useTranslations", () => {
  it("should return a translator function for the given language", () => {
    const t = useTranslations("id");
    expect(typeof t).toBe("function");
    expect(t("header.portfolio")).toBe("portofolio");
  });

  it("should fall back to default language if translation is missing", () => {
    const t = useTranslations("id");
    expect(t("footer.built")).toBe("Dibuat dengan");
  });

  it("should return english translation for english", () => {
    const t = useTranslations("en");
    expect(t("header.portfolio")).toBe("portfolio");
  });
});

describe("useTranslationsFrom", () => {
  it("should pick the specified language from an object", () => {
    const t = useTranslationsFrom("id");
    const myObject = { en: "English text", id: "Teks Indonesia" };
    expect(t(myObject)).toBe("Teks Indonesia");
  });

  it("should fall back to the default language if the specified language is not available", () => {
    const t = useTranslationsFrom("id");
    const myObject = { en: "English text" };
    expect(t(myObject)).toBe("English text");
  });

  it("should work with the default language", () => {
    const t = useTranslationsFrom("en");
    const myObject = { en: "English text", id: "Teks Indonesia" };
    expect(t(myObject)).toBe("English text");
  });
});

describe("useTranslatedPath", () => {
  it("should not add lang prefix for default lang when showDefaultLang is false", () => {
    const translatePath = useTranslatedPath(defaultLang);
    expect(translatePath("/about")).toBe("/about");
    expect(translatePath("/")).toBe("/");
  });

  it("should add lang prefix for non-default lang", () => {
    const translatePath = useTranslatedPath("id");
    expect(translatePath("/about")).toBe("/id/about");
    expect(translatePath("/")).toBe("/id/");
  });

  it("should respect the language argument over the configured one", () => {
    const translatePath = useTranslatedPath("en");
    expect(translatePath("/about", "id")).toBe("/id/about");
  });

  it("should not add lang prefix for default lang when passed as argument and showDefaultLang is false", () => {
    const translatePath = useTranslatedPath("id");
    expect(translatePath("/about", "en")).toBe("/about");
  });
});
