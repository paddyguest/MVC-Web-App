using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_Web_App.Controllers
{
    public class APIController : Controller
    {
        // GET: API
        public ActionResult GetData()
        {
            List<Person> Persons = new List<Person>();
            Persons.Add(new Person { Name = "Paddy", FavouriteColour = "Blue" });
            Persons.Add(new Person { Name = "Frank", FavouriteColour = "Brown" });

            return Json(Persons, JsonRequestBehavior.AllowGet);
        }
    }

    class Person
    {
        public string Name { get; set; }
        public string FavouriteColour { get; set; }
    }
}