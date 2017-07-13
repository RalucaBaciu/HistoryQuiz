using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HistoryQuiz.Models
{
    public class Question
    {
        public string id { get; set; }
        public string question {get;set;}
        
        public string[] answers { get; set; }
    }
}