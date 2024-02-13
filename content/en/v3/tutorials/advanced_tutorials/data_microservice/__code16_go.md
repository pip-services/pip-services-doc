
**/service/version1/BeaconsHttpServicesV1.go**

```go
package services1

import (
	"context"
	cref "github.com/pip-services3-gox/pip-services3-commons-gox/refer"
	cservices "github.com/pip-services3-gox/pip-services3-rpc-gox/services"
)

type BeaconsHttpServiceV1 struct {
	cservices.CommandableHttpService
}

func NewBeaconsHttpServiceV1() *BeaconsHttpServiceV1 {
	c := &BeaconsHttpServiceV1{}
	c.CommandableHttpService = *cservices.InheritCommandableHttpService(c, "v1/beacons")
	c.DependencyResolver.Put(context.Background(), "controller", cref.NewDescriptor("beacons", "controller", "*", "*", "1.0"))
	return c
}

```
