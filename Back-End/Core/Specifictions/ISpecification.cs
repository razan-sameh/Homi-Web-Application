using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specifictions
{
    public interface ISpecification<T>
    {
        Expression<Func<T,bool>> Criteria { get; }
        List <Expression<Func<T,object>>> Include { get; }
        Expression<Func<T, object>> Orderby { get; }
        Expression<Func<T, object>> OrderbyDesc { get; }
        int Take { get; }
        int Skip { get; }
        bool IsPaggingEnabled { get; }
    }
}
