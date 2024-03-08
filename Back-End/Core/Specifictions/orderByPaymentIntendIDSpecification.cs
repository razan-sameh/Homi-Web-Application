using Core.Models.OrderAggregate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specifictions
{
    public class orderByPaymentIntendIDSpecification:BaseSpecification<Order>
    {
        public orderByPaymentIntendIDSpecification(string paymentIntendId):base(o=>o.PaymentIntentId == paymentIntendId)
        {
                
        }
    }
}
