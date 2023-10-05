using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using PrimerProyecto.Models;
using System.Diagnostics;



namespace PrimerProyecto.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }


        public IActionResult Formulario()
        {
            return View();
        }

        [HttpPost]
       public IActionResult RecibirData([FromBody] PersonaModel modelo)
        {
            var cuenta = modelo;
            Console.WriteLine("a");
            
            Console.WriteLine("Nombre: " + cuenta.name + "\nApellido: " + cuenta.lastn 
                + "\nCorreo: " + cuenta.mail + "\nMensaje: " + cuenta.msg);
            return Json(cuenta);
        }
        



        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}