# mofron-layout-grid
grid layout for [mofron](https://github.com/simpart/mofron)

# install
```bash
npm install mofron-layout-grid
```

# sample
```js
try {
    let mf   = require('mofron');
    let Text = require('mofron-comp-text');
    let Grid = require('mofron-layout-grid');

    new mf.Component({
        addLayout : new Grid([50,50]),  // the sum must be 100
        child     : [ Text('TEXT_1'),
                      Text('TEXT_2'),
                      Text('TEXT_3')    // word wrap
                    ],
        visible   : true
    });
} catch (e) {
    console.error(e.stack);
}
```
