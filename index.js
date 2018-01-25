/**
 * @file mofron-layout-grid/index.js
 * @author simpart
 */

/**
 * @class mofron.layout.Grid
 * @brief Grid layout class
 */
mofron.layout.Grid = class extends mofron.Layout {
    
    constructor (prm) {
        try {
            super();
            this.name('Grid');
            this.prmOpt(
                (('object' === typeof prm) && (undefined !== prm[0])) ?
                    { 'value' : prm } : prm
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    layoutConts (idx, tgt) {
        try {
            if ((null === this.value()) || (0 === this.value().length)) {
                throw new Error('emply value');
            }
            if (0 === idx) {
                this.target().style({
                    'display'   : 'flex',
                    'flex-wrap' : 'wrap'
                });
            }
            let wid = this.value()[(idx % this.value().length)] + '%';
            if ('function' === typeof tgt['width']) {
                tgt.width(wid);
            } else {
                tgt.style({ 'width' : wid });
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    value (val) {
        try {
            if (undefined === val) {
                /* getter */
                return (undefined === this.m_value) ? null : this.m_value;
            }
            /* setter */
            if (('object' !== typeof val) || (undefined === val[0])) {
                throw new Error('invalid parameter');
            }
            let sum = 0;
            for (let idx_val in val) {
                sum += val[idx_val];
            }
            this.m_value = val;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.layout.Grid;
