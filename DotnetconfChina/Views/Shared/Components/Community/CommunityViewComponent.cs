using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotnetconfChina.Views.Shared.Components.Schedule
{
    public class CommunityViewComponent : ViewComponent
    {



        public IViewComponentResult Invoke()
        {

            return View();
        }

    }
}
