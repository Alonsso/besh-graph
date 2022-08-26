import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  NewBeaconSet,
  NewCapneoNFTIndexed,
  OpenseaFactoryChanged,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked
} from "../generated/CoreCapneo/CoreCapneo"

export function createNewBeaconSetEvent(
  oldBeacon: Address,
  newBeacon: Address
): NewBeaconSet {
  let newBeaconSetEvent = changetype<NewBeaconSet>(newMockEvent())

  newBeaconSetEvent.parameters = new Array()

  newBeaconSetEvent.parameters.push(
    new ethereum.EventParam("oldBeacon", ethereum.Value.fromAddress(oldBeacon))
  )
  newBeaconSetEvent.parameters.push(
    new ethereum.EventParam("newBeacon", ethereum.Value.fromAddress(newBeacon))
  )

  return newBeaconSetEvent
}

export function createNewCapneoNFTIndexedEvent(
  proxy: Address,
  proxyData: ethereum.Tuple
): NewCapneoNFTIndexed {
  let newCapneoNftIndexedEvent = changetype<NewCapneoNFTIndexed>(newMockEvent())

  newCapneoNftIndexedEvent.parameters = new Array()

  newCapneoNftIndexedEvent.parameters.push(
    new ethereum.EventParam("proxy", ethereum.Value.fromAddress(proxy))
  )
  newCapneoNftIndexedEvent.parameters.push(
    new ethereum.EventParam("proxyData", ethereum.Value.fromTuple(proxyData))
  )

  return newCapneoNftIndexedEvent
}

export function createOpenseaFactoryChangedEvent(
  old: Address,
  current: Address
): OpenseaFactoryChanged {
  let openseaFactoryChangedEvent = changetype<OpenseaFactoryChanged>(
    newMockEvent()
  )

  openseaFactoryChangedEvent.parameters = new Array()

  openseaFactoryChangedEvent.parameters.push(
    new ethereum.EventParam("old", ethereum.Value.fromAddress(old))
  )
  openseaFactoryChangedEvent.parameters.push(
    new ethereum.EventParam("current", ethereum.Value.fromAddress(current))
  )

  return openseaFactoryChangedEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}
