interface Translation {
  [key: string]: Translation | string;
}

export class TranslationsManager {
  private static translations: Record<string, Record<string, Translation>> = {};

  private static variables: Record<string, unknown>;

  public static addVariables(record: Record<string, unknown>): void {
    TranslationsManager.variables = Object.assign(
      TranslationsManager.variables,
      record
    );
  }

  public static getVariables(): Record<string, unknown> {
    return TranslationsManager.variables;
  }

  public static add(
    language: string,
    section: string,
    translations: Translation
  ): void {
    if (TranslationsManager.translations?.[language] === undefined) {
      TranslationsManager.translations = {
        [language]: {},
        ...TranslationsManager.translations,
      };
    }

    if (TranslationsManager.translations[language]?.[section] === undefined) {
      TranslationsManager.translations[language] = {
        [section]: translations,
        ...TranslationsManager.translations[language],
      };
    }
  }

  public static generateTranslations(language: string): Translation {
    if (TranslationsManager.translations?.[language] === undefined) {
      return {};
    }

    return TranslationsManager.translations[language];
  }
}
