using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Models;
using Core.Specifictions;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    //fayda mn fwayed eno 3ml base Entity(ana m3mlthash)
    public class SpecificationEvaluator<TEntity> where TEntity : BaseModel
    {
        public static IQueryable <TEntity> GetQuery(IQueryable<TEntity> inputQuery,ISpecification<TEntity> spec)
        {
            var query = inputQuery;
            if (spec.Criteria!= null) //y3ni law fe specification mb3oot
            {
                query = query.Where(spec.Criteria);//Ha Filter b el criteria elly gyally
            }
            if (spec.Orderby != null) //y3ni law fe specification mb3oot
            {
                query = query.OrderBy(spec.Orderby);//Ha Filter b el criteria elly gyally
            }
            if (spec.OrderbyDesc != null) //y3ni law fe specification mb3oot
            {
                query = query.OrderByDescending(spec.OrderbyDesc);//Ha Filter b el criteria elly gyally
            }
            if (spec.IsPaggingEnabled == true) //y3ni law fe specification mb3oot
            {
                query = query.Skip(spec.Skip).Take(spec.Take);//Ha Filter b el criteria elly gyally
            }

            //law fe 7aga fel Include hadefha m3aya as a navigational property
            query =spec.Include.Aggregate(query,(current, include)=>current.Include(include));
            return query;
        }
    }
}
