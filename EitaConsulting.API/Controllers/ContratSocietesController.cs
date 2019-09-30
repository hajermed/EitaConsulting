using System.Threading.Tasks;
using EitaConsulting.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EitaConsulting.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ContratSocietesController: ControllerBase
    {
        private readonly DataContext _context;
        public ContratSocietesController(DataContext context)
        {
            _context = context;
        }
        // GET api/values
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetContratSocietes()
        {
            var contratSocieteList = await _context.ContratSocietes.ToListAsync();

            return Ok(contratSocieteList);
        }

        // GET api/values/5
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetContratSociete(int id)
        {
            var contratSociete = await _context.ContratSocietes.FirstOrDefaultAsync(x => x.ContratSocieteID == id);

            return Ok(contratSociete);
        }
         // POST api/values
        [HttpPost]
        public void Post([FromBody] string contratSociete)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string contratSociete)
        {
        }

        // // DELETE api/values/5
        // [HttpDelete("{id}")]
        // public void Delete(int id)
        // {
        // }
        //Delete : ContratSociete/Delete/5
        // public void Delete(int? id)
        // {
        //     if (id == null)
        //     {
        //         return NotFound();
        //     }
        //     var contratSociete = await _context.ContratSocietes.SingleOrDefaultAsync(m => m.ContratSocieteID == id);
        //     if (contratSociete == null)
        //     {
        //         return NotFound();
        //     }
        //     return View(contratSociete);
        // }

        //Post: ContratSociete/Delete/5
        [HttpPost,ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> RemoveContratSociete(int id)
        {
            var contratSociete = await _context.ContratSocietes.SingleOrDefaultAsync(m => m.ContratSocieteID == id);
            _context.ContratSocietes.Remove(contratSociete);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(GetContratSocietes));
        }
    }
}