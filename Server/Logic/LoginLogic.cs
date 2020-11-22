using Server.Models;
using Server.PresentationModel;
using Server.Services;

namespace Server.Logic
{
    public class LoginLogic
    {
        public LoginReturn login(UserContext context, LoginInfo info)
        {
            LoginReturn user = new LoginReturn();
            foreach (Usuario u in context.Get())
            {
                if(u.Contrasena == info.contrasena && u.NombreUsuario == info.nombreU)
                {
                    user.id = u.Id;
                    user.tipoU = u.TipoU;
                    break;
                }
            }
            return user;
        }
    }
}
