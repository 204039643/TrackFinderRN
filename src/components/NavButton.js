import React from 'react';
import HeaderButtons, {
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// const FontAwesomeHeaderButton = (props) => (
//   <HeaderButton {...props} IconComponent={Icon} iconSize={24} />
// );

const FontAwesomeHeaderButtons = (props) => {
  return (
    <View>
      <HeaderButtons
        HeaderButtonComponent={FontAwesomeHeaderButton}
        OverflowIcon={
          <FontAwesomeIcon name='ellipsis-v' type='light' size={24} />
        }
        {...props}
      />
    </View>
  );
};

export default FontAwesomeHeaderButtons;
