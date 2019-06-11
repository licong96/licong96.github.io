
import * as React from 'react';
import './styles';
import Modal from '../Modal';
import imgCode from '../../assets/images/mycode.jpeg';

type ModalCodeProps = {
  handlerModal(bool: boolean): void;
}
const ModalCode = ({ handlerModal }: ModalCodeProps) => {
  return (
    <Modal>
      <div className="modal-code">
        <i className="iconfont iconguanbi" onClick={() => { handlerModal(false) }}></i>
        <div className="modal__title">和他一起</div>
        <div className="modal__img">
          <img className="code__img" src={imgCode} alt="" />
        </div>
        <p className="modal__text">长按识别二维码</p>
      </div>
     </Modal>
  )
}

export default ModalCode;