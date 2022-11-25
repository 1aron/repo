import { mark } from './mark'
import { log } from './log'

import { add } from './add'
import { error } from './error'
import { conflict } from './conflict'
import { ok } from './ok'
import { del } from './del'
import { valid } from './valid'
import { invalid } from './invalid'
import { info } from './info'
import { success } from './success'
import { warn } from './warn'
import { pass } from './pass'
import { tree } from './tree'
import { watch } from './watch'
import { fail } from './fail'

export default log
export {
    add as a,
    add,
    del as d,
    del,
    valid as o,
    valid,
    invalid as x,
    invalid,
    info as i,
    info,
    watch as w, watch,
    success,
    error,
    fail,
    warn,
    pass,
    conflict,
    ok,
    tree,
    mark
}
export * from '../types'