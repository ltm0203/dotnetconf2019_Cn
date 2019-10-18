using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotnetconfChina.Views.Shared.Components.Publsher
{
    public class PublsherViewComponent : ViewComponent
    {



        public IViewComponentResult Invoke()
        {

            return View();
        }

    }
}
