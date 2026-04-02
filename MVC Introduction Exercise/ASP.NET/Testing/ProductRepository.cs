using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Testing.Models;

namespace Testing
{
    public class ProductRepository : IProductRepository//make sure this class inherits from the IProductRepository interface.
    {
        private readonly IDbConnection _conn;//when running this program, it will generate a webpage through your default web browser, on your local server host... and a red line will appear at the bottom of VSC, suggesting that the program is in a continuum of running.... meaning that if the red square stop button is pressed up top, the program will stop running, and consequently, the webpage will shut down.

        public ProductRepository(IDbConnection conn)//constructor.
        {
            _conn = conn;
        }

        public IEnumerable<Product> GetAllProducts()//GetProducts()//used hotkey Ctrl + . to have VSC provide me with suggestions that helped me to validate my implementation of the ProductRepository class, since it conforms to the IProductRepository interface, but it was showing a red squiggly line underneath,
        {//stubbed out method from the interface this class is deriving from.
            return _conn.Query<Product>("SELECT * FROM PRODUCTS;");//("Select * from products");//looks like SQL to me.... so why isn't all of the font capitalized?
        }

        public Product GetProduct(int id)//now, the stubbed out method from the product interface is being scripted and given functionality.
        {
            return _conn.QuerySingle<Product>("SELECT * FROM PRODUCTS WHERE PRODUCTID = @id", new { id = id });//utilized SQL scripting to generate what we want our database to do when we call this method in our controller for product.
        }//be aware that any SQL syntactic errors won't show up until runtime, and when they do.... try referring back to older SQL projects that showcase proper syntax in SQL.... I ran into a runtime error because of this.

        public void UpdateProduct(Product product)
        {
            _conn.Execute("UPDATE products SET Name = @name, Price = @price WHERE ProductID = @id", new { name = product.Name, price = product.Price, id = product.ProductID });//here, we aren't necessarily returning anything, or requesting a display of data, but instead, we are executing something, as in providing a user accessing our webpage with the ability to update a listed product in real time.
        }
        public void InsertProduct(Product productToInsert)//Try to keep these in order of how they were organized within the IProductRepository file.... it's just easier to know what's what.
        {
            _conn.Execute("INSERT INTO products (NAME, PRICE, CATEGORYID) VALUES (@name, @price, @categoryID);", new { name = productToInsert.Name, price = productToInsert.Price, categoryID = productToInsert.CategoryID });
        }

        public IEnumerable<Category> GetCategories()
        {
            return _conn.Query<Category>("SELECT * FROM categories;");
        }

        public Product AssignCategory()
        {
            var categoryList = GetCategories();
            var product = new Product();
            product.Categories = categoryList;
            return product;
        }

        public void DeleteProduct(Product product)
        {
            _conn.Execute("DELETE FROM REVIEWS WHERE ProductID = @id;", new { id = product.ProductID });
            _conn.Execute("DELETE FROM Sales WHERE ProductID = @id;", new { id = product.ProductID });
            _conn.Execute("DELETE FROM Products WHERE ProductID = @id;", new { id = product.ProductID });
        }
    }
}


