﻿using Server.Models;
using Server.PresentationModel;
using Server.Services;
using System.Collections.Generic;

namespace Server.Logic
{
    public class FilterLogic
    {
        public List<UserFilter> filterUsertoTeach(UserContext _context, Idiomas idiomas)
        {
            List<UserFilter> users = new List<UserFilter>();
            int len = idiomas.idiomasens.Count;

            foreach(Usuario u in _context.Get())
            {
                foreach(Idioma i in u.IdiomasApr)
                {
                    for(int x = 0; x < len; x++)
                    {
                        if (i.INombre == idiomas.idiomasens[0])
                        {
                            UserFilter user = new UserFilter();
                            user.Nombre = u.Nombre;
                            user.IdiomasApr = u.IdiomasApr;
                            user.IdiomasEns = u.IdiomasEns;
                            user.edad = u.Edad;
                            user.porigen = u.POrigen;
                            users.Add(user);
                            break;
                        }
                    }
                }
            }

            return users;
        }

        public List<UserFilter> secondFilter(UserContext _context, Idiomas info)
        {
            List<UserFilter> users = new List<UserFilter>();
            var firstFilter = filterUsertoTeach(_context, info);
            int len = info.idiomasApr.Count;
            foreach (UserFilter u in firstFilter)
            {
                foreach(Idioma f in u.IdiomasEns)
                {
                    for (int i = 0; i < len; i++)
                    {
                        if (f.INombre == info.idiomasApr[i])
                        {
                            if (users.Contains(u))
                            {
                                break;
                            }
                            users.Add(u);
                            break;
                        }
                    }
                    
                }
            }


            return users;
        }

        public List<UserFilter> thirdFilter(UserContext _context, Idiomas filter)
        {
            List<UserFilter> users = new List<UserFilter>();
            var filter2 = secondFilter(_context, filter);
            foreach(UserFilter u in filter2)
            {
                if(u.porigen == filter.pOrigen)
                {
                    users.Add(u);
                }
            }


            return users;
        }
    }
}
