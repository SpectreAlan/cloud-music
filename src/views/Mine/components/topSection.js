import React from 'react';

const topSection = (profile) => (
  <>
    <div className="info">
      <img src={profile.avatarUrl} alt=""/>
      <div>
        <h2>{profile.nickname}</h2>
        <span>{profile.province}</span>
      </div>
    </div>
    <ul className="buttons">
      <li>
        <i className='iconfont'>&#xe626;</i>
        <span>本地音乐</span>
      </li>
      <li>
        <i className='iconfont'>&#xe725;</i>
        <span>我的电台</span>
      </li>
      <li>
        <i className='iconfont'>&#xe619;</i>
        <span>我的收藏</span>
      </li>
      <li>
        <i className='iconfont'>&#xe616;</i>
        <span>关注新歌</span>
      </li>
    </ul>
  </>
)
export default topSection
