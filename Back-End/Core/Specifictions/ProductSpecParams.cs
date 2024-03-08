using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specifictions
{
    public class ProductSpecParams
    {
        private const int MaxPageSize = 100;
        public int PageIndex { get; set; } = 1;
        private int _PageSize { get; set; } = 6;
        public int PageSize { get => _PageSize; set=> _PageSize = (value > MaxPageSize) ? MaxPageSize : value; }
        public int? brandID { get; set; }
        public int? typeID { get; set; }
        public int? colorId { get; set; }
        public int? styleID { get; set; }
        public string? sort { get; set; }
        private string _search { get; set; }
        public string? search { get => _search; set => _search = value.ToLower();}


    }
}
