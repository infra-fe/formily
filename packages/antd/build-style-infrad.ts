import { build } from '../../scripts/build-style'

build({
  esStr: 'infrad/es/',
  libStr: 'infrad/lib/',
  allStylesOutputFile: 'dist/infrad.css',
})
