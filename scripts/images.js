const images = {
    "render": "images/render-cropped.png",
    "hotel": "https://www.coco-mat.com/wp-content/uploads/2018/02/SpickandSpan.jpg"
}

const urlToUrl = (url) => {
    return `url(${url})`;
};

const slides = [
    {
        "name": "render",
        "image": urlToUrl(images["render"]),
        "bg": "transparent",
        "content": `<p id="sleek">A sleek, professional package conceals industrial-grade technology.</p>`
    }
    ,
    {
        "name": "hotel",
        "image": `linear-gradient(to right, #222222ee 0%, #222222cc 40%, transparent), ${urlToUrl(images["hotel"])}`,
        "bg": urlToUrl(images["hotel"]),
        "content": `<p id="hotel">Rosie is suitable for operations of all sizes and requirements, including single-family homes, hotels, hospitals, and clean rooms.</p>`
    }
];