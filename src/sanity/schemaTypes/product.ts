const productSchema = {
  name: "product", 
  type: "document", 
  title: "Car", 
  fields: [
    {
      name: "name",
      type: "string",
      title: "Car Name", 
    },
    {
      name: "type",
      type: "string",
      title: "Car Type",
    },
    {
      name: "images",
      type: "array",
      title: "Product Images",
      of: [{ type: "image" }],
    },
    {
      name: "description",
      type: "text",
      title: "Description of product",
    },
    {
      name: "slug",
      type: "slug",
      title: "Product Slug",
      options: {
        source: "name",
      },
    },
    {
      name: "feul",
      type: "image",
      title: "Feul",
    },
    {
      name: "feulCapacity",
      type: "string",
      title: "Feul Capacity",
    },
    {
      name: "transmission",
      type: "image",
      title: "Transmission",
    },
    {
      name: "transmissionn",
      type: "string",
      title: "Transmissionn",
    },
    {
      name: "capacity",
      type: "image",
      title: "People",
    },
    {
      name: "peopleCapacity",
      type: "string",
      title: "People",
    },
    {
      name: "price",
      type: "number",
      title: "Price per Day", 
    },
    {
      name: "originalPrice",
      type: "number",
      title: "Original Price",
    },
    {
      name: "liked",
      type: "image",
      title: "Liked",
    },
    {
      name: "buttonText",
      type: "string",
      title: "Button Text", 
      initialValue: "Rent Now", 
    },
    {
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    },
  ],
};

export default productSchema;
