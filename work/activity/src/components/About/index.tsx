import * as React from 'react';
import './styles';

import imgMy from '../../assets/images/my.jpeg';

// 关于我
const About = () => {
  return (
    <div className="about">
      <p className="about__title">关于我，故意让你看不清</p>
      <div className="my-wrap">
        <img className="about__img" src={imgMy} alt="" />
      </div>
      <div className="about__text">
        <p className="about__text-m">姓黎名聪，江西人，学编程，习英语，好文史，爱诗词，终日泡馆，常年健身，今年23岁，至今未成婚娶。</p>
        <p className="about__text-m">为人放诞不羁，轻浮好笑，德肩刘备，信比尾生，宽似韩安国。正效仿司马迁壮游天下，游学四海以成才。</p>
      </div>
    </div>
  )
}

export default About;