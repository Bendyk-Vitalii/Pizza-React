import express from "express";
import cors from "cors";
import { products } from "./data";

const app = express();
app.use(cors())
const PORT = 5000;

app.get('/api/products', (req, res) => {
    res.send(products);
});
app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if(product) {
        res.send(product);
    } else {
        res.status(404).send({message: 'Product Not Found!'})
    }   
});
 
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));