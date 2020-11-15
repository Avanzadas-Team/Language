using Server.PresentationModel;
using System.Collections.Generic;
using Server.Services;
using Server.Models;
using System.Text;
using System.Linq;

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
            for(int i=0; i < countryList.Count(); i++)
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
                if ((countryList != null) && (!countryList.Any()))
                {
                    countryList.Add(u.POrigen);
                }
                else if (countryList.Contains(u.POrigen) == false)
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
        }

}
