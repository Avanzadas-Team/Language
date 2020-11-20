using Server.Models;
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
            int len = idiomas.idiomas.Count;

            foreach(Usuario u in _context.Get())
            {
                foreach(Idioma i in u.IdiomasApr)
                {
                    for(int x = 0; x < len; x++)
                    {
                        if (i.INombre == idiomas.idiomas[0])
                        {
                            UserFilter user = new UserFilter();
                            user.Nombre = u.Nombre;
                            user.IdiomasApr = u.IdiomasApr;
                            user.IdiomasEns = u.IdiomasEns;
                            users.Add(user);
                            break;
                        }
                    }
                }
            }

            return users;
        }

        public List<UserFilter> secondFilter(UserContext _context, SecondFilter info)
        {
            List<UserFilter> users = new List<UserFilter>();
            Idiomas idiomas = new Idiomas();
            idiomas.idiomas = info.idiomasEns;
            var firstFilter = filterUsertoTeach(_context, idiomas);
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
    }
}
