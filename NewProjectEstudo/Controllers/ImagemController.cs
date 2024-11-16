using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewProjectEstudo.Controllers
{
    public class ImagemController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
