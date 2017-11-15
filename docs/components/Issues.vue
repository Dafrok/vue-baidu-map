<template lang="pug">
md-layout
  md-layout
    md-tabs(@change="changeType")
      md-tab(:md-label="type.label" v-for="type in formTypes") 
        form(novalidate)
          md-input-container(v-for="item in type.items")
            label(v-text="item.label")
            md-input(v-if="item.type === 'input'" v-model="formData[type.name][item.name]")
            md-textarea(v-if="item.type === 'textarea'" v-model="formData[type.name][item.name]")
          md-button.md-raised.md-primary(@click="openIssue") 提交
  md-layout
    article.md-preview
      pre(v-text="preview")
</template>

<script>
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
      'description'
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
    openIssue () {
    }
  },
  computed: {
    preview () {
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
    }
  }
}
</script>

<style lang="stylus">
.md-preview
  display block
  flex 1
  background #f9f9f9
  pre
    border none
.doc
  padding 0
</style>
