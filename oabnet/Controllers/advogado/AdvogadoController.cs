using Microsoft.AspNetCore.Mvc;

namespace oabnet.Controllers.advogado
{
    public class AdvogadoController : Controller
    {
        private readonly ApplicationDbContext _context;

        public AdvogadoController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            var advogados = _context.Advogados.Include(a => a.Municipio).ToList();
            return View(advogados);
        }
    }
}
