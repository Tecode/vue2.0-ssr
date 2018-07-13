<template>
  <div>
    <h1 class="less">Less Hellow World</h1>
    <h3 class="loh">Sa</h3>
  </div>
</template>

<style lang="less" scoped>
  @base: #f938ab;
  .less{
    color: #f85f65;
    display: flex;
    transition :transform 1s;
    -moz-animation: 5;
  }
  .loh{
    color: @base;
      &:extend(.less);
      &:hover{
          color: blueviolet;
      }
  }
</style>