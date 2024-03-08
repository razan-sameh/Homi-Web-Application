using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Core.Models.OrderAggregate
{
    public enum OrderStatus
    {
        [EnumMember(Value = "Pending")]
        Pending,
        [EnumMember(Value = "PaymentReceived")]
        PaymentReceived,
        [EnumMember(Value = "PaymentFiled")]
        PaymentFiled
    }
    public class Order:BaseModel
    {
        public Order()
        {

        }
        //public Order(IReadOnlyList<OrderItem> orderItems, string buyerEmail, AddressForOrders shipToAddress,
        //  DeliveryMethod deliveryMethod, decimal subtotal)
        //{
        //    BuyerEmail = buyerEmail;
        //    ShipToAddress = shipToAddress;
        //    DeliveryMethod = deliveryMethod;
        //    OrderItems = orderItems;
        //    SubTotal = subtotal;
            
        //}
        public Order(IReadOnlyList<OrderItem> orderItems, string buyerEmail, AddressForOrders shipToAddress,
           DeliveryMethod deliveryMethod, decimal subtotal, string paymentIntentId)
        {
            BuyerEmail = buyerEmail;
            ShipToAddress = shipToAddress;
            DeliveryMethod = deliveryMethod;
            OrderItems = orderItems;
            SubTotal = subtotal;
            PaymentIntentId = paymentIntentId;
        }
        public string BuyerEmail { get; set; }
        public DateTime OrderDate { get; set; }= DateTime.UtcNow;
        [NotMapped]
        public AddressForOrders ShipToAddress { get; set; }
        public DeliveryMethod DeliveryMethod { get; set; }
        public IReadOnlyList<OrderItem> OrderItems { get; set;}
        public decimal SubTotal { get; set; }
        public OrderStatus Status { get; set; }= OrderStatus.Pending;
        public string PaymentIntentId { get; set; }

        public decimal GetToltal()
        {
            return SubTotal + DeliveryMethod.Price;
        }

    }
}
