<template>
  <div class="svg-box">
    <svg width="500px" height="auto">
      <defs>
        <linearGradient id="Gradient1">
          <stop class="stop1" offset="0%"/>
          <stop class="stop3" offset="100%"/>
        </linearGradient>
      </defs>
      <rect id="rect1" x="10" y="10" width="50vw" height="100"/>
    </svg>

    <svg width="8cm" height="3cm" viewBox="0 0 800 300"
         xmlns="http://www.w3.org/2000/svg" version="1.1">
      <desc>基本动画元素</desc>
      <rect x="1" y="1" width="798" height="298"
            fill="none" stroke="blue" stroke-width="2"></rect>
      <!-- 矩形位置和大小的动画 -->
      <rect id="RectElement" x="300" y="100" width="300" height="100"
            fill="rgb(255,255,0)">
        <animate attributeName="x" attributeType="XML"
                 begin="0s" dur="9s" fill="freeze" from="300" to="0"/>
        <animate attributeName="y" attributeType="XML"
                 begin="0s" dur="9s" fill="freeze" from="100" to="0"/>
        <animate attributeName="width" attributeType="XML"
                 begin="0s" dur="9s" fill="freeze" from="300" to="800"/>
        <animate attributeName="height" attributeType="XML"
                 begin="0s" dur="9s" fill="freeze" from="100" to="300"/>
      </rect>
      <!-- 创建新的用户坐标空间，所以text是从新的(0,0)开始，后续的变换都是针对新坐标系的 -->
      <g transform="translate(100,100)">
        <!-- 下面使用了set去动画visibility，然后使用animateMotion,
     animate和animateTransform执行其他类型的动画 -->
        <text id="TextElement" x="0" y="0"
              font-family="Verdana" font-size="35.27" visibility="hidden">
          It's alive!
          <set attributeName="visibility" attributeType="CSS" to="visible"
               begin="3s" dur="6s" fill="freeze"/>
          <animateMotion path="M 0 0 L 100 100"
                         begin="3s" dur="6s" fill="freeze"/>
          <animate attributeName="fill" attributeType="CSS"
                   from="rgb(0,0,255)" to="rgb(128,0,0)"
                   begin="3s" dur="6s" fill="freeze"/>
          <animateTransform attributeName="transform" attributeType="XML"
                            type="rotate" from="-30" to="0"
                            begin="3s" dur="6s" fill="freeze"/>
          <animateTransform attributeName="transform" attributeType="XML"
                            type="scale" from="1" to="3" additive="sum"
                            begin="3s" dur="6s" fill="freeze"/>
        </text>
      </g>
    </svg>

    <!-- 视窗的背景 -->
    <rect x="0" y="0" width="800" height="300" fill="#FF8080"></rect>

    <!-- 第一步绘制一个带有蒙板的Text，可以看到蒙板的透明度效果已经应用到字上了.
         第二步是绘制一个不带蒙板的Text，来作为第一步Text的轮廓 -->
    <use xlink:href="#Text" fill="blue" mask="url(#Mask)"></use>
    <use xlink:href="#Text" fill="none" stroke="black" stroke-width="2"></use>
    </svg>

    <svg id="obturateur2" class="obturateur" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%"
         height="200px" viewBox="0 0 200 200" enable-background="new 0 0 200 200" onclick="obt2.reset().play();"
         fill="none">
      <path d="M10,100A90,90 0,1,1 190,100A90,90 0,1,1 10,100"
            style="stroke-dasharray: 566, 568; stroke-dashoffset: 0;"></path>
      <path d="M14.260000000000005,100A85.74,85.74 0,1,1 185.74,100A85.74,85.74 0,1,1 14.260000000000005,100"
            style="stroke-dasharray: 539, 541; stroke-dashoffset: 0;"></path>
      <path d="M27.052999999999997,100A72.947,72.947 0,1,1 172.947,100A72.947,72.947 0,1,1 27.052999999999997,100"
            style="stroke-dasharray: 459, 461; stroke-dashoffset: 0;"></path>
      <path d="M60.26,100A39.74,39.74 0,1,1 139.74,100A39.74,39.74 0,1,1 60.26,100"
            style="stroke-dasharray: 250, 252; stroke-dashoffset: 0;"></path>
      <path d="M34.042,131.189L67.047,77.781" style="stroke-dasharray: 63, 65; stroke-dashoffset: 0;"></path>
      <path d="M31.306,75.416L92.41,60.987" style="stroke-dasharray: 63, 65; stroke-dashoffset: 0;"></path>
      <path d="M68.81,34.042L122.219,67.046" style="stroke-dasharray: 63, 65; stroke-dashoffset: 0;"></path>
      <path d="M124.584,31.305L139.013,92.409" style="stroke-dasharray: 63, 65; stroke-dashoffset: 0;"></path>
      <path d="M165.957,68.809L132.953,122.219" style="stroke-dasharray: 63, 65; stroke-dashoffset: 0;"></path>
      <path d="M168.693,124.584L107.59,139.012" style="stroke-dasharray: 63, 65; stroke-dashoffset: 0;"></path>
      <path d="M131.19,165.957L77.781,132.953" style="stroke-dasharray: 63, 65; stroke-dashoffset: 0;"></path>
      <path d="M75.417,168.693L60.987,107.59" style="stroke-dasharray: 63, 65; stroke-dashoffset: 0;"></path>
    </svg>
  </div>
</template>

<script type="text/babel">
  /**
   * Created by wcz on 16/9/6.
   */
  import Vivus from '../libs/vivus.min';

  export default {
    ready () {
      new Vivus('obturateur2', {
        duration: 100,
      });
    }
  };
</script>

<style>
  #rect1 {
    fill: url(#Gradient1);
  }

  .stop1 {
    stop-color: #20fcff;
  }

  .stop3 {
    stop-color: #1cffce;
  }

  path {
    stroke: black;
    stroke-width: 3px;
  }

  svg {
    stroke-dasharray: 63, 65;
    stroke-dashoffset: 0;
  }
</style>
