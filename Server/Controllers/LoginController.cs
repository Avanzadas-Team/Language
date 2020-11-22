using Microsoft.AspNetCore.Mvc;
using Server.Logic;
using Server.PresentationModel;
using Server.Services;

namespace Server.Controllers
{
    [Route("login")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly UserContext _userService;
        private readonly LoginLogic _ll;
        public LoginController(UserContext userService)
        {
            _userService = userService;
            _ll = new LoginLogic();
        }

        [HttpPost]
        public LoginReturn login(LoginInfo info)
        {
            var login = _ll.login(_userService, info);
            return login;
        }
    }
}
