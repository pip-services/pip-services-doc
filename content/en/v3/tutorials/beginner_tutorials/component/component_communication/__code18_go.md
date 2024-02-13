
See [PrometheusCounters](../../../toolkit_api/golang/prometheus/count/prometheus_counters.md)

```go
// SetReferences method are sets references to dependent components.
// - references  cref.IReferences
// references to locate the component dependencies.
func (c *PrometheusCounters) SetReferences(ctx context.Context, references cref.IReferences) {
	c.logger.SetReferences(ctx, references)
	c.connectionResolver.SetReferences(ctx, references)
	ref := references.GetOneOptional(
		cref.NewDescriptor("pip-services", "context-info", "default", "*", "1.0"))
	contextInfo, _ := ref.(*cinfo.ContextInfo)
	if contextInfo != nil && c.source == "" {
		c.source = contextInfo.Name
	}
	if contextInfo != nil && c.instance == "" {
		c.instance = contextInfo.ContextId
	}
}
```
