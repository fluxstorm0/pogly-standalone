// THIS FILE IS AUTOMATICALLY GENERATED BY SPACETIMEDB. EDITS TO THIS FILE
// WILL NOT BE SAVED. MODIFY TABLES IN RUST INSTEAD.

import {
  // @ts-ignore
  Address,
  // @ts-ignore
  AlgebraicType,
  // @ts-ignore
  AlgebraicValue,
  // @ts-ignore
  BinaryReader,
  // @ts-ignore
  BinaryWriter,
  // @ts-ignore
  CallReducerFlags,
  // @ts-ignore
  DBConnectionBuilder,
  // @ts-ignore
  DBConnectionImpl,
  // @ts-ignore
  DBContext,
  // @ts-ignore
  Event,
  // @ts-ignore
  EventContextInterface,
  // @ts-ignore
  Identity,
  // @ts-ignore
  ProductType,
  // @ts-ignore
  ProductTypeElement,
  // @ts-ignore
  SumType,
  // @ts-ignore
  SumTypeVariant,
  // @ts-ignore
  TableCache,
  // @ts-ignore
  deepEqual,
} from "@clockworklabs/spacetimedb-sdk";
// @ts-ignore
import { ElementDataChange as __ElementDataChange } from "./element_data_change_type";
// @ts-ignore
import { ElementChange as __ElementChange } from "./element_change_type";
// @ts-ignore
import { GuestChange as __GuestChange } from "./guest_change_type";
// @ts-ignore
import { EmptyChange as __EmptyChange } from "./empty_change_type";
// @ts-ignore
import { ChatMessage as __ChatMessage } from "./chat_message_type";

// A namespace for generated variants and helper functions.
export namespace ChangeStruct {
  // These are the generated variant types for each variant of the tagged union.
  // One type is generated per variant and will be used in the `value` field of
  // the tagged union.
  export type ElementDataChange = { tag: "ElementDataChange", value: __ElementDataChange };
  export type ElementChange = { tag: "ElementChange", value: __ElementChange };
  export type GuestChange = { tag: "GuestChange", value: __GuestChange };
  export type EmptyChange = { tag: "EmptyChange", value: __EmptyChange };
  export type ChatMessage = { tag: "ChatMessage", value: __ChatMessage };

  // Helper functions for constructing each variant of the tagged union.
  // ```
  // const foo = Foo.A(42);
  // assert!(foo.tag === "A");
  // assert!(foo.value === 42);
  // ```
  export const ElementDataChange = (value: __ElementDataChange): ChangeStruct => ({ tag: "ElementDataChange", value });
  export const ElementChange = (value: __ElementChange): ChangeStruct => ({ tag: "ElementChange", value });
  export const GuestChange = (value: __GuestChange): ChangeStruct => ({ tag: "GuestChange", value });
  export const EmptyChange = (value: __EmptyChange): ChangeStruct => ({ tag: "EmptyChange", value });
  export const ChatMessage = (value: __ChatMessage): ChangeStruct => ({ tag: "ChatMessage", value });

  export function getTypeScriptAlgebraicType(): AlgebraicType {
    return AlgebraicType.createSumType([
      new SumTypeVariant("ElementDataChange", __ElementDataChange.getTypeScriptAlgebraicType()),
      new SumTypeVariant("ElementChange", __ElementChange.getTypeScriptAlgebraicType()),
      new SumTypeVariant("GuestChange", __GuestChange.getTypeScriptAlgebraicType()),
      new SumTypeVariant("EmptyChange", __EmptyChange.getTypeScriptAlgebraicType()),
      new SumTypeVariant("ChatMessage", __ChatMessage.getTypeScriptAlgebraicType()),
    ]);
  }

  export function serialize(writer: BinaryWriter, value: ChangeStruct): void {
      ChangeStruct.getTypeScriptAlgebraicType().serialize(writer, value);
  }

  export function deserialize(reader: BinaryReader): ChangeStruct {
      return ChangeStruct.getTypeScriptAlgebraicType().deserialize(reader);
  }

}

// The tagged union or sum type for the algebraic type `ChangeStruct`.
export type ChangeStruct = ChangeStruct.ElementDataChange | ChangeStruct.ElementChange | ChangeStruct.GuestChange | ChangeStruct.EmptyChange | ChangeStruct.ChatMessage;

export default ChangeStruct;

