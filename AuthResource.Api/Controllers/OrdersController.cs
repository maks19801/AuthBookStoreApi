using AuthResource.Api.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace AuthResource.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly BookStore store;
        private string UserId => (User.Claims.Single(c => c.Type == ClaimTypes.NameIdentifier).Value);

        public OrdersController(BookStore store)
        {
            this.store = store;
        }

        [HttpGet]
        [Authorize (Roles = "User")]
        [Route("")]
        public IActionResult GetOrders()
        {
            int Id = Int32.Parse(UserId);
            if (!store.Orders.ContainsKey(Id)) return Ok(Enumerable.Empty<Book>());

            var orderedBookIds = store.Orders.Single(o => o.Key == Id).Value;
            var orderedBooks = store.Books.Where(b => orderedBookIds.Contains(b.Id));
            return Ok(orderedBooks);
        }
    }
}
