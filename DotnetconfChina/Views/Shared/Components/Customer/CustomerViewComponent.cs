using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotnetconfChina.Views.Shared.Components.Customer
{
    public class CustomerViewComponent:ViewComponent
    {



        public IViewComponentResult Invoke()
        {

            return View();
        }

    }
}
