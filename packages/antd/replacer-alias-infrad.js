exports.default = ({ orig, file, config }) => {
  return orig
    .replace(`from 'antd`, `from 'infrad`)
    .replace(`import 'antd`, `import 'infrad`)
    .replace(`import("antd`, `import("infrad`)
    .replace(`require("antd`, `require("infrad`)
}
