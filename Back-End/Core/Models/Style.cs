using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Core.Models
{
    public class Style :BaseModel
    {
        [Display(Name = "Style Name")]
        public string Name { get; set; }
    }
}
