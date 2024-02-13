
**/test/service.test/services/version1/BeaconsHttpServiceV1Test.py**

```cs
namespace Beacons.Services.Version1
{
    public class BeaconsHttpServiceV1Test
    {
        private BeaconV1 BEACON1 = new BeaconV1
        {
            Id = "1",
            Udi = "00001",
            Type = BeaconTypeV1.AltBeacon,
            SiteId = "1",
            Label = "TestBeacon1",
            Center = new CenterObjectV1 { Type = "Point", Coordinates = new double[] { 0, 0 } },
            Radius = 50
        };
        private BeaconV1 BEACON2 = new BeaconV1
        {
            Id = "2",
            Udi = "00002",
            Type = BeaconTypeV1.iBeacon,
            SiteId = "1",
            Label = "TestBeacon2",
            Center = new CenterObjectV1 { Type = "Point", Coordinates = new double[] { 2, 2 } },
            Radius = 70
        };

        private static readonly ConfigParams HttpConfig = ConfigParams.FromTuples(
            "connection.protocol", "http",
            "connection.host", "localhost",
            "connection.port", "3000"
        );

        private BeaconsMemoryPersistence _persistence;
        private BeaconsController _controller;
        private BeaconsHttpServiceV1 _service;
        private TestCommandableHttpClient _client;

        public BeaconsHttpServiceV1Test()
        {
            _persistence = new BeaconsMemoryPersistence();
            _controller = new BeaconsController();
            _service = new BeaconsHttpServiceV1();
            _client = new TestCommandableHttpClient("v1/beacons");

            IReferences references = References.FromTuples(
                new Descriptor("beacons", "persistence", "memory", "default", "1.0"), _persistence,
                new Descriptor("beacons", "controller", "default", "default", "1.0"), _controller,
                new Descriptor("beacons", "service", "http", "default", "1.0"), _service,
                new Descriptor("beacons", "client", "http", "default", "1.0"), _client
            );

            _controller.SetReferences(references);

            _service.Configure(HttpConfig);
            _service.SetReferences(references);

            _client.Configure(HttpConfig);

            _service.OpenAsync(null).Wait();
            // Todo: This is defect! Open shall not block the tread
            //Task.Run(() => _service.OpenAsync(null));
            //Thread.Sleep(1000); // Just let service a sec to be initialized

            _client.OpenAsync(null).Wait();
        }

        [Fact]
        public async Task TestCrudOperationsAsync()
        {
            // Create the first beacon
            var beacon = await _client.CallCommandAsync<BeaconV1>(
                "create_beacon", null, new { beacon = BEACON1 });
            Assert.NotNull(beacon);
            Assert.Equal(BEACON1.Udi, beacon.Udi);
            Assert.Equal(BEACON1.SiteId, beacon.SiteId);
            Assert.Equal(BEACON1.Type, beacon.Type);
            Assert.Equal(BEACON1.Label, beacon.Label);
            Assert.NotNull(beacon.Center);

            // Create the second beacon
            beacon = await _client.CallCommandAsync<BeaconV1>(
                "create_beacon", null, new { beacon = BEACON2 });
            Assert.NotNull(beacon);
            Assert.Equal(BEACON2.Udi, beacon.Udi);
            Assert.Equal(BEACON2.SiteId, beacon.SiteId);
            Assert.Equal(BEACON2.Type, beacon.Type);
            Assert.Equal(BEACON2.Label, beacon.Label);
            Assert.NotNull(beacon.Center);

            // Get all beacons
            var page = await _client.CallCommandAsync<DataPage<BeaconV1>>(
                "get_beacons",
                null,
                new
                {
                    filter = new FilterParams(),
                    paging = new PagingParams()
                }
            );
            Assert.NotNull(page);
            Assert.Equal(2, page.Data.Count);

            var beacon1 = page.Data[0];

            // Update the beacon
            beacon1.Label = "ABC";

            beacon = await _client.CallCommandAsync<BeaconV1>(
                "update_beacon", null, new { beacon = beacon1 });
            Assert.NotNull(beacon);
            Assert.Equal(beacon1.Id, beacon.Id);
            Assert.Equal("ABC", beacon.Label);

            // Get beacon by udi
            beacon = await _client.CallCommandAsync<BeaconV1>(
                "get_beacon_by_udi", null, new { udi = beacon1.Udi });
            Assert.NotNull(beacon);
            Assert.Equal(beacon1.Id, beacon.Id);

            // Delete the beacon
            beacon = await _client.CallCommandAsync<BeaconV1>(
                "delete_beacon_by_id", null, new { beacon_id = beacon1.Id });
            Assert.NotNull(beacon);
            Assert.Equal(beacon1.Id, beacon.Id);

            // Try to get deleted beacon
            beacon = await _client.CallCommandAsync<BeaconV1>(
                "get_beacon_by_id", null, new { beacon_id = beacon1.Id });
            Assert.Null(beacon);
        }

    }
}

```

Run the `dotnet test` command and make sure that all of the tests pass successfully.
