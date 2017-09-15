<template lang="pug">
router-view
</template>

<style lang="stylus">
.md-theme-default .markdown-body pre code
  background-color: inherit;
  color: inherit;
.markdown-body
  a
    color #4183C4
    &.absent
      color #c00
    &.anchor 
      display block
      padding-left 30px
      margin-left -30px
      cursor pointer
      position absolute
      top 0
      left 0
      bottom 0
    &:first-child
      h1, h2, h3, h4, h5, h6 
        margin-top 0
        padding-top 0 

  h1, h2, h3, h4, h5, h6
    margin 20px 0 10px
    padding 5px 0
    font-weight bold
    -webkit-font-smoothing antialiased
    cursor text
    position relative 
    line-height 1
    &:hover a.anchor
      text-decoration none 
    tt, code 
      font-size inherit
    p 
      margin-top 0 

  h1 
    font-size 28px
    color black 

  h2 
    font-size 24px
    border-bottom 1px solid #ccc
    color black

  h3
    font-size 18px 

  h4
    font-size 16px 

  h5
    font-size 14px 

  h6 
    color #777777
    font-size 14px 

  p, blockquote, ul, ol, dl, li, /*table*/, pre 
    margin 15px 0 

  hr 
    border 0 none
    color #ccc
    height 4px
    padding 0

  li 
    margin 0
    p.first 
      display inline-block 

  ul, ol 
    padding-left 30px 
    &:first-child
      margin-top 0 

  dl 
    padding 0 
    dt 
      font-size 14px
      font-weight bold
      font-style italic
      padding 0
      margin 15px 0 5px 
      &:first-child 
        padding 0 
      & > :first-child 
        margin-top 0 
      & > :last-child 
        margin-bottom 0 
    dd 
      margin 0 0 15px
      padding 0 15px 
      & > :first-child 
        margin-top 0 
      & > :last-child 
        margin-bottom 0 

  blockquote 
    border-left 4px solid #ddd
    padding 0 15px
    color #777
    & > :first-child 
      margin-top 0 
    & > :last-child 
      margin-bottom 0 

  .doc-table
    table
      min-width 600px
      padding 0
      border-collapse collapse 
    tr
      background-color white
      margin 0
      padding 0 
      &:nth-child(2n + 1) 
        td
          background-color #f8f8f8 
      th 
        font-weight bold
        margin 0
        padding 10px 13px
        border-bottom 1px solid #eee
        text-align left
      td
        margin 0
        padding 10px 13px 
      th, td
        min-width 100px
        &:first-child
          margin-top 0
        &:last-child
          margin-bottom 0 
  img 
    max-width 100% 

  span
    &.frame 
      display block
      overflow hidden 
      & > span 
        border 1px solid #ddd
        display block
        float left
        overflow hidden
        margin 13px 0 0
        padding 7px
        width auto 
      span
        span
          clear both
          color #333
          display block
          padding 5px 0 0 
        img 
          display block
          float left 

    .align-center 
      display block
      overflow hidden
      clear both 
      & > span 
        display block
        overflow hidden
        margin 13px auto 0
        text-align center 
      span img 
        margin 0 auto
        text-align center 
    .align-right 
      display block
      overflow hidden
      clear both 
      & > span 
        display block
        overflow hidden
        margin 13px 0 0
        text-align right 
      span img 
        margin 0
        text-align right 
    .float-left 
      display block
      margin-right 13px
      overflow hidden
      float left 
      span 
        margin 13px 0 0 
    .float-right 
      display block
      margin-left 13px
      overflow hidden
      float right 
      & > span 
        display block
        overflow hidden
        margin 13px auto 0
        text-align right 

  code, tt 
    margin 0 2px
    padding 0 5px
    white-space nowrap
    border 1px solid #eaeaea
    background-color #f8f8f8
    border-radius 3px 

  pre code 
    margin 0
    padding 0
    white-space pre
    border none
    background transparent

  pre 
    // background-color #f8f8f8
    border 1px solid #ccc
    font-size 13px
    line-height 19px
    overflow auto
    padding 6px 10px
    border-radius 3px 
  pre code, pre tt 
    background-color transparent
    border none 

  sup 
    font-size 0.83em
    vertical-align super
    line-height 0

// * 
//   -webkit-print-color-adjust exact
// @media print 
//   /*table, */pre 
//     page-break-inside avoid
//   pre 
//     word-wrap break-word
</style>
