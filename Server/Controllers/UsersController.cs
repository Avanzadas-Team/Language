﻿using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Server.Logic;
using Server.Models;
using Server.PresentationModel;
using Server.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserContext _userService;
        private readonly AdminLogic _al;

        public UsersController(UserContext userService)
        {
            _userService = userService;
            _al = new AdminLogic();
        }

        // GET: api/<UsersController>
        [HttpGet]
        public List<Usuario> Get()
        {
            return _userService.Get();
        }

        // GET: users/All
        [HttpGet("All")]
        public List<Users> GetUsers()
        {
            var result = _al.GetAllUsers(_userService);
            return result;
        }

        [HttpPost("username")]
        public Usuario GetUserbyUserName(Usuario user)
        {

            var users = this._userService.Get(user.Id);

            return users;
        }

        [HttpPost("update")]
        public Usuario UpdatebyUserName(Usuario user)
        {
            var us = _userService.GetUserName(user.NombreUsuario);
            us.MedioPrac = user.MedioPrac;
            us.Hobbies = user.Hobbies;
            _userService.Update(us.Id, us);
            return user;
        }
    }
}
