import { FunctionComponent, useEffect, useState } from 'react';

import * as Style from './drop-down.styles';
import type { Props } from './drop-down.types';

export const DropDown: FunctionComponent<Props> = ({
  selectOptions,
  placeHolder,
  openOnTop = false,
  disabled = false,
  className,
}) => {
  const [openOptions, setOpenOptions] = useState(false);

  function openDrowpDown(): void {
    setOpenOptions(!openOptions);
  }

  function handleClickOutside(): void {
    setOpenOptions(false);
  }

  useEffect(() => {
    document.addEventListener('mouseup', handleClickOutside);

    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, []);

  return (
    <Style.Container className={className}>
      <Style.DropDownSelect
        onClick={openDrowpDown}
        $isClicked={openOptions}
        $disabled={disabled}
        disabled={disabled}
      >
        <Style.PlaceHolder>{placeHolder}</Style.PlaceHolder>
        <Style.DropDowIcon />
      </Style.DropDownSelect>

      <Style.DropDowListContainer
        $openOnTop={openOnTop}
        $showDropDow={openOptions}
      >
        {selectOptions.map((option, index) => {
          return (
            <Style.DropDowListContent
              key={index}
              onClick={() => {
                setOpenOptions(false);
                option.onClick();
              }}
            >
              {option.label}
            </Style.DropDowListContent>
          );
        })}
      </Style.DropDowListContainer>
    </Style.Container>
  );
};
