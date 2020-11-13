namespace Server.PresentationModel
{
    public class Users
    {
        private string name;
        private string country;
        private string languages;

        public string Name
        {
            get { return name; }
            set { name = value; }
        }

        public string Country
        {
            get { return country; }
            set { country = value; }
        }

        public string Langs
        {
            get { return languages; }
            set { languages = value; }
        }

    }
}
