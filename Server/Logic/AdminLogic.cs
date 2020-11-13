using Server.PresentationModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Server.Services;
using Server.Models;

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
                temp.name = u.Nombre;
                temp.country = u.POrigen;

                foreach (Idioma i in u.IdiomasApr)
                {
                    temp.languages =temp.languages + i.INombre + " ";
                }
                Console.WriteLine(temp.languages);
                userList.Add(temp);
            }
            return userList;
        }
    }
}
