import * as React from 'react';
import './styles';

import { TopText } from './Modal';


interface Props {
}

interface Stage {
}

class Hot extends React.Component<Props, Stage> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="hot">
        <TopText />
        <div className="poem">
          <p>品三国</p>
          <p>开篇诗</p>
          <ul>
            <li>天地循环随六合，群雄逐鹿起八荒。</li>
            <li>武将逞能风化云，谋士抬眼智多星。</li>
            <li>夺旗斩将驰万里，力透苍穹算人心。</li>
            <li>英雄已然东流水，却有豪气留今论。</li>
          </ul>
          <p>打油之作，无关紧要，聊尔一笑，莫要推敲。</p>
          <p>重点是邀你一起品三国，论英雄。</p>
          <p>地点一楼，我带有瓜子、麻花、饮料，你带一股豪情而来。</p>
          <ul>
            <li><a href="https://www.douban.com/note/625560115/?dt_dapp=1&dt_platform=wechat_friends">三国武将谁更能打</a></li>
            <li>民间排行："一吕二赵三典韦，四关五马六张飞"</li>
            <li>娱乐版武将排行：上将军潘凤，万人敌的邢道荣，擒杀名将的马忠</li>
            <li><a href="https://www.douban.com/note/629819129/?dt_dapp=1&dt_platform=wechat_friends">三国谋士排名</a></li>
            <li>三国第一人物是曹操？</li>
            <li>水镜先生为什么说：卧龙虽得其主，却不得其时</li>
            <li><a href="https://www.douban.com/note/234331342/?dt_dapp=1&dt_platform=wechat_friends">灵异事件</a></li>
          </ul>

          <p>刘备的“仁”，诸葛亮的“智”，关羽的“义”，张飞的“勇”。这是此书最大看点。</p>
        </div>
      </div>
    );
  }
}

export default Hot;

