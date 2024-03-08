using Core.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Models
{
    public class Review:BaseModel
    {

        public string UserId { get; set; }

        //public virtual AppUser User { get; set; }
        public int ProductId { get; set; }

        public virtual Product Product { get; set; }
        public string ReviewerName { get; set; }
        public string Content { get; set; }
        public int Rating { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

    }
}
