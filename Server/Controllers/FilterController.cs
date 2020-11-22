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
        public List<UserFilter> filterTwo(Idiomas filter)
        {
            var result = _fl.secondFilter(_userService, filter);
            return result;
        }

        [HttpPost("three")]
        public List<UserFilter> filterThree(Idiomas filter)
        {
            var result = _fl.thirdFilter(_userService, filter);
            return result;
        }

        [HttpPost("fourth")]
        public List<UserFilter> filterFour(Idiomas filter)
        {
            var result = _fl.fourthFilter(_userService, filter);
            return result;
        }

        [HttpGet("languagesens/{id}")]
        public List<string> getLanguages(string id)
        {
            var result = _fl.getLanguagesensByID(_userService, id);
            return result;
        }

        [HttpGet("languagesapr/{id}")]
        public List<string> getLanguagesapr(string id)
        {
            var result = _fl.getLanguagesaprByID(_userService, id);
            return result;
        }
    }
}
