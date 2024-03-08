using System.ComponentModel.DataAnnotations;
namespace API.Dtos
{
    public class ReviewDto
    {
        public int Id { get; set; }
        //public int ProductId { get; set; }
        //public string UserId { get; set; }
        //public string ReviewerName { get; set; }
        public string Content { get; set; }
        public int Rating { get; set; }
        
    }
}
