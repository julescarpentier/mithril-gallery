import m from 'mithril';
import ImageList from '../models/ImageList';
import Image from './Image';

const getRandomClassList = () => {
    const rng_width = Math.random();
    let classList = "grid-item";

    if (rng_width < 0.1) {
        classList += " grid-item--width3"
    } else if (rng_width < 0.4) {
        classList += " grid-item--width2"
    }

    return classList
}

const ImageGrid = {
    oninit: ImageList.loadImages,
    view: () => (
        <div class="grid">
            <div class="grid-sizer"/>
            {ImageList.list.map((e) => (
                <div class={getRandomClassList()}>
                    <Image url={e.url} author={e.author}/>
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;
