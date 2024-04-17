import { resolve } from 'path'
export const projRoot = resolve(__dirname, '..', '..', '..')
export const pkgRoot = resolve(projRoot, 'packages')

export const epRoot = resolve(pkgRoot, 'happy-ui')

export const compRoot = resolve(pkgRoot, 'components')

/** `/dist` */
export const buildOutput = resolve(projRoot, 'dist')
/** `/dist/happy-ui` */
export const epOutput = resolve(buildOutput, 'happy-ui')

export const epPackage = resolve(projRoot, 'package.json')


