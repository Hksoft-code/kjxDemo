
import React, { Component } from "react";

import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carasoul";
const ImageSlider = () => {

    let cards = [
        {
          key: uuidv4(),
          content: (
            <Card imagen="https://hypergr.am/wp-content/uploads/2022/06/web-design-2.jpg" />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
          )
        }
      ];

    //   let cards = [
    //     {
    //       key: uuidv4(),
    //       content: (
    //         <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
    //       )
    //     },
    //     {
    //       key: uuidv4(),
    //       content: (
    //         <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
    //       )
    //     },
    //     {
    //       key: uuidv4(),
    //       content: (
    //         <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
    //       )
    //     },
    //     {
    //       key: uuidv4(),
    //       content: (
    //         <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
    //       )
    //     },
    //     {
    //       key: uuidv4(),
    //       content: (
    //         <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
    //       )
    //     }
    //   ];

    return (
        <div className="">
        <Carousel
          cards={cards}
          height="500px"
          width="100%"
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
      </div>
    )
}

export default ImageSlider;