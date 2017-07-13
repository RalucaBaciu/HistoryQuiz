using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using HistoryQuiz.Models;
using System.Net;
using Newtonsoft.Json;

namespace HistoryQuiz.Controllers
{
    public class HomeController : Controller
    {

        public Random a = new Random();
        public List<int> randomList = new List<int>();
        int MyNumber = 0;
        private void NewNumber()
        {
            for (int i = 0; i < 20; i++)
            {
                MyNumber = a.Next(0, 20);
                if (!randomList.Contains(MyNumber))
                    randomList.Add(MyNumber);
            }
        }
            
       
        //
        // GET: /Home/
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult StartQuiz()
        {
            var webClient = new WebClient();
            var json = webClient.DownloadString(@"https://raw.githubusercontent.com/RalucaBaciu/HistoryQuiz/master/history.json");
            Questions questions = JsonConvert.DeserializeObject<Questions>(json);

            List<Question> qDisplay = new List<Question>();
           // Question q = questions.questions.ElementAt(id);

            

            for (int i = 0; i < 20; i++)
            {
                NewNumber();
                int id = randomList.ElementAt(i);  
                qDisplay.Add(questions.questions.ElementAt(id));
                
            }

                return View(qDisplay);
        }

        
        
	}
}