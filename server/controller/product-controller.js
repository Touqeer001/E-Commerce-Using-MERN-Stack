
//"getProducts" is an asynchronous function that accepts two parameters: request and response. These parameters are likely related to handling HTTP requests and responses in a web server or API context.

//Inside the try block:
// It attempts to retrieve all products from the imported products model using the find method. This suggests that products is likely a database model or an object representing a collection of products.
// Once the products are fetched, it responds with an HTTP status of 200 (OK) and sends the fetched products as JSON in the response.


import products from "../Model/Product-Schema.js";

export const getProducts = async (request, response) => {
  try {
    const product = await products.find({});
    response.status(200).json(product);
  } catch (error) {
    response.status(500).json({ messege: error.messege });
  }
};




export const getProductById = async (request, response) => {
  try {
    const id=request.params.id;
      const Product= await products.findOne({ 'id':id});
      response.status(200).json(Product);
  }catch (error) {
    response.status(500).json({ messege: error.messege });

  }
}
