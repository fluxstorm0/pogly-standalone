// THIS FILE IS AUTOMATICALLY GENERATED BY SPACETIMEDB. EDITS TO THIS FILE
// WILL NOT BE SAVED. MODIFY TABLES IN RUST INSTEAD.

// @ts-ignore
import { __SPACETIMEDB__, AlgebraicType, ProductType, BuiltinType, ProductTypeElement, DatabaseTable, AlgebraicValue, ReducerArgsAdapter, SumTypeVariant, Serializer, Identity, Address, ReducerEvent, Reducer, SpacetimeDBClient } from "@clockworklabs/spacetimedb-sdk";

export class RefreshOverlayClearStorageReducer extends Reducer
{
	public static reducerName: string = "RefreshOverlayClearStorage";
	public static call() {
		this.getReducer().call();
	}

	public call() {
		const serializer = this.client.getSerializer();
		this.client.call("RefreshOverlayClearStorage", serializer);
	}

	public static deserializeArgs(_adapter: ReducerArgsAdapter): any[] {
		return [];
	}

	public static on(callback: (reducerEvent: ReducerEvent, ) => void) {
		this.getReducer().on(callback);
	}
	public on(callback: (reducerEvent: ReducerEvent, ) => void)
	{
		this.client.on("reducer:RefreshOverlayClearStorage", callback);
	}
}


export default RefreshOverlayClearStorageReducer
