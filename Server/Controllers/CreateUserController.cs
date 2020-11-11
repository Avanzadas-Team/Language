using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.Services;

namespace Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CreateUserController : ControllerBase
    {
        private readonly UserContext _context;

        public CreateUserController(UserContext context)
        {
            _context = context;
        }

        [HttpPost]
        public int register(Usuario user)
        {
            Usuario u = new Usuario();

            u.IdiomasApr = user.IdiomasApr;
            u.MedioPrac = user.MedioPrac;
            u.Nombre = user.Nombre;
            u.POrigen = user.POrigen;
            u.Sexo = user.Sexo;
            u.TipoU = user.TipoU;
            u.Hobbies = user.Hobbies;
            u.Edad = user.Edad;

            //_context.Create(u);
            return 1;
        }
    }
}
