using Testing.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Testing
{
    public interface IProductRepository
    {
        public IEnumerable<Product> GetAllProducts();//GetProducts();
        public Product GetProduct(int id);//created a new stubbed out method within our interface, that's intended to retrieve singular product information.
        public void UpdateProduct(Product product);//ah, because we're not returning a value with this method, we can have its return type set to void.
        public void InsertProduct(Product productToInsert);
        public IEnumerable<Category> GetCategories();
        public Product AssignCategory();

        public void DeleteProduct(Product product);
    }
}
