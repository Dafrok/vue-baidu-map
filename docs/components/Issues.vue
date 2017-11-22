<template lang="pug">
md-layout.issues
  md-layout.issues-card
    md-dialog-alert(
      md-content="表单信息不完整！"
      md-ok-text="确定"
      ref="dialog")
    md-whiteframe
      md-tabs(@change="changeType")
        md-tab(:md-label="type.label" v-for="type in formTypes")
          form
            md-input-container(v-for="item in type.items")
              label(v-text="item.label")
              md-input(v-if="item.type === 'input'" v-model="formData[type.name][item.name]", :required="true")
              md-textarea(v-if="item.type === 'textarea'" v-model="formData[type.name][item.name]")
            md-button.md-raised.md-primary(@click="openIssue") 提交
  md-layout.issues-card
    md-whiteframe
      md-toolbar
        span.md-title 预览
      article.md-preview.markdown-body(v-html="preview")
</template>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt({
  html: true
})

const formTypes = {
  bug: {
    label: 'BUG 反馈',
    items: {
      browserVer: '浏览器版本号',
      depVer: 'Vue 版本号',
      packageVer: '组件库版本号',
      description: {
        label: '现象描述',
        type: 'textarea'
      },
      errMsg: {
        label: '完整异常信息',
        type: 'textarea'
      },
      demo: '在线示例 / 仓库 URL',
      code: {
        label: '复现用例',
        type: 'textarea'
      },
      expect: {
        label: '预期输出',
        type: 'textarea'
      },
      output: {
        label: '实际输出',
        type: 'textarea'
      }
    }
  },
  featrue: {
    label: '功能请求',
    items: {
      demo: '在线示例 URL',
      description: {
        label: '功能描述',
        type: 'textarea'
      },
      usage: {
        label: '用法示例',
        type: 'textarea'
      }
    }
  },
  documentation: {
    label: '文档问题',
    items: {
      url: '相关文档 URL',
      description: {
        label: '问题描述',
        type: 'textarea'
      },
      suggestion: {
        label: '改进建议',
        type: 'textarea'
      }
    }
  }
}

const typesOrder = [
  {
    name: 'bug',
    items: [
      'browserVer',
      'depVer',
      'packageVer',
      'description',
      'errMsg',
      'demo',
      'code',
      'expect',
      'output'
    ]
  },
  {
    name: 'featrue',
    items: [
      'demo',
      'description',
      'usage'
    ]
  },
  {
    name: 'documentation',
    items: [
      'url',
      'description',
      'suggestion'
    ]
  }
]

export default {
  data () {
    const types = []
    const formData = {
      common: {},
      bug: {},
      featrue: {},
      documentation: {}
    }
    typesOrder.forEach(type => {
      const typeDetail = {
        name: type.name,
        label: formTypes[type.name].label,
        items: []
      }
      typeDetail.items.push({
        name: 'title',
        label: 'ISSUE 标题',
        type: 'input'
      })
      type.items.forEach(name => {
        typeDetail.items.push({
          name,
          label: formTypes[type.name].items[name].label || formTypes[type.name].items[name],
          type: formTypes[type.name].items[name].type || 'input'
        })
        formData[type.name][name] = ''
      })
      types.push(typeDetail)
    })
    return {
      issueType: 0,
      formTypes: types,
      formData
    }
  },
  methods: {
    changeType (i) {
      this.issueType = i
    },
    openDialog (ref) {
      this.$refs[ref].open()
    },
    closeDialog (ref) {
      this.$refs[ref].close()
    },
    openIssue () {
      let isValid = true
      const {issueType, content, formTypes, formData, openDialog} = this
      const data = formData[formTypes[issueType].name]
      for (const key in data) {
        if (!data[key]) {
          isValid = false
        }
      }
      const url = 'https://github.com/Dafrok/vue-baidu-map/issues/new?title=' + encodeURIComponent(data.title) + '&body=' + encodeURIComponent(content)
      isValid ? global.open(url) : openDialog('dialog')
    }
  },
  computed: {
    content () {
      let lines = []
      const {formTypes, issueType, formData} = this
      const formType = formTypes[issueType]
      formType.items.forEach(item => {
        if (item.name === 'title') {
          lines.push(`## [${formType.label}] ${formData[formType.name][item.name] || ''}`)
          lines.push('')
        } else {
          lines.push(`### ${item.label}`)
          lines.push('')
          if (item.type === 'textarea') {
            lines.push('```')
            lines.push(`${formData[formType.name][item.name]}`)
            lines.push('```')
          } else {
            lines.push(`${formData[formType.name][item.name]}`)
          }
          lines.push('')
        }
      })
      lines.push(`<!-- Created by issues bot. DO NOT REMOVE. -->`)
      return lines.join('\n')
    },
    preview () {
      return md.render(this.content)
    }
  }
}
</script>

<style lang="stylus">
.issues
  .issues-card
    padding 20px 10px
    flex 1
    .md-whiteframe
      flex 1
  .md-preview
    display block
    flex 1
    padding 10px
    pre
      background #eee
  .doc
    padding 0
</style>
