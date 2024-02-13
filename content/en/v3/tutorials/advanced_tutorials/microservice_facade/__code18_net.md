
**/src/process/Program.cs**

```cs
using System;
using Pip.Services.SampleFacade.Container;

namespace Process
{
    public class Program
    {
        static void Main(string[] args)
        {
            try
            {
                var task = new FacadeProcess().RunAsync(args);
                task.Wait();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                Console.ReadLine();
            }
        }
    }
}

```

