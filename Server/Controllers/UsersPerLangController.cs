using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Server.Logic;
using Server.PresentationModel;
using Server.Services;

namespace Server.Controllers
{
    [Route("upl")]
    [ApiController]
    public class UsersPerLangController : ControllerBase
    {
        private readonly UserContext _userService;
        private readonly AdminLogic _al;

        public UsersPerLangController(UserContext userService)
        {
            _userService = userService;
            _al = new AdminLogic();
        }

        [HttpGet("teach")]
        public List<UserPerLang> GetUsersTLang()
        {
            var result = _al.GetUsersPerTLangs(_userService);
            return result;
        }

        [HttpGet("learn")]
        public List<UserPerLang> GetUsersLLang()
        {
            var result = _al.GetUsersPerLLangs(_userService);
            return result;
        }
    }
}
