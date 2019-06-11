import * as React from 'react';
import './styles';

/**
 * 模态框 - 高阶组件
 */
const Modal = (props: any) => {
  const { children } = props;
  return (
    <div className="modal">
      <div className="modal__animation">
        {children}
      </div>
    </div>
  )
}

export default Modal;