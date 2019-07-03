/**
 * @file mofron-layout-grid/index.js
 * @author simpart
 */
const mf = require("mofron");

mofron.layout.Grid = class extends mofron.Layout {
    
    constructor (po) {
        try {
            super();
            this.name("Grid");
            this.prmMap("ratio");
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
                    "display"   : "flex",
                    "flex-wrap" : "wrap"
                });
            }
            tgt.width(this.ratio()[(idx % this.ratio().length)] + '%');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    ratio (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_ratio) ? [25,25,25,25] : this.m_ratio;
            }
            /* setter */
            if (false === Array.isArray(prm)) {
                throw new Error("invalid parameter");
            }
            for (let ridx in prm) {
                if ("number" !== typeof prm[ridx]) {
                    throw new Error("invalid parameter");
                }
            }
            this.m_ratio = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    setDirctSize (prm, upd) {
        try {
            if (true !== Array.isArray(prm)) {
                throw new Error("invalid parameter");
            }
            /* get sum */
            let sum_num = 0;
            for (let pidx in prm) {
                sum_num += mf.func.getSize(prm[pidx]).value();
            }
            /* get ratio */
            let ratio = [];
            for (let pidx2 in prm) {
                let buf = mf.func.getSize(prm[pidx2]).value()/sum_num;
                ratio.push(Math.floor(buf*1000)/10);
            }
            this.m_ratio = ratio;
            if (false === this.isInited()) {
                return;
            }
            if (ratio.length !== this.component().child().length) {
                throw new Error("invalid parameter");
            }
            let chd = this.component().child();
            for (let cidx in chd) {
                chd[cidx].width(prm[cidx]);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.layout.Grid;
/* end of file */
