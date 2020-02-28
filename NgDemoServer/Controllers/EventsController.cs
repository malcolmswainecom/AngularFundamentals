using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace NgDemoServer.Controllers
{
    [ApiController]
    [Route("api/events")]
    public class EventsController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;

        public EventsController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public JsonStringResult Get()
        {
          var myJsonString = System.IO.File.ReadAllText("C:\\Projects\\Spikes\\AngularFundamentals\\ng-fundamentals1\\NgDemoServer\\events.json");
          return new JsonStringResult(myJsonString);
        }
    }
}

public class JsonStringResult : ContentResult
{
  public JsonStringResult(string json)
  {
    Content = json;
    ContentType = "application/json";
  }
}
