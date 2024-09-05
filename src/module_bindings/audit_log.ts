// THIS FILE IS AUTOMATICALLY GENERATED BY SPACETIMEDB. EDITS TO THIS FILE
// WILL NOT BE SAVED. MODIFY TABLES IN RUST INSTEAD.

// @ts-ignore
import { __SPACETIMEDB__, AlgebraicType, ProductType, BuiltinType, ProductTypeElement, SumType, SumTypeVariant, DatabaseTable, AlgebraicValue, ReducerEvent, Identity, Address, ClientDB, SpacetimeDBClient } from "@clockworklabs/spacetimedb-sdk";
// @ts-ignore
import { ChangeStruct } from "./change_struct";
// @ts-ignore
import { ChangeStruct } from "./change_struct";

export class AuditLog extends DatabaseTable
{
	public static db: ClientDB = __SPACETIMEDB__.clientDB;
	public static tableName = "AuditLog";
	public id: number;
	public unixTime: BigInt;
	public identity: Identity;
	public nickname: string;
	public reducer: string;
	public oldChange: ChangeStruct;
	public newChange: ChangeStruct;

	public static primaryKey: string | undefined = "id";

	constructor(id: number, unixTime: BigInt, identity: Identity, nickname: string, reducer: string, oldChange: ChangeStruct, newChange: ChangeStruct) {
	super();
		this.id = id;
		this.unixTime = unixTime;
		this.identity = identity;
		this.nickname = nickname;
		this.reducer = reducer;
		this.oldChange = oldChange;
		this.newChange = newChange;
	}

	public static serialize(value: AuditLog): object {
		return [
		value.id, value.unixTime, Array.from(value.identity.toUint8Array()), value.nickname, value.reducer, ChangeStruct.serialize(value.oldChange), ChangeStruct.serialize(value.newChange)
		];
	}

	public static getAlgebraicType(): AlgebraicType
	{
		return AlgebraicType.createProductType([
			new ProductTypeElement("id", AlgebraicType.createPrimitiveType(BuiltinType.Type.U32)),
			new ProductTypeElement("unixTime", AlgebraicType.createPrimitiveType(BuiltinType.Type.I64)),
			new ProductTypeElement("identity", AlgebraicType.createProductType([
			new ProductTypeElement("__identity_bytes", AlgebraicType.createArrayType(AlgebraicType.createPrimitiveType(BuiltinType.Type.U8))),
		])),
			new ProductTypeElement("nickname", AlgebraicType.createPrimitiveType(BuiltinType.Type.String)),
			new ProductTypeElement("reducer", AlgebraicType.createPrimitiveType(BuiltinType.Type.String)),
			new ProductTypeElement("oldChange", ChangeStruct.getAlgebraicType()),
			new ProductTypeElement("newChange", ChangeStruct.getAlgebraicType()),
		]);
	}

	public static fromValue(value: AlgebraicValue): AuditLog
	{
		let productValue = value.asProductValue();
		let __Id = productValue.elements[0].asNumber();
		let __UnixTime = productValue.elements[1].asBigInt();
		let __Identity = new Identity(productValue.elements[2].asProductValue().elements[0].asBytes());
		let __Nickname = productValue.elements[3].asString();
		let __Reducer = productValue.elements[4].asString();
		let __OldChange = ChangeStruct.fromValue(productValue.elements[5]);
		let __NewChange = ChangeStruct.fromValue(productValue.elements[6]);
		return new this(__Id, __UnixTime, __Identity, __Nickname, __Reducer, __OldChange, __NewChange);
	}

	public static *filterById(value: number): IterableIterator<AuditLog>
	{
		for (let instance of this.db.getTable("AuditLog").getInstances())
		{
			if (instance.id === value) {
				yield instance;
			}
		}
	}

	public static findById(value: number): AuditLog | undefined
	{
		return this.filterById(value).next().value;
	}

	public static *filterByUnixTime(value: BigInt): IterableIterator<AuditLog>
	{
		for (let instance of this.db.getTable("AuditLog").getInstances())
		{
			if (instance.unixTime === value) {
				yield instance;
			}
		}
	}

	public static *filterByIdentity(value: Identity): IterableIterator<AuditLog>
	{
		for (let instance of this.db.getTable("AuditLog").getInstances())
		{
			if (instance.identity.isEqual(value)) {
				yield instance;
			}
		}
	}

	public static *filterByNickname(value: string): IterableIterator<AuditLog>
	{
		for (let instance of this.db.getTable("AuditLog").getInstances())
		{
			if (instance.nickname === value) {
				yield instance;
			}
		}
	}

	public static *filterByReducer(value: string): IterableIterator<AuditLog>
	{
		for (let instance of this.db.getTable("AuditLog").getInstances())
		{
			if (instance.reducer === value) {
				yield instance;
			}
		}
	}


}

export default AuditLog;
