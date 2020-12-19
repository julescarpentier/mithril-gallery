import m from "mithril";

const nImages = 10;
const nPages = 50;

const getRandomPage = () => Math.floor(Math.random() * nPages);

const loremPicsumUrl = () => `https://picsum.photos/v2/list?limit=${nImages}&page=${getRandomPage()}`;

const parseResponse = (result) => result.map((e) => ({
    url: e.download_url,
    author: e.author,
}));

const ImageList = {
    list: [],
    loadImages: () => m.request({
        method: 'GET',
        url: loremPicsumUrl(),
    }).then((result) => ImageList.list = parseResponse(result)),
}

export default ImageList;