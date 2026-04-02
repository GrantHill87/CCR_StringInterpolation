using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Testing.Models;

namespace Testing.Controllers
{
    public class ProductController : Controller
    {
        private readonly IProductRepository repo;

        public ProductController(IProductRepository repo)
        {
            this.repo = repo;
        }
        public IActionResult Index()//is IActionResult already predefined somewhere?
        {//utilizes the Query method, which queries all data within a given database.
            var products = repo.GetAllProducts();//assigning variable products to store values returned by the GetAllProducts method.
            return View(products);//returns a display of values stored within the variable products.
        }

        public IActionResult ViewProduct(int id)//utilizes the QuerySingle method, which only queries a single row of data (from the ProductRepository).
        {//ViewProduct has been defined here has a method, but a view instance of it was created after the fact, within the Product directory, under the Views directory.
            var product = repo.GetProduct(id);

            return View(product);
        }

        public IActionResult UpdateProduct(int id)
        {
            Product prod = repo.GetProduct(id);

            if (prod == null)
            {
                return View("ProductNotFound");
            }
            return View(prod);//passes the result of this script to our view.
        }

        public IActionResult UpdateProductToDatabase(Product product)
        {
            repo.UpdateProduct(product);

            return RedirectToAction("ViewProduct", new { id = product.ProductID });
        }

        public IActionResult InsertProduct()
        {
            var prod = repo.AssignCategory();
            return View(prod);
        }

        public IActionResult InsertProductToDatabase(Product productToInsert)
        {
            repo.InsertProduct(productToInsert);
            return RedirectToAction("Index");
        }

        public IActionResult DeleteProduct(Product product)
        {
            repo.DeleteProduct(product);
            return RedirectToAction("Index");
        }
    }
}
