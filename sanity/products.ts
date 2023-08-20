export const product = {
    name: "product", //json key
    type: 'document',
    title: "Product", // for sanity studio
    fields: [
        {
            name: "productname", //json 
            title: "Product Name", // sanity studio
            type: "string",
        },
        {
            name: "description", //json 
            title: "Product Description", // sanity studio
            type: "string",
        },
        {
            name: "image", //json 
            title: "Product Image", // sanity studio
            type: "image",
        },
        {
            name: "price", //json 
            title: "Product Price", // sanity studio
            type: "number",
        },
    ]
};
