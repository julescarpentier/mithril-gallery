import './style.css';

import m from 'mithril';
import ImageGrid from './views/ImageGrid';
import "masonry-layout";
import 'imagesloaded';

m.mount(document.body, ImageGrid);

const grid = document.querySelector('.grid');
let msnry;

imagesLoaded(grid, () => {
    msnry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
    });
})
