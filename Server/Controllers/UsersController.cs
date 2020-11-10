using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserContext _userService;


        public UsersController(UserContext userService)
        {
            _userService = userService;
        }

        // GET: api/<UsersController>
        [HttpGet]
        public List<Usuario> Get()
        {
            return _userService.Get();
        }



     
    }
}
