using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specifictions
{//Specification Pattern
    //Specification evaluator : get queries bona2an 3la specifications mo3ina bt7sal
    //

    public class BaseSpecification<T> : ISpecification<T>
    {
        public BaseSpecification()
        {

        }
        public BaseSpecification(Expression<Func<T, bool>> criteria)//, List<Expression<Func<T, object>>> include
        {
            Criteria = criteria;
            //Include = include;
        }

        public Expression<Func<T, bool>> Criteria { get; }

        public List<Expression<Func<T, object>>> Include { get; } = new List<Expression<Func<T, object>>>();

        public Expression<Func<T, object>> Orderby { get; private set; }

        public Expression<Func<T, object>> OrderbyDesc { get; private set; }

        public int Take { get; private set; }

        public int Skip { get; private set; }

        public bool IsPaggingEnabled { get; private set; }

        protected void AddInclude( Expression <Func<T,object>> includeExpression)
        {
            Include.Add(includeExpression);
        }
        protected void AddOrderBy(Expression<Func<T, object>> OrderbyExpression)
        {
            Orderby = OrderbyExpression;
        }
        protected void AddOrderByDes(Expression<Func<T, object>> OrderbyDesExpression)
        {
            OrderbyDesc = OrderbyDesExpression;
        }
        protected void ApplyPagging(int skip , int take)
        {
            Skip = skip;
            Take = take;
            IsPaggingEnabled = true;
        }
    }
}
