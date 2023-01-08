import { useState, useEffect, FunctionComponent } from 'react';

import * as Style from './select.styles';
import type { Props } from './select.types';

export const Select: FunctionComponent<Props> = ({
  selectOptions,
  selectedValue,
  leftIconName,
  onChangeValue,
  openOnTop = false,
  onlyIcon = false,
  positionContent = 'right',
  ...rest
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
    <Style.Container {...rest}>
      <Style.DropDownSelect onClick={openDrowpDown} $isClicked={openOptions}>
        {leftIconName !== undefined && <Style.LeftIcon name={leftIconName} />}
        {!onlyIcon && (
          <>
            <Style.SelectedItem>{selectedValue}</Style.SelectedItem>
            <Style.DropDowIcon />
          </>
        )}
      </Style.DropDownSelect>

      <Style.DropDowListContainer
        $openOnTop={openOnTop}
        $showDropDow={openOptions}
        $position={positionContent}
      >
        {selectOptions.map((option, index) => {
          return (
            <Style.DropDowListContent
              key={index}
              onClick={() => {
                setOpenOptions(false);
                onChangeValue(option.value);
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
