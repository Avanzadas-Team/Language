using System.Collections.Generic;
using System;

namespace Server.Persistence
{
    interface IDbContext
    {
        List<Object> Get();

        Object Get(string id);

        Object Create(Object obj);

        void Update(string id, Object obj);

        void Remove(Object obj);

        void Remove(string obj);
    }
}