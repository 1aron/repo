import { execSync } from 'node:child_process'
import { expectExist } from '../../../../utils/expect-exist'

it('exports multiple outputs', () => {
    execSync('../../dist/bin/index pack --shakable', { cwd: __dirname, stdio: 'pipe' })
    expectExist([
        'dist/cjs/index.js',
        'dist/esm/index.mjs',
        'dist/index.browser.js',
        'dist/index.browser.d.ts',
        'dist/index.d.ts',
        'dist/options.d.ts',
    ])
})