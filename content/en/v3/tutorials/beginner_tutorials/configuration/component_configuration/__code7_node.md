
See: [Commons module's](../../../toolkit_api/node/commons)

```typescript
export class DataController implements IConfigurable {
   	private _max_page_size: number = 5;
   	public constructor() { }

   	public configure(config: ConfigParams): void {
		this._max_page_size = config.getAsIntegerWithDefault('max_page_size', this._max_page_size);
   	}

   	public getData(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<MyData>> {
		paging.take = Math.min(paging.take, this._max_page_size);    
   	  	// Get data using max page size constraint.
   	}
}

```

