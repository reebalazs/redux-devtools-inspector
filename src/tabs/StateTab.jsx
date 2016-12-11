import React from 'react';
import JSONTree from 'react-json-tree/src';    // XXX src needed because of github fork
import getItemString from './getItemString';
import getJsonTreeTheme from './getJsonTreeTheme';

const StateTab = ({ nextState, styling, base16Theme, invertTheme, labelRenderer, isWideLayout }) =>
  <JSONTree
    labelRenderer={labelRenderer}
    theme={getJsonTreeTheme(base16Theme)}
    data={nextState}
    getItemString={(type, data) => getItemString(styling, type, data, isWideLayout)}
    invertTheme={invertTheme}
    hideRoot
  />;

export default StateTab;
