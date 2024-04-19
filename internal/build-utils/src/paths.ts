import { resolve } from 'path'
export const projRoot = resolve(__dirname, '..', '..', '..')

export const pkgRoot = resolve(projRoot, 'packages')

export const huRoot = resolve(pkgRoot, 'happy-ui')

export const compRoot = resolve(pkgRoot, 'components')

/** `/dist` */
export const buildOutput = resolve(projRoot, 'dist')
/** `/dist/happy-ui` */
// export const huOutput = resolve(buildOutput, 'happy-ui')
/** `/dist` */
export const huOutput = buildOutput

export const huPackage = resolve(huRoot, 'package.json')


