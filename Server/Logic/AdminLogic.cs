using Server.PresentationModel;
using System.Collections.Generic;
using Server.Services;
using Server.Models;
using System.Text;
using System.Linq;
using System;

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


        public List<UsersPerCountry> GetUsersPerCountry(UserContext context)
        {
            var countryList = GetCountries(context.Get());
            var amount = GetAmount(countryList, context.Get());
            UsersPerCountry upc = new UsersPerCountry();
            List<UsersPerCountry> query = new List<UsersPerCountry>();
            for(int i=0; i < countryList.Count; i++)
            {
                upc.Country = countryList.ElementAt(i);
                upc.Amount = amount.ElementAt(i);
                query.Add(upc);
            }
            return query;
        }

        
        protected List<string> GetCountries(List<Usuario> users)
        {
            List<string> countryList = new List<string>();
            foreach (Usuario u in users)
            {
                if ((!countryList.Any()))
                {
                    countryList.Add(u.POrigen);
                }
                else if (!(countryList.Contains(u.POrigen)))
                {
                    countryList.Add(u.POrigen);
                }
            }

            return countryList;
        }

        protected List<int> GetAmount(List<string> countries, List<Usuario> users)
        {
            List<int> countList = new List<int>();
            foreach (string c in countries)
            {
                var count = 0;
                foreach (Usuario u in users)
                {
                    if (c == u.POrigen)
                    {
                        count++;
                    }
                }
                countList.Add(count);
            }
            return countList;
        }

        public List<UserPerLang> GetUsersPerTLangs(UserContext context)
        {
            var langList = GetTLangs(context.Get());
            var amount = GetTLangsAmount(langList, context.Get());
            List<UserPerLang> query = new List<UserPerLang>();
            for (int i = 0; i < langList.Count; i++)
            {
                UserPerLang upl = new UserPerLang();
                upl.Lang = langList.ElementAt(i);
                upl.Amount = amount.ElementAt(i);
                query.Add(upl);
            }
            return query;
        }

        public List<UserPerLang> GetUsersPerLLangs(UserContext context)
        {
            var langList = GetLLangs(context.Get());
            var amount = GetLLangsAmount(langList, context.Get());
            List<UserPerLang> query = new List<UserPerLang>();
            for (int i = 0; i < langList.Count; i++)
            {
                UserPerLang upl = new UserPerLang();
                upl.Lang = langList.ElementAt(i);
                upl.Amount = amount.ElementAt(i);
                query.Add(upl);
            }
            return query;
        }

        protected List<string> GetTLangs(List<Usuario> users)
        {
            List<string> langList = new List<string>();
            foreach (Usuario u in users)
            {
                for (int i =0; i < u.IdiomasEns.Count; i++)
                {
                    if ((!langList.Any()))
                    {
                        langList.Add(u.IdiomasEns[i].INombre);
                    }
                    else
                    {
                        if (!(langList.Contains(u.IdiomasEns[i].INombre)))
                        {
                            langList.Add(u.IdiomasEns[i].INombre);
                        }
                    }
                }
            }
            return langList;
        }

        protected List<int> GetTLangsAmount(List<string> langs, List<Usuario> users)
        {
            List<int> countList = new List<int>();
            foreach (string l in langs)
            {
                var count = 0;
                foreach (Usuario u in users)
                {
                    for (int i = 0; i < u.IdiomasEns.Count; i++)
                    {
                        if (l == u.IdiomasEns[i].INombre)
                        {
                            count++;
                        }
                    }
                }
                countList.Add(count);
            }

            return countList;
        }


        protected List<string> GetLLangs(List<Usuario> users)
        {
            List<string> langList = new List<string>();
            foreach (Usuario u in users)
            {
                for (int i = 0; i < u.IdiomasApr.Count; i++)
                {
                    if ((!langList.Any()))
                    {
                        langList.Add(u.IdiomasApr[i].INombre);
                    }
                    else
                    {
                        if (!(langList.Contains(u.IdiomasApr[i].INombre)))
                        {
                            langList.Add(u.IdiomasApr[i].INombre);
                        }
                    }
                }
            }
            return langList;
        }

        protected List<int> GetLLangsAmount(List<string> langs, List<Usuario> users)
        {
            List<int> countList = new List<int>();
            foreach (string l in langs)
            {
                var count = 0;
                foreach (Usuario u in users)
                {
                    for (int i = 0; i < u.IdiomasApr.Count; i++)
                    {
                        if (l == u.IdiomasApr[i].INombre)
                        {
                            count++;
                        }
                    }
                }
                countList.Add(count);
            }

            return countList;
        }

    }

}


