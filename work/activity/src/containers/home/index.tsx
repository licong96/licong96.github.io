import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../stores/actions/home';
import './styles';

import { ModalCode, About } from '../../components';

import imgCove from '../../assets/images/fitness/2019-6-11-cove2.jpg';
import imgContent0 from '../../assets/images/fitness/0.jpg';

interface Props {
}

interface Stage {
  isShowMyCode: boolean;
}

class Home extends React.Component<Props, Stage> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isShowMyCode: false,
    };
  }

  componentDidMount() {

  }

  // 弹出二维码
  handlerModal(bool: boolean) {
    this.setState({ isShowMyCode: bool });
  }

  render() {
    const { isShowMyCode } = this.state;

    return (
      <div className="home">
        <div className="cove">
          <img className="cove__img" src={imgCove} alt=""/>
        </div>
        <div className="top">
          <h3 className="top__title">邀你一起健身，相互鼓励</h3>
          <ul className="top__block">
            <li className="top__list">
              <span className="top__name">时间</span>
              <span className="top__text">每晚8-9点</span>
            </li>
            <li className="top__list">
              <span className="top__name">地点</span>
              <span className="top__text">一楼健身房</span>
            </li>
            <li className="top__list">
              <span className="top__name">其它</span>
              <span className="top__text">随意</span>
            </li>
          </ul>
        </div>
        <div className="poem">
          <h5 className="poem__title">开篇诗</h5>
          <ul>
            <li className="poem__list">夏气赶清秋，无风汗自流。</li>
            <li className="poem__list">瘦身多运动，何必去寻粥。</li>
          </ul>
        </div>
        <div className="detail">
          <img className="detail__img" src={imgContent0} alt=""/>
          <p className="detail__text">遇到点皮肤瘙痒就想偷个懒，才几分钟就枯燥的想结束，这不是你的错，你只是少个人给你挠痒，为你打气。</p>
          <p className="detail__text">只要你我相伴，以前3分钟的热度也将延长到30分钟。甩掉的是脂肪，收获的是健康，拥有完美身材的同时，更有意志力的增强。</p>
          <p className="detail__text">只需迈出一步，也就成功了一半。</p>
          <button className="join__btn" onClick={() => this.handlerModal(true)}>我参与</button>
        </div>
        <About />
        {
          isShowMyCode && <ModalCode handlerModal={this.handlerModal.bind(this)} />
        }
      </div>
    );
  }
}

export default connect<Props>(
  (state: RootState): any => ({
  }),
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Home);