<template>
  <div
    class="progress"
    :style="{
      borderRadius: brdRs + 'px',
      height: pcsHeight + 'px',
    }"
  >
    <div
      class="progress-bar"
      :class="{
        'progress-bar-striped': showStriped ,
        'progress-bar-active':showAct ,
      }"
      :style="{
        width: processDept + '%',
        backgroundColor: bgColor,
        color: txtColor
      }"
    >
      <span :class="{showTxt: 'hidden-txt'}">{{ txt +`%` }}</span>
    </div>
  </div>
</template>

<script>
export function testColor(str) {
  const reg = new RegExp('^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$')
  return reg.test(str)
}
export default {
  name: 'ProgressBar',
  props: {
    bgColor: {
      type: String,
      validator: value => {
        return testColor(value)
      },
      default: '#337ab7'
    },
    txtColor: {
      type: String,
      validator: value => {
        return testColor(value)
      },
      default: '#fff'
    },
    showTxt: Boolean,
    showStriped: Boolean,
    showAct: Boolean,
    txt: {
      type: Number,
      default: 0
    },
    brdRs: {
      type: Number,
      validator: value => {
        return value >= 0 && value <= 20
      },
      default: 4
    },
    processDept: {
      type: Number,
      validator: value => value >= 0 && value <= 100,
      default: 30
    },
    pcsHeight: {
      type: Number,
      default: 10
    }
  }
}
</script>

<style lang="scss" scoped>

.progress {
  height: 20px;
  margin-bottom: 0px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 10px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);

  &-bar {
    float: left;
    width: 0;
    height: 100%;
    font-size: 12px;
    line-height: 20px;
    color: #fff;
    text-align: center;
    background-color: #337ab7;
    -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);
    -webkit-transition: width .6s ease;
    -o-transition: width .6s ease;
    transition: width .6s ease;

    &-striped {
      background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
      background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
      background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);
      -webkit-background-size: 40px 40px;
      background-size: 40px 40px;
    }

    &-active {
      -webkit-animation: progress-bar-stripes 2s linear infinite;
      -o-animation: progress-bar-stripes 2s linear infinite;
      animation: progress-bar-stripes 2s linear infinite;
    }

    .hidden-txt {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }
  }
}
@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: -40px 0;
  }
  to {
    background-position: 0 0;
  }
}
</style>
