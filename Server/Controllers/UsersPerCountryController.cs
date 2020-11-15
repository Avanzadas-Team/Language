using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Server.Logic;
using Server.PresentationModel;
using Server.Services;

namespace Server.Controllers
{
    [Route("upc")]
    [ApiController]
    public class UsersPerCountryController : ControllerBase
    {
        private readonly UserContext _userService;
        private readonly AdminLogic _al;

        public UsersPerCountryController(UserContext userService)
        {
            _userService = userService;
            _al = new AdminLogic();
        }
        [HttpGet]
        public List<UsersPerCountry> GetUsers()
        {
            var result = _al.GetUsersPerCountry(_userService);
            return result;
        }

    }
}
