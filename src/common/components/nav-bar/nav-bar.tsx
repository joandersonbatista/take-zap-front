import { observer } from 'mobx-react-lite';
import { FunctionComponent, useEffect } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';

import { translate } from '@/translation/index';

import { SelectOption } from '@/common/components/select/select.types';

import { languageState } from '@/common/state/language.state';
import { sidebarState } from '@/common/state/sidebar.state';

import * as Style from './nav-bar.styles';

const BaseNavBar: FunctionComponent = () => {
  const { i18n } = useTranslation();

  const options: SelectOption[] = [
    { label: translate('common.navBar.selectLanguagePtBr'), value: 'pt' },
    { label: translate('common.navBar.selectLanguageEnUs'), value: 'en' },
  ];

  function changeLanguage(language: string): void {
    void i18n.changeLanguage(language);
    languageState.setCurrentLanguage(language);
  }

  useEffect(() => {
    void i18n.changeLanguage(languageState.currentLanguage);
  }, []);

  return (
    <Style.Container>
      <Style.CurrentScreen>
        {translate(sidebarState.currentScreen)}
      </Style.CurrentScreen>
      <Style.SelectLanguage
        selectOptions={options}
        selectedValue={languageState.languageTraslation()}
        onChangeValue={changeLanguage}
        leftIconName="language"
        positionContent="right"
        onlyIcon
      />
      <Style.NotificationIcon />
      <Style.Hr />
      <Style.InfoPerfilContainer>
        <Style.AvatarImg src="https://www.w3schools.com/howto/img_avatar.png" />
        <Style.InfoPerfilContent>
          <Style.ProfileName>Joanderson batista</Style.ProfileName>
          <Style.UserType>{translate('common.navBar.userType')}</Style.UserType>
        </Style.InfoPerfilContent>
      </Style.InfoPerfilContainer>
    </Style.Container>
  );
};

export const NavBar = withTranslation()(observer(BaseNavBar));
