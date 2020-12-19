import m from 'mithril';

const Image = {
    view: (vnode) => ([
        <img src={vnode.attrs.url} alt="Random image from Picsum"/>,
        <div class="author">{vnode.attrs.author}</div>
    ]),
};

export default Image;