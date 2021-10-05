using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthResource.Api.Models
{
    public class BookStore
    {
        public List<Book> Books => new List<Book>
        {
            new Book{Id = 1, Author = "J.K. Rowling", Title = "Hurry Potter and Philosopher's Stone", Price = 10.5M},
            new Book{Id = 2, Author = "Herman Melville", Title = "MOby-Dick", Price = 8.9M},
            new Book{Id = 3, Author = "Jules Verne", Title = "The mysterious Island", Price = 15.5M},
            new Book{Id = 4, Author = "Carlo Collodi", Title = "The adventures of Pinocchio", Price = 10.5M}
        };

        public Dictionary<int, int[]> Orders => new Dictionary<int, int[]>
        {
            { 1, new int[]{1, 3} },
            { 2, new int[] {2, 3, 4} }
        };
    }
}
