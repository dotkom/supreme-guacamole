import React from 'react';
import classNames from 'classnames';

import { ReactComponent as Cross } from 'assets/images/cross.svg';
import { ReactComponent as Check } from 'assets/images/check.svg';
import _s from 'assets/css/ToggleSwitch.module.scss';

const ToggleSwitch = ({ checked = false, disabled, onChange }) => {
  const SvgIcon = checked ? Check : Cross;
  return (
    <button disabled={disabled} onClick={onChange} className={_s.container}>
      <div className={classNames(_s.slider, { [_s.checked]: checked })}>
        <span className={_s.icon}>
          <SvgIcon width={12} />
        </span>
      </div>
    </button>
  );
};

export default ToggleSwitch;
