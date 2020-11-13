using Server.PresentationModel;
using System;
using System.Collections.Generic;
using Server.Services;
using Server.Models;
using System.Text;

namespace Server.Logic
{
    public class AdminLogic
    {
        public List<Users> GetAllUsers(UserContext context)
        {
            List<Users> userList = new List<Users>();
           
            Users temp = new Users();
            foreach(Usuario u in context.Get())
            {
                temp.Name = u.Nombre;
                temp.Country = u.POrigen;

                StringBuilder bld = new StringBuilder();
                for (int i = 0; i < u.IdiomasApr.Count; ++i)
                {
                    bld.Append(u.IdiomasApr[i].INombre);
                    bld.Append(" ");
                }
                temp.Languages = bld.ToString();
                userList.Add(temp);
            }
            return userList;
        }
    }
}
