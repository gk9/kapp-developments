import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import './swiper.min.css';
import './gallery.css';


class Gallery extends React.Component {

  render() {
    const params = {
      speed: 800,
      lazy: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      keyboard: true
    }
    return (
      <div className={this.props.restFade}>
        <h4>Check out our work:</h4>
        <Swiper {...params}>
           {this.props.album.map((item, index) => (
             <div key={index}>
               <img
                 alt={item}
                 src={item}
                 className="swiper-lazy"
               />
             </div>
           ))}
        </Swiper>
      </div>
    )
  }
}

export default Gallery
