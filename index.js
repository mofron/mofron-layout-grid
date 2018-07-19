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
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (idx, tgt) {
        try {
            if ((null === this.value()) || (0 === this.value().length)) {
                throw new Error('emply value');
            }
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
