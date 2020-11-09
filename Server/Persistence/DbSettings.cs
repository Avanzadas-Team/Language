namespace Server.Persistence
{
    public interface IDatabaseSettings
    {
        string CollectionName { get; set; }
        string DatabaseName { get; set; }
    }
    public class DatabaseSettings : IDatabaseSettings
    {
        public string CollectionName { get; set; }
        public string DatabaseName { get; set; }
    }
}