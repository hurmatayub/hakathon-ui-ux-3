const heroImagesSchema = {
    name: "heroimage",
    type: "document",
    title: "Two Hero Images",
    fields: [
      {
        name: "image1",
        type: "image",
        title: "First Image",
      },
      {
        name: "image2",
        type: "image",
        title: "Second Image",
      },
    ],
  };
  
  export default heroImagesSchema;
  