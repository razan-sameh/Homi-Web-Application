using Core.Interfaces;
using Core.Models;
using Core.Models.OrderAggregate;
using Microsoft.Extensions.Configuration;
using Stripe;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Services
{
    public class PaymentService :IPaymentService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ICartRepository _basketRepository;
        private readonly IConfiguration _config;
        public PaymentService(IUnitOfWork unitOfWork, ICartRepository basketRepository,
            IConfiguration config)
        {
            _config = config;
            _basketRepository = basketRepository;
            _unitOfWork = unitOfWork;
        }
        public async Task<CustomerCart> CreateOrUpdatePaymentIntent(string basketId)
        {
            StripeConfiguration.ApiKey = _config["StripeSettings:SecretKey"];

            var basket = await _basketRepository.GetCartAsync(basketId);

            if (basket == null) return null;

            //var shippingPrice = 0m;

            //if (basket.DeliveryMethodId.HasValue)
            //{
            //    var deliveryMethod = await _unitOfWork.Repository<DeliveryMethod>().GetByIdAsync((int)basket.DeliveryMethodId);
             //   shippingPrice = deliveryMethod.Price;
           // }

            foreach (var item in basket.Items)
            {
                var productItem = await _unitOfWork.Repository<Core.Models.Product>().GetByIdAsync(item.Id);
                if (item.Price != productItem.PPrice)
                {
                    item.Price = productItem.PPrice;
                }
            }

            var service = new PaymentIntentService();

            PaymentIntent intent;

            if (string.IsNullOrEmpty(basket.PaymentIntentId))
            {
                var options = new PaymentIntentCreateOptions
                {
                    Amount = (long)basket.Items.Sum(i => i.Quantity * (i.Price * 100)),
                    Currency = "usd",
                    PaymentMethodTypes = new List<string> { "card" }
                };
                intent = await service.CreateAsync(options);
                basket.PaymentIntentId = intent.Id;
                basket.ClientSecret = intent.ClientSecret;
            }
            else
            {
                var options = new PaymentIntentUpdateOptions
                {
                    Amount = (long)basket.Items.Sum(i => i.Quantity * (i.Price * 100)) 
                };
                await service.UpdateAsync(basket.PaymentIntentId, options);
            }

            await _basketRepository.UpdateBasketAsync(basket);

            return basket;
        }

        public async Task<Order> UpdateOrderPaymentFailed(string paymentIntentId)
        {
        //    var spec = new OrderByPaymentIntentIdSpecification(paymentIntentId);
        //    var order = await _unitOfWork.Repository<Order>().GetEntityWithSpec(spec);

        //    if (order == null) return null;

        //    order.Status = OrderStatus.PaymentFailed;
        //    await _unitOfWork.Complete();

        //    return order;
        throw new NotImplementedException();
        }

        public async Task<Order> UpdateOrderPaymentSucceeded(string paymentIntentId)
        {
            //    var spec = new OrderByPaymentIntentIdSpecification(paymentIntentId);
            //    var order = await _unitOfWork.Repository<Order>().GetEntityWithSpec(spec);

            //    if (order == null) return null;

            //    order.Status = OrderStatus.PaymentReceived;
            //    await _unitOfWork.Complete();

            //    return order;
            throw new NotImplementedException();
        }
    }
}
