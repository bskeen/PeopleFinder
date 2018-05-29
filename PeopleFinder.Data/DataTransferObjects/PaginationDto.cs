using System;
using System.Collections.Generic;
using System.Text;

namespace PeopleFinder.Data.DataTransferObjects
{
    public class PaginationDto
    {
        public PaginationDto()
        {
            Take = 25;
        }

        public int Skip { get; set; } = 0;
        private int _take;
        public int Take
        {
            get => _take;
            set
            {
                if (value > 100)
                {
                    _take = 100;
                }
                else if (value < 1)
                {
                    _take = 25;
                }
                else
                {
                    _take = value;
                }
            }
        }
    }
}
