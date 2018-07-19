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
            this.prmOpt(po);
            this.getParam().check(
                (rate) => {
                    try {
                        if (false === Array.isArray(rate)) {
                            throw new Error('invalid parameter');
                        }
                        for (let ridx in rate) {
                            if ('number' !== typeof rate[ridx]) {
                                throw new Error('invalid parameter');
                            }
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }
            );
            
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
    
}
module.exports = mofron.layout.Grid;
/* end of file */
