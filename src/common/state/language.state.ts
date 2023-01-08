import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

import { translate } from '@/translation/index';

class LanguageState {
  public currentLanguage = '';

  public constructor() {
    makeAutoObservable(this);

    void makePersistable(this, {
      name: 'LanguageState',
      properties: ['currentLanguage'],
      storage: window.localStorage,
    });
  }

  public setCurrentLanguage = (language: string): void => {
    this.currentLanguage = language;
  };

  public languageTraslation = (): string => {
    const languageMapper: Record<string, string> = {
      pt: translate('common.navBar.selectLanguagePtBr'),
      en: translate('common.navBar.selectLanguageEnUs'),
      '': translate('common.navBar.selectLanguagePtBr'),
    };

    return languageMapper[this.currentLanguage];
  };
}

const languageState = new LanguageState();

export { languageState };
