using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Core.Models
{
    public class Color : BaseModel
    {
        [Display(Name = "Color Name")]
        public string Name { get; set; }
    }
}
