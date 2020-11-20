using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Server.Logic;
using Server.PresentationModel;
using Server.Services;

namespace Server.Controllers
{
    [Route("filter")]
    [ApiController]
    public class FilterController : ControllerBase
    {
        private readonly UserContext _userService;
        private readonly FilterLogic _fl;

        public FilterController(UserContext userService)
        {
            _userService = userService;
            _fl = new FilterLogic();
        }

        [HttpPost("one")]
        public List<UserFilter> filterOne(Idiomas idiomas)
        {
            var result = _fl.filterUsertoTeach(_userService, idiomas);

            return result;
        }

        [HttpPost("two")]
        public List<UserFilter> filterTwo(SecondFilter filter)
        {
            var result = _fl.secondFilter(_userService, filter);
            return result;
        }
    }
}
