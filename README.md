# mofron-layout-grid
grid layout for mofcon

# install
```bash
npm install mofron-layout-grid
```

# sample
```js
try {
    let mf   = require('mofron');
    require('mofron-comp-text');
    require('mofron-layout-grid');

    new mf.Component({
        addLayout : new mf.layout.Grid([50,50]),    // the sum must be 100
        child     : [ 
                      new mf.comp.Text('TEXT_1'),
                      new mf.comp.Text('TEXT_2'),
                      new mf.comp.Text('TEXT_3')    // word wrap
                    ],
        visible   : true
    });

} catch (e) {
    console.error(e.stack);
}
```
