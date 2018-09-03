/**
 * @file mofron-layout-grid/index.js
 * @author simpart
 */

/**
 * @class mofron.layout.Grid
 * @brief Grid layout class
 */
mofron.layout.Grid = class extends mofron.Layout {
    
    constructor (po) {
        try {
            super();
            this.name('Grid');
            this.prmMap('rate');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (idx, tgt) {
        try {
            if (0 === idx) {
                this.component().style({
                    'display'   : 'flex',
                    'flex-wrap' : 'wrap'
                });
            }
            tgt.width(this.rate()[(idx % this.rate().length)] + '%');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    rate (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_rate) ? [25,25,25,25] : this.m_rate;
            }
            /* setter */
            if (false === Array.isArray(prm)) {
                throw new Error('invalid parameter');
            }
            for (let ridx in prm) {
                if ('number' !== typeof prm[ridx]) {
                    throw new Error('invalid parameter');
                }
            }
            this.m_rate = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.layout.Grid;
/* end of file */
