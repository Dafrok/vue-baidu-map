/**
 * @file compile & output regular vue component files
 */
const compiler = require('vue-template-compiler')
const path = require('path')
const fs = require('fs')
const pug = require('pug')
const babel = require('babel-core')
const rmdir = require('rmdir')

const rootPath = path.resolve(__dirname, '../src')

const isArray = Array.isArray

function attrsToString (attrs) {
  let ret = ''
  for (const name in attrs) {
    const value = attrs[name]
    if (value === true) {
      ret += `${name} `
    } else if (value) {
      ret += `${name}="${value}" `
    }
  }
  return ret
}

function tagToString (tag) {
  return tag ? `<${tag.type} ${attrsToString(tag.attrs)}>${tag.content}</${tag.type}>` : ''
}

function reverseToComponent (componentObj) {
  let ret = ''
  for (const key in componentObj) {
    const tag = componentObj[key]
    if (isArray(tag)) {
      ret += tag.map(tagToString).join('')
    } else {
      ret += tagToString(tag)
    }
  }
  return ret
}

function transformAlias (content, level) {
  return babel.transform(content, {
    plugins: [
      [
        'module-alias', [
          {src: '../'.repeat(level), expose: '@'}
        ]
      ]
    ]
  }).code
}

function transformES (content) {
  return babel.transform(content, {
    presets: [
      'es2015'
    ]
  }).code
}

function walkComponents (rootPath, level = 0, pathName = '.', result = []) {
  const files = fs.readdirSync(rootPath)
  files.forEach(file => {
    const filePath = path.resolve(rootPath, file)
    const extName = path.extname(filePath)
    const isDirectory = fs.lstatSync(filePath).isDirectory()
    if (isDirectory) {
      walkComponents(filePath, level + 1, path.join(pathName, file), result)
    } else if (extName === '.vue') {
      const componentFile = fs.readFileSync(filePath).toString()
      const component = compiler.parseComponent(componentFile)
      const baseName = path.basename(filePath)
      if (component.template) {
        component.template.content = pug.render(component.template.content)
        if (component.template.attrs) {
          component.template.attrs.lang = false
        }
      }
      if (component.script) {
        component.script.content = transformAlias(component.script.content, level)
      }
      result.push({
        content: reverseToComponent(component),
        path: pathName,
        name: baseName
      })
    } else if (extName === '.js') {
      const content = fs.readFileSync(filePath).toString()
      const baseName = path.basename(filePath)
      result.push({
        content: transformES(transformAlias(content, level)),
        path: pathName,
        name: baseName
      })
    }
  })
  return result
}

function mkdirp (filepath) {
  var dirname = path.dirname(filepath)

  if (!fs.existsSync(dirname)) {
    mkdirp(dirname)
  }
  if (!fs.existsSync(filepath)) {
    fs.mkdirSync(filepath)
  }
}

const compiledFiles = walkComponents(rootPath)

const componentDir = path.resolve(__dirname, '../components')
rmdir(componentDir, () => {
  mkdirp(componentDir)
  compiledFiles.forEach(file => {
    const pathName = path.resolve(componentDir, file.path)
    mkdirp(pathName)
    const fd = fs.openSync(path.resolve(pathName, file.name), 'w')
    fs.writeSync(fd, file.content)
    fs.closeSync(fd)
  })
})
